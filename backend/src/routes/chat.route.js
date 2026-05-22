import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// Save a new message to the database
router.post('/chat-messages', async (req, res) => {
    try {
        const { session_id, role, content } = req.body;
        const pythonResponse = await fetch(`${process.env.PYTHON_BACKEND_URL}/chat-messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Internal-Key": process.env.INTERNAL_SECRET
            },
            body: JSON.stringify({ session_id, role, content })
        });
        const data = await pythonResponse.json();
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to save message" });
    }
});

// Fetch all messages for a given session
router.get('/chat-messages', async (req, res) => {
    try {
        const { session_id } = req.query;
        const pythonResponse = await fetch(`${process.env.PYTHON_BACKEND_URL}/chat-messages?session_id=${session_id}`, {
            headers: { "X-Internal-Key": process.env.INTERNAL_SECRET }
        });
        const data = await pythonResponse.json();
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch messages" });
    }
});

// Rename a chat session title
router.patch('/rename-chat', async (req, res) => {
    try {
        const { session_id, new_title } = req.body;
        const user_id = req.user.id;
        const pythonResponse = await fetch(`${process.env.PYTHON_BACKEND_URL}/rename-chat`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "X-Internal-Key": process.env.INTERNAL_SECRET
            },
            body: JSON.stringify({ session_id, new_title, user_id })
        });
        const data = await pythonResponse.json();
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to rename chat" });
    }
});

// Delete a chat session and its messages
router.delete('/delete-chat', async (req, res) => {
    try {
        const { session_id } = req.body;
        const user_id = req.user.id;
        const pythonResponse = await fetch(`${process.env.PYTHON_BACKEND_URL}/delete-chat`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "X-Internal-Key": process.env.INTERNAL_SECRET
            },
            body: JSON.stringify({ session_id, user_id })
        });
        const data = await pythonResponse.json();
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to delete chat" });
    }
});

// Create a shareable link for a chat session
router.post('/share-chat', async (req, res) => {
    try {
        const { session_id } = req.body;
        const pythonResponse = await fetch(`${process.env.PYTHON_BACKEND_URL}/share-chat`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Internal-Key": process.env.INTERNAL_SECRET
            },
            body: JSON.stringify({ session_id })
        });
        const data = await pythonResponse.json();
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to create share link" });
    }
});

// Fetch messages of a shared chat by share ID
router.get('/shared-chat/:share_id', async (req, res) => {
    try {
        const { share_id } = req.params;
        const pythonResponse = await fetch(`${process.env.PYTHON_BACKEND_URL}/shared-chat/${share_id}`, {
            headers: { "X-Internal-Key": process.env.INTERNAL_SECRET }
        });
        const data = await pythonResponse.json();
        return res.json(data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch shared chat" });
    }
});

export default router;