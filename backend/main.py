from fastapi import FastAPI, Request
from pydantic import BaseModel
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
import uuid

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

users_db = {}
events_db = []

class EventData(BaseModel):
    event: str
    tokens: int
    date: str
    url: str

@app.post("/api/event")
async def receive_event(data: EventData, request: Request):
    ip = request.client.host
    user_id = users_db.get(ip, str(uuid.uuid4()))
    users_db[ip] = user_id

    event_record = {
        "user_id": user_id,
        "event": data.event,
        "tokens": data.tokens,
        "date": data.date,
        "url": data.url,
        "timestamp": datetime.utcnow().isoformat()
    }
    events_db.append(event_record)
    return {"message": "Event recorded", "event": event_record}