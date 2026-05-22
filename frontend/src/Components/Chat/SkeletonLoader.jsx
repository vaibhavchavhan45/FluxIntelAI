function SkeletonLoader({ sidebarOpen }) {
  return (
    <div className="fixed inset-0 bg-[#212121] z-50 flex overflow-hidden">

      {/* Sidebar Skeleton */}
      {sidebarOpen ? (
        <div className="w-64 h-full bg-[#1e1e1e] border-r border-white/5 flex flex-col shrink-0 px-3 py-4 gap-3">
          <div className="h-5 w-28 rounded-full bg-white/[0.06] animate-pulse mb-2" />
          <div className="h-4 w-48 rounded-full bg-white/[0.06] animate-pulse" />
          <div className="h-4 w-40 rounded-full bg-white/[0.06] animate-pulse" />
          <div className="h-4 w-44 rounded-full bg-white/[0.06] animate-pulse" />
          <div className="h-4 w-36 rounded-full bg-white/[0.06] animate-pulse" />
          <div className="h-4 w-44 rounded-full bg-white/[0.06] animate-pulse" />
        </div>
      ) : (
        <div className="w-14 h-full bg-[#1e1e1e] border-r border-white/5 shrink-0" />
      )}

      {/* Center Chat Skeleton */}
      <div className="flex-1 flex justify-center overflow-hidden">
        <div className="w-full max-w-3xl px-6 py-10 flex flex-col gap-10">

          {/* AI Message */}
          <div className="flex gap-4">
            <div className="w-9 h-9 rounded-full bg-white/[0.06] animate-pulse shrink-0" />
            <div className="flex-1 space-y-3 pt-1">
              <div className="h-3 w-[92%] rounded-full bg-white/[0.06] animate-pulse" />
              <div className="h-3 w-[78%] rounded-full bg-white/[0.06] animate-pulse" />
              <div className="h-3 w-[65%] rounded-full bg-white/[0.06] animate-pulse" />
            </div>
          </div>

          {/* User Message */}
          <div className="flex justify-end">
            <div className="w-[220px] h-14 rounded-3xl bg-white/[0.05] animate-pulse" />
          </div>

          {/* AI Message */}
          <div className="flex gap-4">
            <div className="w-9 h-9 rounded-full bg-white/[0.06] animate-pulse shrink-0" />
            <div className="flex-1 space-y-3 pt-1">
              <div className="h-3 w-[95%] rounded-full bg-white/[0.06] animate-pulse" />
              <div className="h-3 w-[82%] rounded-full bg-white/[0.06] animate-pulse" />
              <div className="h-3 w-[70%] rounded-full bg-white/[0.06] animate-pulse" />
              <div className="h-3 w-[58%] rounded-full bg-white/[0.06] animate-pulse" />
            </div>
          </div>

          {/* User Message */}
          <div className="flex justify-end">
            <div className="w-[180px] h-14 rounded-3xl bg-white/[0.05] animate-pulse" />
          </div>

          {/* Bottom Input Skeleton */}
          <div className="mt-auto pt-10">
            <div className="h-16 rounded-3xl bg-white/[0.05] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonLoader;