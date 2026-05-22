const Pill = ({ children }) => {
  return (
    <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/70 backdrop-blur-md border border-red-200 text-sm font-medium shadow-sm">
      {children}
    </div>
  );
};

export default Pill;