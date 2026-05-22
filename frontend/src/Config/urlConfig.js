const JS_BACKEND_BASE = import.meta.env.VITE_JS_BACKEND_URL;
const PYTHON_BACKEND_BASE = import.meta.env.VITE_PYTHON_BACKEND_URL;

export const API_URLS = {
  askQuestion: `${JS_BACKEND_BASE}/api/v1/youtube/query`,
  videoStatus: (videoId) => `${JS_BACKEND_BASE}/api/v1/youtube/video-status/${videoId}`,
  videoHistory: `${JS_BACKEND_BASE}/api/v1/youtube/video-history`,
  googleAuth: `${JS_BACKEND_BASE}/auth/google`,
  authMe: `${JS_BACKEND_BASE}/auth/me`,
  logout: `${JS_BACKEND_BASE}/auth/logout`,
  chatMessages: `${JS_BACKEND_BASE}/api/v1/youtube/chat-messages`,
  renameChat: `${JS_BACKEND_BASE}/api/v1/youtube/rename-chat`,
  deleteChat: `${JS_BACKEND_BASE}/api/v1/youtube/delete-chat`,
  shareChat: `${JS_BACKEND_BASE}/api/v1/youtube/share-chat`,
  sharedChat: (share_id) => `${JS_BACKEND_BASE}/api/v1/youtube/shared-chat/${share_id}`
};