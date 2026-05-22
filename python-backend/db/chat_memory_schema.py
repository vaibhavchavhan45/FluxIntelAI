import uuid
from sqlalchemy import (
    Column,
    String,
    Text,
    DateTime,
    JSON,
    Index
)
from datetime import datetime
from db.database import Base


class ChatMessage(Base):
    __tablename__ = "chat_messages"
    __table_args__ = {'extend_existing': True}

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    session_id = Column(String, nullable=False, index=True)
    role = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    timestamps = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)


Index("idx_chat_messages_session_id", ChatMessage.session_id)