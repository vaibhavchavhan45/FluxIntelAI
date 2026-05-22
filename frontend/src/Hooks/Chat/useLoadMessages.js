import { useRef } from "react";
import { fetchMessages } from "../../Services/api";

const useLoadMessages = (setMessages, scrollRef) => {
  const isLoadingHistory = useRef(false);

  const loadMessages = (session_id) => {
    return fetchMessages(session_id).then((msgs) => {
      if (msgs.length > 0) {
        isLoadingHistory.current = true;
        setMessages(msgs.map((m) => ({
          role: m.role,
          content: m.content,
          isMultiline: m.role === "user" && m.content.length > 60,
          timestamps: m.timestamps || null,
        })));
        if (scrollRef.current) {
          scrollRef.current.style.scrollBehavior = "auto";
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
        return new Promise((resolve) => {
          setTimeout(() => {
            isLoadingHistory.current = false;
            if (scrollRef.current) {
              scrollRef.current.style.scrollBehavior = "";
            }
            resolve();
          }, 1000);
        });
      }
    }).catch(() => {});
  };

  return { loadMessages, isLoadingHistory };
};

export default useLoadMessages;