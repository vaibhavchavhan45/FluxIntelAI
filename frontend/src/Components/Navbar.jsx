import { useState } from "react";
import logo from "../assets/logo.jpeg";

const Navbar = ({ links = [], onGetStarted }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderDesktopLink = ({ label, onClick }) => {
    if (label === "home") {
      return (
        <button
          key="home"
          onClick={onClick}
          className="inline-flex items-center justify-center cursor-pointer transition-transform duration-300 ease-out hover:scale-110 active:scale-110"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
        </button>
      );
    }
    return (
      <button
        key={label}
        onClick={onClick}
        className="text-sm font-semibold text-neutral-600 cursor-pointer transition-transform duration-300 hover:text-black hover:scale-105 active:text-black active:scale-105"
      >
        {label}
      </button>
    );
  };

  const renderMobileLink = ({ label, onClick }) => {
    if (label === "home") {
      return (
        <button
          key="home"
          onClick={() => { onClick(); setMenuOpen(false); }}
          className="py-3 text-sm font-semibold text-neutral-600 active:text-black transition text-left"
        >
          Home
        </button>
      );
    }
    return (
      <button
        key={label}
        onClick={() => { onClick(); setMenuOpen(false); }}
        className="py-3 text-sm font-semibold text-neutral-600 active:text-black transition text-left"
      >
        {label}
      </button>
    );
  };

  return (
    <div className="sticky top-6 z-50 flex justify-center">

      {/* Navbar pill */}
      <div className="w-[95%] max-w-6xl rounded-full bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <div className="h-[56px] md:h-[64px] px-4 md:px-6 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <img
              src={logo}
              alt="FluxIntelAI Logo"
              className="h-9 w-9 md:h-11 md:w-11 rounded-xl object-contain flex-shrink-0"
            />
            <div className="flex flex-col leading-tight min-w-0">
              <span
                className="tracking-wide text-[16px] md:text-[22px] font-black whitespace-nowrap"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                FluxIntelAI
              </span>
              <span className="text-[9px] md:text-[12px] text-neutral-500 tracking-[0.08em] md:tracking-[0.15em] whitespace-nowrap">
                The AI Knowledge Engine
              </span>
            </div>
          </div>

          {/* Desktop + Tablet right side */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => renderDesktopLink(link))}
            <button
              onClick={onGetStarted}
              className="px-6 py-2 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm hover:scale-105 active:scale-105 cursor-pointer transition-transform duration-300"
            >
              Get Started
            </button>
          </div>

          {/* Mobile only — hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex md:hidden p-2 flex-shrink-0 rounded-full hover:bg-black/5 active:bg-black/5 transition cursor-pointer"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-[60px] w-[85%] max-w-sm rounded-2xl bg-white/90 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.10)] px-5 py-2 flex flex-col">
          {links.map((link) => renderMobileLink(link))}
          <button
            onClick={() => { onGetStarted(); setMenuOpen(false); }}
            className="mt-2 mb-1 w-full py-2.5 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm font-semibold active:scale-95 cursor-pointer transition-transform duration-300"
          >
            Get Started
          </button>
        </div>
      )}

    </div>
  );
};

export default Navbar;