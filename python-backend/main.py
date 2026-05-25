from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import asyncio
import os

from middleware.internal_key import verify_internal_key
from db.database import engine, Base
from db.models import VideoState
from db.chat_memory_schema import ChatMessage
from db.shared_chat_model import SharedChat
from routes.share_route import router as share_router
from routes.ingest_route import router as ingest_router
from routes.ask_query_route import router as ask_query_router
from routes.status_route import router as status_router
from routes.history_route import router as history_router
from routes.chat_messages_route import router as chat_messages_router
from services.video_repair.video_repair_scheduler import auto_repair_loop


Base.metadata.create_all(bind = engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.getenv("FRONTEND_URL")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.middleware("http")(verify_internal_key)


app.include_router(ingest_router)
app.include_router(history_router)
app.include_router(chat_messages_router)
app.include_router(ask_query_router)
app.include_router(status_router)
app.include_router(share_router)

@app.get("/health")
def health():
    return {"status": "ok"}


@app.on_event("startup")
async def start_auto_repair():
    """
    Start auto-repair background task when FastAPI server starts.
    Runs forever in background, independent of user requests.
    """
    print("Starting Auto repair scheduler....")
    asyncio.create_task(auto_repair_loop())