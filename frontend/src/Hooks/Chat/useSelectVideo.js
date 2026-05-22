import { useEffect } from "react";

const useSelectVideo = ({
  user,
  scrollRef,
  loadMessages,
  stopPolling,
  resetTypewriter,
  setYoutubeUrl,
  setErrorMsg,
  setFailedVideoId,
  setLastQuestion,
  setLoading,
  setLoadingMsg,
  setActiveVideoId,
  setHasAskedOnce,
  setIsPageLoading,
  setMessages,
  setHistory,
  fetchHistory,
}) => {

  // restore messages on reload once user is available
  useEffect(() => {
    if (!user) return;
    const savedId = sessionStorage.getItem("activeVideoId");
    if (!savedId) return;
    setIsPageLoading(true);
    const session_id = `${user.id}_${savedId}`;
    loadMessages(session_id).finally(() => {
      setTimeout(() => setIsPageLoading(false), 1000);
    });
  }, [user]);

  const handleSelectVideo = (item) => {
    stopPolling();
    resetTypewriter();
    setIsPageLoading(true);
    setYoutubeUrl(`https://youtube.com/watch?v=${item.video_id}`);
    setErrorMsg("");
    setFailedVideoId(null);
    setLastQuestion("");
    setLoading(false);
    setLoadingMsg("");
    setActiveVideoId(item.video_id);
    setHasAskedOnce(true);

    const session_id = `${user?.id}_${item.video_id}`;
    loadMessages(session_id).finally(() => {
      setIsPageLoading(false);
    });
  };

  return { handleSelectVideo };
};

export default useSelectVideo;