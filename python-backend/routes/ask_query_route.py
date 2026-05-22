from fastapi import APIRouter, BackgroundTasks
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from services.application_services.query_rag_executor_service import execute_rag_flow
from services.application_services.query_state_handler_service import handle_video_state

router = APIRouter()


# pydantic schema
class AskQuery(BaseModel):
    videoId: str
    question: str
    languages: str
    title: str = ""
    isRetry: bool = False
    user_id: str = ""

@router.post('/query')
async def ask_question(data: AskQuery, background_tasks: BackgroundTasks):
    print("Video Id received : ", data.videoId)
    print("Question received : ", data.question)
    print("Language received : ", data.languages)
    print("User ID received : ", data.user_id)

    # Handles NOT_FOUND, PROCESSING, READY
    state_result = handle_video_state(data.videoId, data.languages, background_tasks, data.isRetry, data.title, data.user_id)

    # state is not READY return the state
    if state_result is not None:
        return state_result

    # state is READY stream the RAG flow
    return StreamingResponse(
    execute_rag_flow(data.videoId, data.question, data.user_id),
    media_type="text/event-stream"
)