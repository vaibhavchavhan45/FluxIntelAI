import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthCallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/app");
  }, []);

  return (
    <div className="h-screen bg-[#1e1e1e] flex items-center justify-center">
      <p className="text-white/50 text-sm">Signing you in...</p>
    </div>
  );
}

export default AuthCallbackPage;