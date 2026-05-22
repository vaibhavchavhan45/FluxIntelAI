import { askQuestion, retryVideo } from "../../Services/api";

const extractVideoId = (url) => {
  if (url.includes("youtu.be/")) return url.split("youtu.be/")[1]?.split("?")[0];
  return url.split("v=")[1]?.split("&")[0];
};

const isRenderedMultiline = (text) => {
  const el = document.createElement("div");
  el.style.cssText = "position:absolute;visibility:hidden;white-space:pre-wrap;word-break:break-word;width:520px;font-size:16px;line-height:24px";
  el.textContent = text;
  document.body.appendChild(el);
  const height = el.scrollHeight;
  document.body.removeChild(el);
  return height > 24;
};

const useChat = ({
  user,
  youtubeUrl,
  setYoutubeUrl,
  question,
  setQuestion,
  setMessages,
  setLoading,
  setLoadingMsg,
  setErrorMsg,
  setHasAskedOnce,
  setFailedVideoId,
  setLastQuestion,
  failedVideoId,
  lastQuestion,
  assistantMessagePushed,
  pushEmptyAssistantMessage,
  appendChunkToLastMessage,
  setTimestampsOnLastMessage,
  resetTypewriter,
  startPolling,
  stopPolling,
  fetchHistory,
  setHistory,
  setActiveVideoId,
  chatInputRef,
}) => {

  const handleAsk = async () => {
    const trimmed = question.trim();
    if (!trimmed || !youtubeUrl.trim()) return;

    setErrorMsg("");
    setHasAskedOnce(true);

    const isMultiline = trimmed.split("\n").filter((l) => l.trim()).length > 1 || isRenderedMultiline(trimmed);
    setMessages((prev) => [...prev, { role: "user", content: trimmed, isMultiline }]);
    setQuestion("");
    setLoading(true);
    setLoadingMsg("Connecting to the knowledge engine...");
    assistantMessagePushed.current = false;
    resetTypewriter();

    const videoId = extractVideoId(youtubeUrl);

    // set active video immediately + push placeholder into sidebar
    setActiveVideoId(videoId);
    setHistory((prev) => {
      const exists = prev.find((h) => h.video_id === videoId);
      if (exists) return prev;
      return [{ video_id: videoId, title: null, status: "PROCESSING" }, ...prev];
    });

    try {
      const res = await askQuestion(
        youtubeUrl,
        trimmed,
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

      if (res) {
        const { videoId: resVideoId, pythonResponse } = res;

        if (pythonResponse?.status === "PROCESSING") {
          startPolling(resVideoId, youtubeUrl, trimmed);
          return;
        }

        if (pythonResponse?.status === "FAILED") {
          setFailedVideoId(resVideoId);
          setLastQuestion(trimmed);
          setErrorMsg(pythonResponse.message || "We were unable to process this video. Please retry or try a different video.");
          setLoading(false);
          setLoadingMsg("");
          return;
        }
      }

      chatInputRef.current?.focus();
      fetchHistory(); // replaces placeholder with real title

    } catch {
      setErrorMsg("Something went wrong. Please check your connection and try again.");
      setLoading(false);
      setLoadingMsg("");
    }
  };

  const handleRetry = async () => {
    setErrorMsg("");
    setLoading(true);
    setLoadingMsg("Retrying...");

    const res = await retryVideo(youtubeUrl, lastQuestion);

    if (res?.pythonResponse?.status === "FAILED") {
      setFailedVideoId(null);
      setErrorMsg("This video cannot be processed after multiple attempts. Please try a different video.");
      setLoading(false);
      setLoadingMsg("");
      return;
    }

    startPolling(failedVideoId, youtubeUrl, lastQuestion);
  };

  const handleNewChat = () => {
    stopPolling();
    resetTypewriter();
    setMessages([]);
    setYoutubeUrl("");
    setQuestion("");
    setHasAskedOnce(false);
    setLoading(false);
    setLoadingMsg("");
    setErrorMsg("");
    setFailedVideoId(null);
    setLastQuestion("");
    sessionStorage.removeItem('activeVideoId');
  };

  return { handleAsk, handleRetry, handleNewChat };
};

export default useChat;