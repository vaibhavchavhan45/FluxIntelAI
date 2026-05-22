import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing/LandingPage"
import ChatPage from "./Pages/ChatPage/ChatPage";
import AboutPage from "./Pages/About/AboutPage";
import FeedbackPage from "./Pages/Feedback/FeedbackPage";
import BugReportPage from "./Pages/BugReport/BugReportPage";
import TandCPage from ".//Pages/TermsCondition/TermsAndConditionPage";
import PrivacyPolicyPage from "./Pages/Privacy/PrivacyPolicyPage";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import AuthCallbackPage from "./Pages/Auth/AuthCallbackPage";
import ProtectedRoute from "./Routes/ProtectedRoute";
import SharedChatPage from "./Pages/SharedChat/SharedChatPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
        <Route path="/about" element={<AboutPage  />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/terms-conditions" element={<TandCPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/report-bug" element={<BugReportPage />} />
        <Route path="/auth/callback" element={<AuthCallbackPage />} />
        <Route path="/share/:share_id" element={<SharedChatPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;