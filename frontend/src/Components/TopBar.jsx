import logo from "../assets/logo.jpeg";

function TopBar({ onNewChat, onViewChats, hasAskedOnce, user, onLogout, onToggleSidebar }) {
  return (
    <div className="
      w-full h-16 flex items-center justify-between px-4 sm:px-6
      bg-[#1e1e1e]
      sticky top-0 z-50
      overflow-hidden
    ">

      {/* hide logo on mobile when in chat */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        {hasAskedOnce && (
          <button onClick={onToggleSidebar} className="flex sm:hidden flex-col gap-1 p-1 mr-1">
            <span className="block w-5 h-0.5 bg-white/50" />
            <span className="block w-3 h-0.5 bg-white/50" />
          </button>
        )}
        <img
          src={logo}
          alt="FluxIntelAI Logo"
          className={`h-9 w-9 sm:h-11 sm:w-11 rounded-xl object-contain ${hasAskedOnce ? "hidden sm:block" : "block"}`}
        />
        <div className="flex flex-col leading-tight">
          <span className="tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-[18px] sm:text-[22px] font-black text-white">F</span>
            <span className="text-[18px] sm:text-[22px] font-black text-white">lux</span>
            <span className="text-[18px] sm:text-[22px] font-black text-white mx-0.5">I</span>
            <span className="text-[18px] sm:text-[22px] font-black text-white">ntel</span>
            <span className="text-[18px] sm:text-[22px] font-black text-white ml-0.5">AI</span>
          </span>
          <span
            className="text-[10px] sm:text-[12px] text-white/30 tracking-[0.1em]"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 300 }}
          >
            The AI Knowledge Engine
          </span>
        </div>
      </div>

      {/* on mobile in chat */}
      {hasAskedOnce && <div className="sm:hidden" />}

      {!hasAskedOnce ? (
        <button
          type="button"
          onClick={onViewChats}
          className="px-3 sm:px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
            <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
          </svg>
          <span>View Chats</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={onNewChat}
          className="px-3 sm:px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
            <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" clipRule="evenodd" />
          </svg>
          <span>New Chat</span>
        </button>
      )}
    </div>
  );
}

export default TopBar;