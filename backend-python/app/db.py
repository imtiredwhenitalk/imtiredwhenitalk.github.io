import sqlite3
from pathlib import Path


DB_PATH = Path(__file__).resolve().parent.parent / 'data.db'


def get_conn() -> sqlite3.Connection:
  DB_PATH.parent.mkdir(parents=True, exist_ok=True)
  conn = sqlite3.connect(DB_PATH)
  conn.row_factory = sqlite3.Row
  return conn


def init_db() -> None:
  with get_conn() as conn:
    conn.execute(
      """
      CREATE TABLE IF NOT EXISTS contact_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TEXT NOT NULL
      )
      """
    )
    conn.commit()


def insert_message(name: str, email: str, message: str, created_at_iso: str) -> int:
  with get_conn() as conn:
    cur = conn.execute(
      "INSERT INTO contact_messages (name, email, message, created_at) VALUES (?, ?, ?, ?)",
      (name, email, message, created_at_iso),
    )
    conn.commit()
    return int(cur.lastrowid)
