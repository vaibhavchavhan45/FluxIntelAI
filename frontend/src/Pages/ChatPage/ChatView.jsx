import ChatMessages from "../../Components/ChatMessages";
import QuestionInput from "../../Components/QuestionInput";

const ChatView = ({
  messages,
  loading,
  loadingMsg,
  scrollRef,
  youtubeUrl,
  question,
  setQuestion,
  handleAsk,
  errorMsg,
  failedVideoId,
  handleRetry,
  chatInputRef,
  isLoadingHistory,
  isPageLoading,
  sidebarOpen,
}) => {
  return (
    <>
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 sm:px-4 pt-4 min-h-0 relative">
        <div className="max-w-[670px] mx-auto lg:max-w-[720px]">
          <ChatMessages
            messages={messages}
            loading={loading}
            loadingMsg={loadingMsg}
            scrollContainerRef={scrollRef}
            youtubeUrl={youtubeUrl}
            isLoadingHistory={isLoadingHistory}
            isPageLoading={isPageLoading}
            sidebarOpen={sidebarOpen}
          />
        </div>
      </div>

      {errorMsg && (
        <div className="px-4 pb-2 max-w-[700px] mx-auto w-full">
          <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
            <p className="text-sm text-red-400 text-center">{errorMsg}</p>
            {failedVideoId && (
              <button
                onClick={handleRetry}
                className="flex items-center gap-2 text-sm px-5 py-2 rounded-full bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 hover:border-red-500/50 transition-all duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.902h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.919Z" clipRule="evenodd" />
                </svg>
                Retry
              </button>
            )}
          </div>
        </div>
      )}

      <div className="px-3 sm:px-4 pb-5 sm:pb-7 shrink-0">
        <div className="max-w-[850px] mx-auto mt-3 sm:mt-4">
          <QuestionInput
            value={question}
            onChange={setQuestion}
            onAsk={handleAsk}
            mode="chat"
            loading={loading}
            inputRef={chatInputRef}
            disabled={(!failedVideoId && errorMsg !== "") || !youtubeUrl}
          />
        </div>
      </div>
    </>
  );
};

export default ChatView;