import express from "express";
import fetch from "node-fetch";
import { extractVideoId } from "../utils/youtubeUrl.utils.js";
import { detectVideoLanguage } from "../utils/languageDetection.utils.js";
import { fetchVideoTitle } from "../utils/videoMetadata.utils.js";

const router = express.Router();

// Process a YouTube video and stream the AI response
router.post('/query', async (req, res) => {
    const { youtubeUrl, question, isRetry } = req.body;

    try {
        const user_id = req.user?.id?.toString() || "";

        if (!youtubeUrl) {
            return res.status(400).json({ message: "youtube URL required" });
        }

        if (!question) {
            return res.status(400).json({ message: "Query is required" });
        }

        const videoId = extractVideoId(youtubeUrl);
        const languages = await detectVideoLanguage(videoId);
        const title = await fetchVideoTitle(videoId);

        const pythonResponse = await fetch(`${process.env.PYTHON_BACKEND_URL}/query`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Internal-Key": process.env.INTERNAL_SECRET
            },
            body: JSON.stringify({ videoId, question, languages, title, isRetry, user_id })
        });

        if (!pythonResponse.ok) {
            const error = await pythonResponse.json();
            return res.status(pythonResponse.status).json(error);
        }

        const contentType = pythonResponse.headers.get("content-type") || "";

        // PROCESSING or FAILED: forward JSON as is
        if (contentType.includes("application/json")) {
            const data = await pythonResponse.json();
            return res.json({
                message: "Data sent to query route successfully",
                videoId,
                pythonResponse: data
            });
        }

        // READY: pipe stream directly to frontend
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");

        pythonResponse.body.on("data", (chunk) => res.write(chunk));
        pythonResponse.body.on("end", () => res.end());
        pythonResponse.body.on("error", (err) => {
            console.log("Stream error", err);
            res.end();
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Failed to send the videoId to python" });
    }
});

export default router;