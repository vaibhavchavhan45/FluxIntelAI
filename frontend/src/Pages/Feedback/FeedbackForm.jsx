import { feedbackTypes, howFoundOptions, recommendOptions } from "../../Data/Feedback/feedbackData";
import { inputCls } from "../../Styles/inputStyles";

function FeedbackForm({
  formRef,
  selectedType,
  setSelectedType,
  selectedRating,
  setSelectedRating,
  hoverRating,
  setHoverRating,
  recommend,
  setRecommend,
  howFound,
  setHowFound,
  isSubmitting,
  feedbackErrorMsg,
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
          <input required placeholder="Enter your full name" className={inputCls} name="name" />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-2 block">
            Email <span className="text-red-600">*</span>
          </label>
          <input required type="email" placeholder="Enter your email address" className={inputCls} name="email" />
        </div>

        {/* FEEDBACK TYPE */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-3 block">
            Type of feedback <span className="text-red-600">*</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {feedbackTypes.map(function (type) {
              return (
                <button
                  key={type}
                  type="button"
                  onClick={function () { setSelectedType(type === selectedType ? "" : type); }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border cursor-pointer transition-transform duration-200 ${
                    selectedType === type
                      ? "border-red-500 bg-red-50 text-red-600 shadow-sm"
                      : "border-neutral-300 bg-white text-neutral-600 hover:border-red-400 hover:text-red-600"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
          <input type="text" required readOnly value={selectedType} className="sr-only" tabIndex={-1} />
        </div>

        {/* FEEDBACK TEXT */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-2 block">
            Your feedback <span className="text-red-600">*</span>
          </label>
          <textarea
            required
            rows="4"
            placeholder="Write your feedback here..."
            className={`${inputCls} resize-none`}
            name="feedback_text"
          />
        </div>

        {/* HOW DID YOU FIND US */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-3 block">
            How did you find FluxIntelAI? <span className="text-neutral-400">(optional)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {howFoundOptions.map(function (option) {
              return (
                <button
                  key={option}
                  type="button"
                  onClick={function () { setHowFound(option === howFound ? "" : option); }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                    howFound === option
                      ? "border-red-500 bg-red-50 text-red-600 shadow-sm"
                      : "border-neutral-300 bg-white text-neutral-600 hover:border-red-400 hover:text-red-600"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* WOULD YOU RECOMMEND */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-3 block">
            Would you recommend FluxIntelAI to others? <span className="text-neutral-400">(optional)</span>
          </label>
          <div className="flex flex-wrap gap-2">
            {recommendOptions.map(function (option) {
              return (
                <button
                  key={option}
                  type="button"
                  onClick={function () { setRecommend(option === recommend ? "" : option); }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 ${
                    recommend === option
                      ? "border-red-500 bg-red-50 text-red-600 shadow-sm"
                      : "border-neutral-300 bg-white text-neutral-600 hover:border-red-400 hover:text-red-600"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* STAR RATING */}
        <div>
          <label className="text-sm font-semibold text-neutral-700 mb-3 block">
            Rate FluxIntelAI
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(function (star) {
              const isActive = (hoverRating ?? selectedRating) >= star;
              return (
                <button
                  type="button"
                  key={star}
                  onClick={function () { setSelectedRating(star === selectedRating ? null : star); }}
                  onMouseEnter={function () { setHoverRating(star); }}
                  onMouseLeave={function () { setHoverRating(null); }}
                  className="transition-transform duration-150 hover:scale-110 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 transition-all duration-150"
                    fill={isActive ? "#FBBF24" : "none"}
                    stroke={isActive ? "#F59E0B" : "#d1d5db"}
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    style={isActive ? { filter: "drop-shadow(0 1px 5px rgba(251,191,36,0.55))" } : {}}
                  >
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                </button>
              );
            })}
          </div>
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

        {feedbackErrorMsg && (
          <p className="text-sm text-red-500 mt-3">{feedbackErrorMsg}</p>
        )}
      </form>
    </div>
  );
}

export default FeedbackForm;