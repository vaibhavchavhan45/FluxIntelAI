import { API_URLS } from "../Config/urlConfig";

const apiFetch = (url, options = {}) => {
    const { headers, ...rest } = options;
    return fetch(url, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
        ...rest,
    });
};

// Send a YouTube video URL and question to the AI and stream the response
export async function askQuestion(youtubeUrl, question, onChunk, onTimestamps) {
  const response = await apiFetch(API_URLS.askQuestion, {
    method: "POST",
    body: JSON.stringify({ youtubeUrl, question }),
  });

  if (!response.ok) {
    throw new Error("Failed to reach the server. Please try again.");
  }

  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return await response.json();
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value);

    if (chunk.includes("##TIMESTAMPS##")) {
      const timestampStr = chunk.split("##TIMESTAMPS##")[1];
      const timestamps = JSON.parse(timestampStr);
      onTimestamps(timestamps);
    } else if (chunk.includes("##ERROR##")) {
      const errorMsg = chunk.split("##ERROR##")[1];
      throw new Error(errorMsg);
    } else {
      onChunk(chunk);
    }
  }
}

// Poll the processing status of a video
export async function pollVideoStatus(videoId) {
  const response = await apiFetch(API_URLS.videoStatus(videoId));
  if (!response.ok) throw new Error("Failed to fetch video status.");
  return await response.json();
}

// Fetch all videos processed by the logged in user
export async function fetchVideoHistory(user_id) {
  const response = await apiFetch(`${API_URLS.videoHistory}?user_id=${user_id}`);
  if (!response.ok) throw new Error("Failed to fetch video history.");
  return await response.json();
}

// Save a new message to the database
export async function saveMessage(session_id, role, content) {
  await apiFetch(API_URLS.chatMessages, {
    method: "POST",
    body: JSON.stringify({ session_id, role, content }),
  });
}

// Fetch all messages for a given session
export async function fetchMessages(session_id) {
  const response = await apiFetch(`${API_URLS.chatMessages}?session_id=${session_id}`);
  if (!response.ok) return [];
  return await response.json();
}

// Retry a failed video processing request
export async function retryVideo(youtubeUrl, question) {
  const response = await apiFetch(API_URLS.askQuestion, {
    method: "POST",
    body: JSON.stringify({ youtubeUrl, question, isRetry: true }),
  });
  if (!response.ok) throw new Error("Retry request failed.");
  return await response.json();
}

// Rename a chat session title
export async function renameChat(session_id, new_title) {
  const response = await apiFetch(API_URLS.renameChat, {
    method: "PATCH",
    body: JSON.stringify({ session_id, new_title }),
  });
  if (!response.ok) throw new Error("Failed to rename chat.");
  return await response.json();
}

// Delete a chat session and its messages
export async function deleteChat(session_id, user_id) {
  const response = await apiFetch(API_URLS.deleteChat, {
    method: "DELETE",
    body: JSON.stringify({ session_id, user_id }),
  });
  if (!response.ok) throw new Error("Failed to delete chat.");
  return await response.json();
}

// Create a shareable link for a chat session
export async function shareChat(session_id) {
  const response = await apiFetch(API_URLS.shareChat, {
    method: "POST",
    body: JSON.stringify({ session_id }),
  });
  if (!response.ok) throw new Error("Failed to create share link.");
  return await response.json();
}

// Fetch messages of a shared chat by share ID — public route, no credentials
export async function getSharedChat(share_id) {
  const response = await fetch(API_URLS.sharedChat(share_id));
  if (!response.ok) throw new Error("Failed to fetch shared chat.");
  return await response.json();
}