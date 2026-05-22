from fastapi import APIRouter, Query
from sqlalchemy.orm import Session
from pydantic import BaseModel

from db.database import SessionLocal
from db.chat_memory_schema import ChatMessage

router = APIRouter()


class SaveMessageRequest(BaseModel):
    session_id: str
    role: str
    content: str
    timestamps: list | None = None


@router.post('/chat-messages')
def save_message(data: SaveMessageRequest):
    db: Session = SessionLocal()
    try:
        message = ChatMessage(
            session_id=data.session_id,
            role=data.role,
            content=data.content,
            timestamps=data.timestamps
        )
        db.add(message)
        db.commit()
        return {"status": "saved"}
    finally:
        db.close()


@router.get('/chat-messages')
def get_messages(session_id: str = Query(...)):
    db: Session = SessionLocal()
    try:
        messages = (
            db.query(ChatMessage)
            .filter(ChatMessage.session_id == session_id)
            .order_by(ChatMessage.created_at.asc())
            .all()
        )
        return [
            {
                "role": m.role,
                "content": m.content,
                "timestamps": m.timestamps
            }
            for m in messages
        ]
    finally:
        db.close()