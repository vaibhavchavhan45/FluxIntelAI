import { API_URLS } from "../Config/urlConfig.js";

export const handleGetStarted = (navigate) => {
  fetch(API_URLS.authMe, { credentials: "include" })
    .then((res) => {
      if (res.ok) { navigate("/app"); }
      else { window.location.href = API_URLS.googleAuth; }
    })
    .catch(() => { window.location.href = API_URLS.googleAuth; });
};

export const handleLogout = () => {
  fetch(API_URLS.logout, { method: "POST", credentials: "include" })
    .finally(() => window.location.href = "/");
};