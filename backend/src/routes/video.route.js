import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// Fetch the processing status of a video
router.get('/video-status/:videoId', async (req, res) => {
    const { videoId } = req.params;
    try {
        const pythonResponse = await fetch(`${process.env.PYTHON_BACKEND_URL}/video-status/${videoId}`, {
            headers: { "X-Internal-Key": process.env.INTERNAL_SECRET }
        });
        const data = await pythonResponse.json();
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch video status" });
    }
});

// Fetch all videos processed by the logged in user
router.get('/video-history', async (req, res) => {
    const user_id = req.user?.id;
    try {
        const pythonResponse = await fetch(`${process.env.PYTHON_BACKEND_URL}/video-history?user_id=${user_id}`, {
            headers: { "X-Internal-Key": process.env.INTERNAL_SECRET }
        });
        const data = await pythonResponse.json();
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch video history" });
    }
});

export default router;