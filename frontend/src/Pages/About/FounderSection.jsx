import { founderInfo } from "../../Data/About/founderData"
import Linkedin from "../../Components/Button/Linkedin";
import Github from "../../Components/Button/Github";
import Twitter from "../../Components/Button/Twitter";
import Email from "../../Components/Button/Email";

function FounderSection() {
  return (
    <div id="contact-section" className="max-w-5xl mx-auto px-6 pb-24 mt-18 md:mt-24 lg:mt-28 xl:mt-32">

      <div className="text-center mb-10">
        <h2
          className="text-4xl md:text-5xl font-semibold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About Me
        </h2>
      </div>

      <div className="relative group perspective-[1800px]">
        <div
          className="relative rounded-3xl p-8 sm:p-12 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu group-hover:rotate-x-[6deg] group-hover:rotate-y-[-6deg] group-hover:scale-[1.02] group-hover:shadow-[18px_28px_60px_rgba(0,0,0,0.25)]" >

          {/* Radial highlight */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_40%)] opacity-40 transition-opacity duration-700 group-hover:opacity-70" />

          {/* Glass shimmer layer */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-red-200/20 opacity-60" />

          {/* Avatar + Name row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-10">
            <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-red-50 border border-red-200 flex items-center justify-center shadow-inner">
              <span className="text-red-600 font-bold text-2xl">{founderInfo.initials}</span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {founderInfo.name}
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-200 font-semibold tracking-[0.15em] uppercase">
                  {founderInfo.role}
                </span>
              </div>
              <p className="text-sm text-neutral-500 mt-2 font-light">
                {founderInfo.tagline}
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5 text-neutral-600 leading-relaxed text-justify text-base sm:text-lg">
            {founderInfo.bio.map(function (paragraph, index) {
              return <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* Social buttons */}
          <div className="flex gap-8 mt-10">
            <Linkedin />
            <Github fill="#000000" />
            <Twitter fill="#000000" href="https://x.com/vaibhav7chavhan" width={28} height={28} />
            <Email href="https://mail.google.com/mail/?view=cm&to=chavhanvaibhav708@gmail.com" width={28} height={28} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderSection;