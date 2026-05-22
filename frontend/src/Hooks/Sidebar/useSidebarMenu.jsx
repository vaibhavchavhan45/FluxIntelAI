import { useState, useEffect, useRef } from "react";

export default function useSidebarMenu() {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [menuView, setMenuView] = useState("main"); // "main" | "share" | "delete"
  const menuRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (openMenuId && menuRefs.current[openMenuId] && !menuRefs.current[openMenuId].contains(e.target)) {
        setOpenMenuId(null);
        setMenuView("main");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenuId]);

  const openMenu = (id) => {
    if (openMenuId === id) {
      setOpenMenuId(null);
      setMenuView("main");
    } else {
      setOpenMenuId(id);
      setMenuView("main");
    }
  };

  const closeMenu = () => {
    setOpenMenuId(null);
    setMenuView("main");
  };

  return { openMenuId, menuView, setMenuView, menuRefs, openMenu, closeMenu };
}