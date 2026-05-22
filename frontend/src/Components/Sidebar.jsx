import { useState, useEffect } from "react";
import { renameChat, deleteChat } from "../Services/api";
import useSidebarMenu from "../Hooks/Sidebar/useSidebarMenu";
import useShareChat from "../Hooks/Sidebar/useShareChat";
import ChatItem from "./Sidebar/ChatItem";
import UserFooter from "./Sidebar/UserFooter";

function Sidebar({ history, setHistory, user, onSelectVideo, isOpen, onToggle, activeVideoId, onDeleteChat }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const { openMenuId, menuView, setMenuView, menuRefs, openMenu, closeMenu } = useSidebarMenu();
  const { shareLinkMap, copiedId, handleShare, handleCopyLink } = useShareChat(user);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleRename = async (item, newTitle) => {
    const trimmed = newTitle.trim();
    if (!trimmed) return;
    setHistory((prev) => prev.map((h) => h.video_id === item.video_id ? { ...h, title: trimmed } : h));
    closeMenu();
    const session_id = `${user?.id}_${item.video_id}`;
    try {
      await renameChat(session_id, trimmed);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (item) => {
    setHistory((prev) => prev.filter((h) => h.video_id !== item.video_id));
    closeMenu();
    onDeleteChat(item.video_id);
    const session_id = `${user?.id}_${item.video_id}`;
    try {
      await deleteChat(session_id, user?.id);
    } catch (e) {
      console.error(e);
    }
  };

  const chatItemProps = {
    activeVideoId,
    menuRefs,
    openMenuId,
    menuView,
    setMenuView,
    openMenu,
    onRename: handleRename,
    onShare: handleShare,
    onDelete: handleDelete,
    shareLinkMap,
    copiedId,
    onCopyLink: handleCopyLink,
  };

  if (isMobile) {
    return (
      <>
        {isOpen && (
          <div className="fixed inset-0 bg-black/60 z-40" onClick={onToggle} />
        )}
        <div className={`fixed top-0 left-0 h-full w-72 bg-[#1a1a1a] border-r border-white/5 flex flex-col z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="h-16 flex items-center justify-between px-4 border-b border-white/5 shrink-0">
            <span className="text-white/70 text-sm font-medium">Chats</span>
            <button onClick={onToggle} className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto py-2 min-h-0 px-2">
            {history.length === 0 && (
              <p className="text-white/30 text-sm text-center mt-6">No history yet</p>
            )}
            {history.map((item) => (
              <ChatItem
                key={item.video_id}
                item={item}
                {...chatItemProps}
                onClickVideo={(i) => { onSelectVideo(i); onToggle(); }}
              />
            ))}
          </div>
          <UserFooter user={user} isOpen={isOpen} />
        </div>
      </>
    );
  }

  return (
    <div className={`h-full bg-[#1e1e1e] border-r border-white/5 flex flex-col shrink-0 transition-all duration-300 overflow-hidden ${isOpen ? "w-64" : "w-14"}`}>
      <div className="h-16 flex items-center gap-3 px-3 shrink-0">
        <button onClick={onToggle} className="w-8 h-8 flex flex-col gap-1 items-start justify-center shrink-0">
          <span className="block w-5 h-0.5 bg-white/50" />
          <span className="block w-3 h-0.5 bg-white/50" />
        </button>
        {isOpen && (
          <span
            className={`text-white/60 text-sm tracking-widest uppercase whitespace-nowrap transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.15em" }}
          >
            Chat History
          </span>
        )}
      </div>

      {isOpen && (
        <div className="flex-1 overflow-y-auto py-2 min-h-0 px-2">
          {history.length === 0 && (
            <p className="text-white/30 text-sm text-center mt-6">No history yet</p>
          )}
          {history.map((item) => (
            <ChatItem
              key={item.video_id}
              item={item}
              {...chatItemProps}
              onClickVideo={onSelectVideo}
            />
          ))}
        </div>
      )}

      {!isOpen && <div className="flex-1" />}

      <UserFooter user={user} isOpen={isOpen} />
    </div>
  );
}

export default Sidebar;