import { useRef } from "react";
import { askQuestion, pollVideoStatus } from "../../Services/api";

const POLL_INTERVAL_MS = 3000;

const useVideoPolling = ({
  user,
  setLoading,
  setLoadingMsg,
  setErrorMsg,
  setFailedVideoId,
  setLastQuestion,
  pushEmptyAssistantMessage,
  appendChunkToLastMessage,
  setTimestampsOnLastMessage,
  resetTypewriter,
  assistantMessagePushed,
  chatInputRef,
  fetchHistory,
}) => {
  const pollTimerRef = useRef(null);

  const stopPolling = () => {
    if (pollTimerRef.current) {
      clearInterval(pollTimerRef.current);
      pollTimerRef.current = null;
    }
  };

  const startPolling = (videoId, youtubeUrl, question) => {
    setLoadingMsg("Analyzing video, preparing Insights...");

    pollTimerRef.current = setInterval(async () => {
      try {
        const statusRes = await pollVideoStatus(videoId);

        if (statusRes.status === "READY") {
          stopPolling();
          setLoadingMsg("Almost there, fetching your answer...");
          resetTypewriter();
          assistantMessagePushed.current = false;

          await askQuestion(
            youtubeUrl,
            question,
            (chunk) => {
              if (!assistantMessagePushed.current) {
                pushEmptyAssistantMessage();
                assistantMessagePushed.current = true;
                setLoading(false);
                setLoadingMsg("");
              }
              appendChunkToLastMessage(chunk);
            },
            (timestamps) => setTimestampsOnLastMessage(timestamps)
          );

          chatInputRef.current?.focus();
          fetchHistory();
        }

        if (statusRes.status === "FAILED") {
          stopPolling();
          setFailedVideoId(videoId);
          setLastQuestion(question);
          setErrorMsg("We were unable to process this video. Please retry or try a different video.");
          setLoading(false);
          setLoadingMsg("");
        }

      } catch {
        stopPolling();
        setErrorMsg("Something went wrong. Please check your connection and try again.");
        setLoading(false);
        setLoadingMsg("");
      }
    }, POLL_INTERVAL_MS);
  };

  return { pollTimerRef, startPolling, stopPolling };
};

export default useVideoPolling;