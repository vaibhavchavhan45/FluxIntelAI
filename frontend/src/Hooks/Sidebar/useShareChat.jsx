import { useState } from "react";
import { shareChat } from "../../Services/api";

export default function useShareChat(user) {
  const [shareLinkMap, setShareLinkMap] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  const handleShare = async (item, onSuccess) => {
    const session_id = `${user?.id}_${item.video_id}`;
    try {
      const data = await shareChat(session_id);
      const link = `${window.location.origin}/share/${data.share_id}`;
      setShareLinkMap((prev) => ({ ...prev, [item.video_id]: link }));
      onSuccess();
    } catch (e) {
      console.error(e);
    }
  };

  const handleCopyLink = async (videoId) => {
    const link = shareLinkMap[videoId];
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setCopiedId(videoId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return { shareLinkMap, copiedId, handleShare, handleCopyLink };
}