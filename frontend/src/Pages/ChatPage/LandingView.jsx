import YoutubeInput from "../../Components/YoutubeInput";
import QuestionInput from "../../Components/QuestionInput";
import LandingUserMenu from "../../Components/Chat/LandingUserMenu";
import { handleLogout } from "../../utils/authUtils";

const LandingView = ({
  user,
  youtubeUrl,
  setYoutubeUrl,
  question,
  setQuestion,
  handleAsk,
  loading,
  errorMsg,
  failedVideoId,
  handleRetry,
}) => {
  return (
    <div className="flex flex-1 items-center justify-center px-4 sm:px-6 relative">
      <div className="w-full max-w-[95%] sm:max-w-[600px] space-y-4 sm:space-y-5">

        {errorMsg && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-center text-sm text-red-400">{errorMsg}</p>
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
        )}

        <YoutubeInput value={youtubeUrl} onChange={setYoutubeUrl} />
        <QuestionInput
          value={question}
          onChange={setQuestion}
          onAsk={handleAsk}
          mode="initial"
          youtubeUrl={youtubeUrl}
          loading={loading}
        />
      </div>
        <LandingUserMenu user={user} onLogout={handleLogout} />
    </div>
  );
};

export default LandingView;