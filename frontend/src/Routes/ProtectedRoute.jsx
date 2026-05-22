import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { API_URLS } from "../Config/urlConfig";

function ProtectedRoute({ children }) {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    fetch(API_URLS.authMe, {
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) setStatus("ok");
        else setStatus("fail");
      })
      .catch(() => setStatus("fail"));
  }, []);

  if (status === "checking") return <div>Loading...</div>;
  if (status === "fail") return <Navigate to="/" replace />;
  return children;
}

export default ProtectedRoute;