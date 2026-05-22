import Linkedin from "./Button/Linkedin";
import Github from "./Button/Github";
import Twitter from "./Button/Twitter";
import Email from "./Button/Email";
import logo from "../assets/logo.jpeg";

export default function Footer({ linkColumns, bottomRight }) {
  return (
    <footer className="mt-24 bg-[#242424] text-neutral-300">

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-red-700/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start text-center lg:text-left">

          {/* Product */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="FluxIntelAI Logo" className="h-10 w-10 rounded-lg object-contain" />
              <span className="text-2xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                FluxIntelAI
              </span>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs mb-6">
              AI-powered contextual intelligence built to extract meaningful insights
              from long-form YouTube content. So, you learn faster and think deeper.
            </p>

            <div className="flex gap-8 mt-5">
              <div className="cursor-pointer hover:scale-125 transition">
                <Linkedin />
              </div>
              <div className="cursor-pointer hover:scale-125 transition">
                <Github />
              </div>
              <div className="cursor-pointer hover:scale-125 transition">
                <Twitter href="https://x.com/vaibhav7chavhan" width={28} height={28} />
              </div>
              <div className="cursor-pointer hover:scale-125 transition">
                <Email href="https://mail.google.com/mail/?view=cm&to=chavhanvaibhav708@gmail.com" width={28} height={28} />
              </div>
            </div>
          </div>

          {/* Link columns — driven by props */}
          <div
            className="flex-1 grid gap-8 w-full max-w-lg"
            style={{ gridTemplateColumns: `repeat(${linkColumns.length}, minmax(0, 1fr))` }}
          >
            {linkColumns.map(function (column) {
              return (
                <div key={column.heading}>
                  <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">
                    {column.heading}
                  </h4>
                  <ul className="space-y-3 text-sm text-neutral-400">
                    {column.links.map(function ({ label, action }) {
                      return (
                        <li
                          key={label}
                          onClick={action}
                          className="whitespace-nowrap cursor-pointer hover:text-white"
                        >
                          {label}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom */}
        <div className="w-full h-[1px] bg-white/5 my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-neutral-600 gap-3">
          <span>© 2026 FluxIntelAI. All rights reserved.</span>
          <span className="tracking-widest uppercase">Built for Learning & Research</span>
          {bottomRight}
        </div>

      </div>
    </footer>
  );
}