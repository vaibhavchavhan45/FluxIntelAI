from fastapi import APIRouter, Query
from sqlalchemy.orm import Session
from pydantic import BaseModel

from db.database import SessionLocal
from db.models import VideoState
from db.chat_memory_schema import ChatMessage


router = APIRouter()


@router.get('/video-history')
def get_video_history(user_id: str = Query(...)):
    db: Session = SessionLocal()

    try:
        videos = (
            db.query(VideoState)
            .filter(VideoState.user_id == user_id)
            .order_by(VideoState.updated_at.desc())
            .all()
        )

        return [
            {
                "video_id": v.video_id,
                "title": v.title or v.video_id,
                "status": v.status
            }
            for v in videos
        ]

    finally:
        db.close()


class RenameRequest(BaseModel):
    session_id: str
    new_title: str
    user_id: str


@router.patch('/rename-chat')
def rename_chat(body: RenameRequest):
    db: Session = SessionLocal()
    try:
        video_id = body.session_id.split("_", 1)[-1]
        video = db.query(VideoState).filter(VideoState.video_id == video_id).first()
        if not video or video.user_id != body.user_id:
            return {"error": "Unauthorized"}, 403
        video.title = body.new_title
        db.commit()
        return {"message": "Renamed successfully"}
    finally:
        db.close()


class DeleteRequest(BaseModel):
    session_id: str
    user_id: str


@router.delete('/delete-chat')
def delete_chat(body: DeleteRequest):
    db: Session = SessionLocal()
    try:
        video_id = body.session_id.split("_", 1)[-1]
        video = db.query(VideoState).filter(
            VideoState.video_id == video_id
        ).first()
        if not video or video.user_id != body.user_id:
            return {"error": "Unauthorized"}, 403
        db.query(ChatMessage).filter(ChatMessage.session_id == body.session_id).delete()
        db.query(VideoState).filter(VideoState.video_id == video_id).delete()
        db.commit()
        return {"message": "Deleted successfully"}
    finally:
        db.close()