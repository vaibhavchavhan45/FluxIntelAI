function DeleteConfirm({ onConfirm, onCancel }) {
  return (
    <div className="p-3">
      <p className="text-white/70 text-xs mb-3">Delete this chat?</p>
      <div className="flex gap-2">
        <button
          onClick={onCancel}
          className="flex-1 px-2 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/60 text-xs transition"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 px-2 py-1.5 rounded-lg bg-red-500/30 hover:bg-red-500/50 text-red-300 text-xs transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirm;