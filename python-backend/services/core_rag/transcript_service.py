import httpx
from config import SUPADATA_API_KEY


SUPADATA_URL = "https://api.supadata.ai/v1/youtube/transcript"

class TranscriptItem:
    def __init__(self, text, start, duration):
        self.text = text
        self.start = start
        self.duration = duration


def fetch_transcript(videoId: str, languages: str):
    """
        Fetch transcript via Supadata API.
        Returns list of TranscriptItem objects.
    """
    try:
        response = httpx.get(
            SUPADATA_URL,
            params={"videoId": videoId, "lang": languages},
            headers={"x-api-key": SUPADATA_API_KEY},
            timeout=30
        )

        if response.status_code != 200:
            raise Exception(f"Supadata returned {response.status_code}: {response.text}")

        data = response.json()
        segments = data.get("content", [])

        if not segments:
            raise Exception("Supadata returned no transcript content")

        result = []
        for item in segments:
            text = item.get("text", "").strip()
            # Supadata returns offset/duration in milliseconds; convert to seconds
            start = float(item.get("offset", 0)) / 1000
            duration = float(item.get("duration", 1000)) / 1000
            if text:
                result.append(TranscriptItem(text, start, duration))

        if not result:
            raise Exception("Supadata transcript had no usable text segments")

        return result

    except Exception as e:
        raise Exception(f"Failed to fetch transcript: {str(e)}")