import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { API_URLS } from "../../Config/urlConfig";
import { handleLogout } from "../../utils/authUtils";

import useChatSession from "../../Hooks/Chat/useChatSession";
import useTypewriter from "../../Hooks/Chat/useTypewriter";
import useVideoPolling from "../../Hooks/Chat/useVideoPolling";
import useChat from "../../Hooks/Chat/useChat";
import useLoadMessages from "../../Hooks/Chat/useLoadMessages";
import useSelectVideo from "../../Hooks/Chat/useSelectVideo";

import TopBar from "../../Components/TopBar";
import Sidebar from "../../Components/Sidebar";
import LandingView from "./LandingView";
import ChatView from "./ChatView";


function ChatPage() {
  const location = useLocation();

  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [question, setQuestion] = useState("");
  const [hasAskedOnce, setHasAskedOnce] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [failedVideoId, setFailedVideoId] = useState(null);
  const [lastQuestion, setLastQuestion] = useState("");

  const [sidebarOpen, setSidebarOpen] = useState(() => {
    if (window.innerWidth < 768) return false;
    const saved = sessionStorage.getItem("sidebarOpen");
    if (saved !== null) return saved === "true";
    return true;
  });

  const [activeVideoId, setActiveVideoId] = useState(() => sessionStorage.getItem("activeVideoId") || null);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const chatInputRef = useRef(null);
  const scrollRef = useRef(null);
  const assistantMessagePushed = useRef(false);

  const { user, history, setHistory, fetchHistory } = useChatSession();

  useEffect(() => {
    sessionStorage.setItem("sidebarOpen", sidebarOpen);
  }, [sidebarOpen]);

  useEffect(() => {
    if (activeVideoId) sessionStorage.setItem("activeVideoId", activeVideoId);
    else sessionStorage.removeItem("activeVideoId");
  }, [activeVideoId]);


  useEffect(() => {
    sessionStorage.removeItem("activeVideoId");
    sessionStorage.removeItem("visited_app");
    sessionStorage.setItem("visited_app", "true");
    setYoutubeUrl("");
    setQuestion("");
    setHasAskedOnce(false);
  }, [location.key]);

  const { loadMessages, isLoadingHistory } = useLoadMessages(setMessages, scrollRef);

  const {
    appendChunkToLastMessage,
    pushEmptyAssistantMessage,
    setTimestampsOnLastMessage,
    resetTypewriter,
  } = useTypewriter(setMessages);

  const { startPolling, stopPolling } = useVideoPolling({
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
  });

  const { handleAsk, handleRetry, handleNewChat } = useChat({
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
  });

  const { handleSelectVideo } = useSelectVideo({
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
  });

  return (
    <div className="h-screen bg-[#1e1e1e] flex">

      {hasAskedOnce && (
        <Sidebar
          history={history}
          setHistory={setHistory}
          user={user}
          activeVideoId={activeVideoId}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          onSelectVideo={handleSelectVideo}
          onDeleteChat={(videoId) => {
            if (activeVideoId === videoId) {
              sessionStorage.removeItem("activeVideoId");
              setActiveVideoId(null);
              setMessages([]);
              setHasAskedOnce(false);
            }
          }}
        />
      )}

      <div className="flex-1 flex flex-col">
        <TopBar
          onNewChat={handleNewChat}
          hasAskedOnce={hasAskedOnce}
          onViewChats={() => {
            setHasAskedOnce(true);
            setSidebarOpen(true);
            setActiveVideoId(null);
            setMessages([]);
            setYoutubeUrl("");
          }}
          user={user}
          onLogout={handleLogout}
          onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />

        {!hasAskedOnce && (
          <LandingView
            user={user}
            youtubeUrl={youtubeUrl}
            setYoutubeUrl={setYoutubeUrl}
            question={question}
            setQuestion={setQuestion}
            handleAsk={handleAsk}
            loading={loading}
            errorMsg={errorMsg}
            failedVideoId={failedVideoId}
            handleRetry={handleRetry}
          />
        )}

        {hasAskedOnce && (
          <ChatView
            messages={messages}
            loading={loading}
            loadingMsg={loadingMsg}
            scrollRef={scrollRef}
            youtubeUrl={youtubeUrl}
            question={question}
            setQuestion={setQuestion}
            handleAsk={handleAsk}
            errorMsg={errorMsg}
            failedVideoId={failedVideoId}
            handleRetry={handleRetry}
            chatInputRef={chatInputRef}
            isLoadingHistory={isLoadingHistory}
            isPageLoading={isPageLoading}
            sidebarOpen={sidebarOpen}
          />
        )}
      </div>
    </div>
  );
}

export default ChatPage;