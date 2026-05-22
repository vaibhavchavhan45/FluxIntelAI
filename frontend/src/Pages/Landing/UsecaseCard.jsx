import { usecaseImgs } from "../../Data/Landing/usecaseData";

function UsecaseCard({ img, index, layout, onClick }) {
  const { isActive } = layout;
  const isMobileSlide = index === usecaseImgs.length - 1;

  return (
    <div
      className="absolute cursor-pointer"
      style={{
        width: layout.width,
        height: layout.height,
        left: "50%",
        transform: layout.transform,
        zIndex: layout.zIndex,
        opacity: layout.opacity,
        transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        willChange: "transform, opacity, width, height",
      }}
      onClick={onClick}
    >
      {isMobileSlide && isActive ? (
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-[160px] h-[320px] sm:w-[190px] sm:h-[380px] lg:w-[220px] lg:h-[440px] border-[8px] border-[#1a1a1a] rounded-[36px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.25)]">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#1a1a1a] rounded-full z-10" />
            <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
          </div>
        </div>
      ) : (
        <img
          src={img.src}
          alt={img.label}
          className="w-full h-full object-cover rounded-2xl border border-black/[0.06]"
          style={{
            boxShadow: isActive
              ? "0 32px 80px rgba(0,0,0,0.18)"
              : "0 8px 24px rgba(0,0,0,0.10)",
          }}
        />
      )}
    </div>
  );
}

export default UsecaseCard;