import { useEffect, useLayoutEffect, useRef, useState } from "react";
import MessageRenderer from "../Components/Chat/MessageRenderer";
import SkeletonLoader from "../Components/Chat/SkeletonLoader";

function TypingDots({ message }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce [animation-delay:0ms]" />
        <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce [animation-delay:150ms]" />
        <span className="w-2 h-2 rounded-full bg-white/40 animate-bounce [animation-delay:300ms]" />
      </div>
      {message && (
        <p className="text-xs text-white/30 tracking-wide">{message}</p>
      )}
    </div>
  );
}

function formatTime(seconds) {
  if (!seconds && seconds !== 0) return null;
  const s = Math.floor(seconds);
  const hrs = Math.floor(s / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;
  if (hrs > 0) {
    return `${hrs}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${mins}:${String(secs).padStart(2, "0")}`;
}

function PrimaryTimestamp({ startTime, endTime, youtubeUrl }) {
  if (!startTime) return null;

  const handleClick = () => {
    const seconds = Math.floor(startTime);
    const url = youtubeUrl
      ? `${youtubeUrl}&t=${seconds}s`
      : `https://www.youtube.com/watch?t=${seconds}s`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white/80 text-xs px-3 py-1.5 rounded-full mt-2"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <polygon points="8,5 19,12 8,19" fill="#ff0000" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
      <span>
        Watch at {formatTime(startTime)}
        {endTime ? ` – ${formatTime(endTime)}` : ""}
      </span>
    </button>
  );
}

function RemainingTimestamps({ timestamps, youtubeUrl }) {
  const [open, setOpen] = useState(false);

  if (!timestamps || timestamps.length === 0) return null;

  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/60 transition-colors text-xs"
      >
        <span>{open ? "▲" : "▼"}</span>
        <span>{open ? "Hide references" : `${timestamps.length} more reference${timestamps.length > 1 ? "s" : ""}`}</span>
      </button>

      {open && (
        <div className="flex flex-wrap gap-2 mt-2">
          {timestamps.map((ts, i) => {
            if (!ts.start_time) return null;
            const seconds = Math.floor(ts.start_time);
            const url = youtubeUrl
              ? `${youtubeUrl}&t=${seconds}s`
              : `https://www.youtube.com/watch?t=${seconds}s`;
            return (
              <button
                key={i}
                onClick={() => window.open(url, "_blank")}
                className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 transition-colors text-white/50 text-xs px-2.5 py-1 rounded-full"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="8,5 19,12 8,19" fill="#ff0000" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
                <span>Ref {i + 2} · {formatTime(ts.start_time)}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ChatMessages({ messages = [], loading = false, loadingMsg = "", scrollContainerRef, youtubeUrl = "", isLoadingHistory, isPageLoading, sidebarOpen }) {
  const lastUserRef = useRef(null);
  const lastUserIndex = messages.map(m => m.role).lastIndexOf("user");

  useEffect(() => {
    if (isLoadingHistory?.current) return;
    const lastMsg = messages[messages.length - 1];
    if (!lastMsg || lastMsg.role !== "user") return;
    if (messages.filter(m => m.role === "user").length <= 1) return;

    if (lastUserRef.current && scrollContainerRef?.current) {
      const container = scrollContainerRef.current;
      const el = lastUserRef.current;
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const scrollAmount = container.scrollTop + (elRect.top - containerRect.top) - 24;
      container.scrollTo({ top: scrollAmount, behavior: "smooth" });
    }
  }, [messages.length]);

  // scroll to bottom while messages render behind skeleton
  useLayoutEffect(() => {
    if (isPageLoading && scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isPageLoading]);

  return (
    <div className="relative">
      <div className={`space-y-5 pt-4 transition-opacity duration-500 ${isPageLoading ? "opacity-0" : "opacity-100"}`}>
        {messages.map((msg, index) => {
          const isUser = msg.role === "user";
          const isLastUser = index === lastUserIndex;
          const timestamps = msg.timestamps || null;

          return (
            <div
              key={index}
              ref={isLastUser ? lastUserRef : null}
              id={msg.id || undefined}
              data-role={msg.role}
              className={`flex flex-col ${!isUser ? "mb-16" : ""}`}
              style={{ alignItems: isUser ? "flex-end" : "flex-start" }}
            >
              <div
                className={`max-w-[85%] sm:max-w-[70%] md:max-w-[65%] text-sm sm:text-base whitespace-pre-wrap break-words ${isUser
                  ? `bg-[#2f2f2f] text-white px-4 py-2 ${msg.isMultiline ? "rounded-xl" : "rounded-full"}`
                  : "text-[#f3f3f3]"
                  }`}
              >
                {isUser ? msg.content : <MessageRenderer content={msg.content} />}
              </div>

              {!isUser && timestamps && (
                <PrimaryTimestamp
                  startTime={timestamps.primary_start_time}
                  endTime={timestamps.primary_end_time}
                  youtubeUrl={youtubeUrl}
                />
              )}

              {!isUser && timestamps?.all_remaining_timestamps?.length > 0 && (
                <RemainingTimestamps
                  timestamps={timestamps.all_remaining_timestamps}
                  youtubeUrl={youtubeUrl}
                />
              )}
            </div>
          );
        })}

        {loading && (
          <div className="flex mb-16" style={{ justifyContent: "flex-start" }}>
            <TypingDots message={loadingMsg} />
          </div>
        )}

        <div style={{ height: "120px" }} />
      </div>

      {/* skeleton overlays on top while loading */}
      {isPageLoading && (
        <div className="fixed inset-0 bg-[#1e1e1e] z-10 flex items-center justify-center transition-opacity duration-300">
          <SkeletonLoader sidebarOpen={sidebarOpen} />
        </div>
      )}
    </div>
  );
}

export default ChatMessages;