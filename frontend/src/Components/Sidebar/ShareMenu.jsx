import Whatsapp from "../Button/Whatsapp";
import Twitter from "../Button/Twitter";
import Email from "../Button/Email";

function ShareMenu({ videoId, shareLinkMap, copiedId, onCopyLink, onBack }) {
  const link = shareLinkMap[videoId] || "";

  return (
    <div className="p-1">
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 mb-1">
        <button onClick={onBack} className="text-white/40 hover:text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
            <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
          </svg>
        </button>
        <span className="text-white/50 text-xs">Share via</span>
      </div>

      <button
        onClick={() => onCopyLink(videoId)}
        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/10 text-sm text-white/80 hover:text-white transition"
      >
        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-3 h-3">
            <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-.354-5.569.75.75 0 0 1-.352-1Z" clipRule="evenodd" />
          </svg>
        </div>
        {copiedId === videoId ? "Copied!" : "Copy Link"}
      </button>

      <a
        href={`https://wa.me/?text=${encodeURIComponent(link)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/10 text-sm text-white/80 hover:text-white transition"
      >
        <Whatsapp />
        WhatsApp
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}&text=${encodeURIComponent("Check out this chat on FluxIntelAI!")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/10 text-sm text-white/80 hover:text-white transition"
      >
        <Twitter width={16} height={16} />
        X (Twitter)
      </a>

      <a
        href={`mailto:?subject=${encodeURIComponent("Check this out on FluxIntelAI")}&body=${encodeURIComponent(link)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white/10 text-sm text-white/80 hover:text-white transition"
      >
        <Email width={16} height={16} />
        Email
      </a>

    </div>
  );
}

export default ShareMenu;