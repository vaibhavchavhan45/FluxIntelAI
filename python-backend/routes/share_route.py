from fastapi import APIRouter
from sqlalchemy.orm import Session
from pydantic import BaseModel
import uuid

from db.database import SessionLocal
from db.shared_chat_model import SharedChat
from db.chat_memory_schema import ChatMessage


router = APIRouter()


class ShareRequest(BaseModel):
    session_id: str


@router.post('/share-chat')
def share_chat(body: ShareRequest):
    db: Session = SessionLocal()
    try:
        # Check if share already exists for this session
        existing = db.query(SharedChat).filter(SharedChat.session_id == body.session_id).first()
        if existing:
            return {"share_id": existing.share_id}

        # Create new share
        share_id = str(uuid.uuid4())
        shared = SharedChat(share_id=share_id, session_id=body.session_id)
        db.add(shared)
        db.commit()
        return {"share_id": share_id}
    finally:
        db.close()


@router.get('/shared-chat/{share_id}')
def get_shared_chat(share_id: str):
    db: Session = SessionLocal()
    try:
        shared = db.query(SharedChat).filter(SharedChat.share_id == share_id).first()
        if not shared:
            return {"error": "Shared chat not found"}

        messages = (
            db.query(ChatMessage)
            .filter(ChatMessage.session_id == shared.session_id)
            .order_by(ChatMessage.created_at.asc())
            .all()
        )

        return {
            "share_id": share_id,
            "messages": [
                {
                    "role": m.role,
                    "content": m.content,
                    "timestamps": m.timestamps if hasattr(m, 'timestamps') else None
                }
                for m in messages
            ]
        }
    finally:
        db.close()