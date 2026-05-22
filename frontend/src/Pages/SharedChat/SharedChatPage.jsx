import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSharedChat } from "../../Services/api.js";
import MessageRenderer from "../../Components/Chat/MessageRenderer.jsx";
import logo from "../../assets/logo.jpeg"


function SharedChatPage() {
  const { share_id } = useParams();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSharedChat(share_id)
      .then((data) => {
        if (data.error) {
          setError("This shared chat does not exist or has been removed.");
        } else {
          setMessages(data.messages || []);
        }
      })
      .catch(() => setError("Failed to load shared chat."))
      .finally(() => setLoading(false));
  }, [share_id]);

  if (loading) {
    return (
      <div className="h-screen bg-[#1e1e1e] flex items-center justify-center">
        <p className="text-white/40 text-sm">Loading shared chat...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen bg-[#1e1e1e] flex items-center justify-center">
        <p className="text-red-400 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#1e1e1e] flex flex-col">

      {/* Top Bar */}
      <div className="w-full h-16 flex items-center justify-between px-4 sm:px-6 bg-[#1e1e1e] sticky top-0 z-50">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img src={logo} alt="FluxIntelAI Logo" className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-[18px] sm:text-[22px] font-black text-white">F</span>
              <span className="text-[18px] sm:text-[22px] font-black text-white">lux</span>
              <span className="text-[18px] sm:text-[22px] font-black text-white mx-0.5">I</span>
              <span className="text-[18px] sm:text-[22px] font-black text-white">ntel</span>
              <span className="text-[18px] sm:text-[22px] font-black text-white ml-0.5">AI</span>
            </span>
            <span className="text-[10px] sm:text-[12px] text-white/30 tracking-[0.1em]" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 300 }}>
              The AI Knowledge Engine
            </span>
          </div>
        </div>

        <div className="px-3 sm:px-5 py-2 rounded-full bg-white/10 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/50">
            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
          </svg>
          <span>Shared Chat · Read Only</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 md:px-16 py-8">
        <div className="max-w-[720px] mx-auto flex flex-col gap-8">
          {messages.map((msg, index) => {
            const isUser = msg.role === "user";
            const timestamps = msg.timestamps || null;

            return (
              <div
                key={index}
                className={`flex flex-col ${!isUser ? "mb-6" : "mb-2"}`}
                style={{ alignItems: isUser ? "flex-end" : "flex-start" }}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[70%] md:max-w-[65%] text-sm sm:text-base whitespace-pre-wrap break-words ${
                    isUser
                      ? "bg-[#2f2f2f] text-white px-4 py-2 rounded-full"
                      : "text-[#f3f3f3]"
                  }`}
                >
                  {isUser ? msg.content : <MessageRenderer content={msg.content} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SharedChatPage;