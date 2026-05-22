from sqlalchemy import Column, String, DateTime
from datetime import datetime
from db.database import Base


class SharedChat(Base):
    __tablename__ = "shared_chats"

    share_id = Column(String, primary_key=True, index=True)
    session_id = Column(String, nullable=False, index=True)
    created_at = Column(DateTime, default=datetime.utcnow)