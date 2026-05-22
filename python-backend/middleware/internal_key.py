from fastapi import Request
from fastapi.responses import Response
import os

async def verify_internal_key(request: Request, call_next):
    if request.url.path.startswith("/shared-chat"):
        return await call_next(request)
    if request.headers.get("X-Internal-Key") != os.getenv("INTERNAL_SECRET"):
        return Response("Unauthorized", status_code=403)
    return await call_next(request)