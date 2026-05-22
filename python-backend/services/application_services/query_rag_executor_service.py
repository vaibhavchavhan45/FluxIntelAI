import json
from fastapi import HTTPException

from services.core_rag.rag_chain_service import build_rag_chain
from services.application_services.user_query_validation_service import query_validator
from services.application_services.response_formatter_service import clean_llm_response_text
from services.memory.chat_memory_manager import ChatMemoryManager


def execute_rag_flow(videoId: str, question: str, userId: str = "default_user"):
    """
    Executing the RAG flow for the READY state.
    Yields streaming tokens, then timestamps as final chunk.
    """

    print("state is READY.... executing RAG flow")

    question = query_validator(question)
    print("received question now")

    session_id = f"{userId}_{videoId}"
    print(session_id, "This is my session id")
    memory = ChatMemoryManager()
    print("After memory management")

    if not memory.is_chat_valid(session_id):
        print("Chat not valid")
        raise HTTPException(
            status_code=400,
            detail="Chat history limit reached. Please start a new chat."
        )
    print("after chat, before try")

    try:
        print("Inside try")
        chat_history = memory.load_history(session_id)
        print("After chat history", chat_history)

        data_chain, template, model = build_rag_chain(videoId)
        print("After rag chain")

        retrieval_question = f"{chat_history}\nUser: {question}" if chat_history else question

        # Step 1: retrieval (get context + docs + timestamps)
        retrieved = data_chain.invoke({"question": question})
        print("After retrieval")

        context = retrieved["context"]
        docs = retrieved["docs"]

        # extract timestamps
        primary_start_time = None
        primary_end_time = None
        remaining_timestamps = []

        if docs:
            primary_start_time = docs[0].metadata.get("start_time", None)
            primary_end_time = docs[0].metadata.get("end_time", None)
            for doc in docs[1:]:
                remaining_timestamps.append({
                    "start_time": doc.metadata.get("start_time", None),
                    "end_time": doc.metadata.get("end_time", None)
                })

        # save user message before streaming
        memory.save_user_message(session_id, question)
        print("After saving user msg")

        # Step 2: format prompt
        prompt_value = template.invoke({
            "chat_history": chat_history,
            "context": context,
            "question": question
        })

        # Step 3: stream directly from model
        full_response = ""
        for chunk in model.stream(prompt_value):
            token = chunk.content
            full_response += token
            yield token

        # Step 4: clean full response after stream ends
        full_response = clean_llm_response_text(full_response)

        # Step 5: check answer quality first
        NO_ANSWER_PHRASES = [
            "i couldn't find",
            "couldn't find this information",
            "not in the video",
            "not mentioned in the video",
            "no information",
            "not covered in the video",
            "doesn't mention",
            "does not mention",
            "not discussed",
            "not available in the video",
        ]
        response_lower = full_response.lower()
        llm_has_answer = not any(phrase in response_lower for phrase in NO_ANSWER_PHRASES)

        timestamps_to_save = None
        if llm_has_answer:
            timestamps_to_save = {
                'primary_start_time': primary_start_time,
                'primary_end_time': primary_end_time,
                'all_remaining_timestamps': remaining_timestamps
            }

        # Step 6: save memory after stream ends
        memory.save_ai_message(session_id, full_response, timestamps=timestamps_to_save)
        memory.maybe_summarize(session_id)
        print("After saving memory")

        # Step 7: stream timestamps to frontend
        if llm_has_answer:
            yield f"##TIMESTAMPS##{json.dumps(timestamps_to_save)}"

    except ValueError as e:
        yield f"##ERROR##{str(e)}"

    except Exception as e:
        print(f"ERROR: {str(e)}")
        yield f"##ERROR##Error processing query"