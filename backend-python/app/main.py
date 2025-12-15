from __future__ import annotations

from datetime import datetime, timezone
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, EmailStr, Field

from .db import init_db, insert_message


app = FastAPI(title="Aurora UI Backend", version="1.0.0")


# Allow local dev frontends (Vite). You can lock this down in prod.
app.add_middleware(
  CORSMiddleware,
  allow_origins=[
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "http://localhost:4173",
    "http://127.0.0.1:4173",
  ],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)


class ContactPayload(BaseModel):
  name: str = Field(min_length=2, max_length=80)
  email: EmailStr
  message: str = Field(min_length=5, max_length=2000)


@app.on_event("startup")
def _startup() -> None:
  init_db()
  _maybe_mount_frontend()


@app.get("/api/health")
def health() -> dict:
  return {"ok": True}


@app.post("/api/contact")
def contact(payload: ContactPayload) -> dict:
  created_at = datetime.now(timezone.utc).isoformat()
  try:
    new_id = insert_message(payload.name, str(payload.email), payload.message, created_at)
  except Exception as e:
    raise HTTPException(status_code=500, detail=f"DB error: {e}")
  return {"ok": True, "id": new_id, "created_at": created_at}


def _maybe_mount_frontend() -> None:
  """If `../frontend/dist` exists, serve it as a static site."""
  root = Path(__file__).resolve().parent.parent
  dist = (root.parent / "frontend" / "dist").resolve()

  if dist.exists() and dist.is_dir():
    # Mount at / (must be last, after /api routes)
    app.mount(
      "/",
      StaticFiles(directory=str(dist), html=True),
      name="frontend",
    )
