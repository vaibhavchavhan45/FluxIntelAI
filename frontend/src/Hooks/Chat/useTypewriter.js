import { useRef } from "react";

/**
 * useTypewriter
 * Manages a chunk queue and types characters one by one into the last assistant message.
 * Without this, multiple chunks arriving simultaneously cause characters to mix up.
 */
const useTypewriter = (setMessages) => {
  const chunkQueue = useRef([]);
  const isTyping = useRef(false);

  // picks next chunk from queue and types it char by char
  // calls itself recursively until queue is empty
  const typeFromQueue = () => {
    if (chunkQueue.current.length === 0) {
      isTyping.current = false;
      return;
    }

    isTyping.current = true;
    const chunk = chunkQueue.current.shift();
    let i = 0;

    const typeNextChar = () => {
      if (i < chunk.length) {
        const char = chunk[i];
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last?.role === "assistant") {
            updated[updated.length - 1] = { ...last, content: last.content + char };
          }
          return updated;
        });
        i++;
        setTimeout(typeNextChar, 10);
      } else {
        // current chunk done, move to next one
        typeFromQueue();
      }
    };

    typeNextChar();
  };

  // puts incoming chunk in queue, starts typing if not already going
  const appendChunkToLastMessage = (chunk) => {
    chunkQueue.current.push(chunk);
    if (!isTyping.current) {
      typeFromQueue();
    }
  };

  // adds empty assistant bubble before streaming starts
  // so user sees something immediately instead of blank screen
  const pushEmptyAssistantMessage = () => {
    setMessages((prev) => [...prev, { role: "assistant", content: "", timestamps: null }]);
  };

  // called after stream ends — attaches timestamps to last assistant msg
  const setTimestampsOnLastMessage = (timestamps) => {
    setMessages((prev) => {
      const updated = [...prev];
      const last = updated[updated.length - 1];
      if (last?.role === "assistant") {
        updated[updated.length - 1] = { ...last, timestamps };
      }
      return updated;
    });
  };

  // resets queue — call this before starting a new stream
  const resetTypewriter = () => {
    chunkQueue.current = [];
    isTyping.current = false;
  };

  return {
    chunkQueue,
    isTyping,
    appendChunkToLastMessage,
    pushEmptyAssistantMessage,
    setTimestampsOnLastMessage,
    resetTypewriter,
  };
};

export default useTypewriter;