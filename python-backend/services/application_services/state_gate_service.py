import os
from services.application_services.video_state_management_service import (
    get_video_state,
    STATUS_PROCESSING,
    STATUS_READY,
    STATUS_FAILED
)

def current_state(videoId: str):
    '''
        Return the current state as PROCESSING | READY | FAILED
    '''
    state = get_video_state(videoId)

    if state is None:
        return {"status": "NOT_FOUND", "message": "Video not processed yet"}

    if state.status == STATUS_FAILED:
        return {"status": "FAILED", "message": "video processing failed", "error": state.error}

    if state.status == STATUS_PROCESSING:
        return {"status": "PROCESSING", "message": "video is being processed"}

    return None  # READY