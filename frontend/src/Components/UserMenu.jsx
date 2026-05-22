import { useState, useEffect, useRef } from "react";
import { handleLogout } from "../utils/authUtils";

function UserMenu({ user, isOpen, position = "sidebar" }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const getInitials = (name) => {
    if (!name) return "?";
    return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  const wrapperClass = position === "landing"
    ? "absolute bottom-4 left-4"
    : "shrink-0 p-3 relative";

  return (
    <div className={wrapperClass} ref={menuRef}>
      {showMenu && (
        <div className="absolute bottom-full left-0 mb-2 w-64 bg-[#2f2f2f] rounded-xl border border-white/10 shadow-2xl overflow-hidden z-50">
          <div className="px-4 py-3 border-b border-white/10">
            <p className="text-white text-sm font-medium truncate">{user?.name || "User"}</p>
            <p className="text-white/40 text-xs truncate">{user?.email || ""}</p>
          </div>
          <div className="p-1.5">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition text-left text-sm text-white/80 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 0 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
              </svg>
              Log out
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="w-full flex items-center gap-3 rounded-xl p-2 hover:bg-white/5 transition"
      >
        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
          {getInitials(user?.name)}
        </div>
        <div className={`flex flex-col text-left min-w-0 transition-opacity duration-300 ${position === "sidebar" ? (isOpen ? "opacity-100" : "opacity-0 pointer-events-none") : ""}`}>
          <span className="text-white text-sm font-medium truncate">{user?.name || "User"}</span>
          <span className="text-white/30 text-xs">FluxIntelAI v1</span>
        </div>
      </button>
    </div>
  );
}

export default UserMenu;