import { severityOptions } from "../../Data/BugReport/bugReportData";
import { bugInputCls } from "../../Styles/bugReportStyles";

function BugReportForm({
  formRef,
  selectedSeverity,
  setSelectedSeverity,
  isSubmitting,
  bugFormErrorMsg,
  handleSubmit,
  handleClear,
}) {
  return (
    <div className="bg-white border border-neutral-200 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 sm:p-10 md:p-14">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-9">

        {/* NAME */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-2 block">
            Name <span className="text-red-600">*</span>
          </label>
          <input required placeholder="Enter your full name" className={bugInputCls} name="name" />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-2 block">
            Email <span className="text-red-600">*</span>
          </label>
          <input required type="email" placeholder="Enter your email address" className={bugInputCls} name="email" />
        </div>

        {/* BUG TITLE */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-2 block">
            Report Bug <span className="text-red-600">*</span>
          </label>
          <input required placeholder="Give the bug a short title" className={bugInputCls} name="bug_title" />
        </div>

        {/* DESCRIBE THE BUG */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-2 block">
            Describe the Bug / Issue <span className="text-red-600">*</span>
          </label>
          <textarea
            required
            rows="4"
            placeholder="Describe what went wrong in detail..."
            className={`${bugInputCls} resize-none`}
            name="description"
          />
        </div>

        {/* PAGE URL */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-2 block">
            Page URL <span className="text-neutral-400">(optional)</span>
          </label>
          <input placeholder="Where did this issue occur?" className={bugInputCls} name="page_url" />
        </div>

        {/* VIDEO URL */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-2 block">
            Video URL <span className="text-neutral-400">(optional)</span>
          </label>
          <input placeholder="Paste the related YouTube video link" className={bugInputCls} name="video_url" />
        </div>

        {/* SEVERITY */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-3 block">
            Severity <span className="text-red-600">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {severityOptions.map(function (level) {
              return (
                <button
                  key={level}
                  type="button"
                  onClick={function () { setSelectedSeverity(level === selectedSeverity ? "" : level); }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-transform duration-200 ${
                    selectedSeverity === level
                      ? "border-red-500 bg-red-50 text-red-600 shadow-sm"
                      : "border-neutral-300 bg-white text-neutral-600 hover:border-red-400 hover:text-red-600"
                  }`}
                >
                  {level}
                </button>
              );
            })}
          </div>
          <input type="text" required readOnly value={selectedSeverity} className="sr-only" tabIndex={-1} />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between items-center pt-6 border-t border-neutral-200">
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-7 px-10 py-3 rounded-full bg-gradient-to-br from-red-600 to-red-800 text-white text-sm font-semibold hover:scale-105 active:scale-95 cursor-pointer transition-transform duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Submitting…
              </>
            ) : (
              "Submit"
            )}
          </button>

          <button
            type="button"
            onClick={handleClear}
            className="text-sm text-neutral-500 hover:text-red-600 hover:scale-105 cursor-pointer transition-transform duration-200 font-medium"
          >
            Clear form
          </button>
        </div>

        {bugFormErrorMsg && (
          <p className="text-sm text-red-500 mt-3">{bugFormErrorMsg}</p>
        )}

      </form>
    </div>
  );
}

export default BugReportForm;