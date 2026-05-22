import { useState } from "react";
import MainMenu from "./MainMenu";
import ShareMenu from "./ShareMenu";
import DeleteConfirm from "./DeleteConfirm";

function ChatItem({ item, activeVideoId, onClickVideo, menuRefs, openMenuId, menuView, setMenuView, openMenu, onRename, onShare, onDelete, shareLinkMap, copiedId, onCopyLink }) {

  const [renamingId, setRenamingId] = useState(null);
  const [renameValue, setRenameValue] = useState("");

  return (
    <div
      ref={(el) => (menuRefs.current[item.video_id] = el)}
      className={`relative w-full flex items-center gap-2 px-2 py-2 rounded-md hover:bg-white/5 transition text-left text-sm group ${activeVideoId === item.video_id ? "bg-white/10" : ""}`}
    >
      {renamingId === item.video_id ? (
        <input
          autoFocus
          className="flex-1 bg-white/10 text-white text-sm px-2 py-1 rounded-md outline-none"
          value={renameValue}
          onChange={(e) => setRenameValue(e.target.value)}
          onFocus={(e) => e.target.select()}
          onBlur={() => setRenamingId(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onRename(item, renameValue);
              setRenamingId(null);
            }
            if (e.key === "Escape") setRenamingId(null);
          }}
        />
      ) : (
        <button className="flex-1 flex items-center gap-2 min-w-0" onClick={() => onClickVideo(item)}>
          {item.status !== "READY"
            ? <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-red-500" />
            : <span className="w-1.5 h-1.5 shrink-0" />
          }
          <span className="text-white/70 text-sm truncate">
            {item.title === null || item.title === undefined
              ? <span className="flex gap-1 items-center text-white/30">
                <span className="animate-pulse">•</span>
                <span className="animate-pulse delay-150">•</span>
                <span className="animate-pulse delay-300">•</span>
              </span>
              : item.title || item.video_id
            }
          </span>
        </button>
      )}

      <button
        onClick={(e) => { e.stopPropagation(); openMenu(item.video_id); }}
        className="shrink-0 w-6 h-6 flex items-center justify-center text-white/40 hover:text-white/80 transition opacity-100 xl:opacity-0 xl:group-hover:opacity-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
        </svg>
      </button>

      {openMenuId === item.video_id && (
        <div className="absolute right-0 top-8 w-44 bg-[#2f2f2f] rounded-xl border border-white/10 shadow-2xl overflow-hidden z-50">
          {menuView === "main" && (
            <MainMenu
              item={item}
              onRename={(i) => { setRenamingId(i.video_id); setRenameValue(i.title || ""); openMenu(null); }}
              onShare={(i) => onShare(i, () => setMenuView("share"))}
              onDelete={() => setMenuView("delete")}
            />
          )}
          {menuView === "share" && (
            <ShareMenu
              videoId={item.video_id}
              shareLinkMap={shareLinkMap}
              copiedId={copiedId}
              onCopyLink={onCopyLink}
              onBack={() => setMenuView("main")}
            />
          )}
          {menuView === "delete" && (
            <DeleteConfirm
              onConfirm={() => onDelete(item)}
              onCancel={() => setMenuView("main")}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default ChatItem;