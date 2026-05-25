from youtube_transcript_api import (
    YouTubeTranscriptApi, 
    TranscriptsDisabled, 
    NoTranscriptFound
)
from config import PROXY_HOST, PROXY_PORT, PROXY_USERNAME, PROXY_PASSWORD

PROXY_URL = f"http://{PROXY_USERNAME}:{PROXY_PASSWORD}@{PROXY_HOST}:{PROXY_PORT}"

def fetch_transcript(videoId: str, languages: str):
    """
        Fetch transcript text for given videoId and language.
        Returns transcript list.
    """
    try:
        ytt_transcript = YouTubeTranscriptApi(proxies={
            "http": PROXY_URL,
            "https": PROXY_URL
        })
        all_transcript = ytt_transcript.fetch(videoId, languages = [languages])
        return all_transcript
    
    except TranscriptsDisabled:
        raise Exception("Transcripts are disabled for this video")

    except NoTranscriptFound:
        raise Exception("Transcripts are unavailable for this video")

    except Exception as e:
        raise Exception(f"Failed to fetch transcript: {str(e)}")