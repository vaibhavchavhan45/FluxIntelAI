from sqlalchemy.orm import Session
from db.database import SessionLocal
from db.chat_memory_schema import ChatMessage


class ChatMemoryRepository:

    def save_message(self, session_id: str, role: str, content: str, timestamps: list = None):
        db: Session = SessionLocal()
        try:
            message = ChatMessage(
                session_id=session_id,
                role=role,
                content=content,
                timestamps=timestamps
            )
            db.add(message)
            db.commit()
        finally:
            db.close()

    def fetch_messages(self, session_id: str):
        db: Session = SessionLocal()
        try:
            return (
                db.query(ChatMessage.role, ChatMessage.content)
                .filter(ChatMessage.session_id == session_id)
                .order_by(ChatMessage.created_at.asc())
                .all()
            )
        finally:
            db.close()

    def replace_with_summary(self, session_id: str, summary: str):
        db: Session = SessionLocal()
        try:
            db.query(ChatMessage).filter(ChatMessage.session_id == session_id).delete()
            summary_msg = ChatMessage(
                session_id=session_id,
                role="summary",
                content=summary
            )
            db.add(summary_msg)
            db.commit()
        finally:
            db.close()