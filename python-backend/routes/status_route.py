from fastapi import APIRouter
from sqlalchemy.orm import Session

from db.database import SessionLocal
from db.models import VideoState


router = APIRouter()

@router.get('/video-status/{video_id}')
def video_status(video_id: str):
    db: Session = SessionLocal()

    try:
        video = (
            db.query(VideoState)
            .filter(VideoState.video_id == video_id)
            .first()
        )

        if not video:
            return {
                "status" : "NOT FOUND"
            }

        return {
            "status" : video.status
        }
        
    finally:
        db.close()
