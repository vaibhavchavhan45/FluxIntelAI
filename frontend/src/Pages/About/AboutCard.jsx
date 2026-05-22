function AboutCard({ title, subtitle, tag }) {
  return (
    <div className="group relative rounded-2xl p-7 backdrop-blur-xl bg-white/70 border border-white/40 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:bg-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)] hover:backdrop-blur-2xl hover:shadow-[0_35px_70px_rgba(0,0,0,0.15)]" >
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-full transition-all duration-1000" />
      </div>

      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-neutral-900">
          {title}
        </h3>

        <span className="text-[11px] px-2 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 font-medium tracking-wide">
          {tag}
        </span>
      </div>

      <p
        className="text-sm text-neutral-600 leading-relaxed text-justify"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default AboutCard;