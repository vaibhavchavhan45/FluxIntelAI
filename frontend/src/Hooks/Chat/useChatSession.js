import { useState, useEffect } from "react";
import { fetchVideoHistory } from "../../Services/api";
import { API_URLS } from "../../Config/urlConfig";

const useChatSession = () => {
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch(API_URLS.authMe, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        fetchVideoHistory(data.id).then(setHistory).catch(() => {});
      })
      .catch(() => {});
  }, []);

  // call this to refresh sidebar history
  const fetchHistory = (userId) => {
    const id = userId ?? user?.id;
    if (id) fetchVideoHistory(id).then(setHistory).catch(() => {});
  };

  return { user, history, setHistory, fetchHistory };
};

export default useChatSession;