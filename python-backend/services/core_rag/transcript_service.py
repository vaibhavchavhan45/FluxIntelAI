import httpx

INVIDIOUS_INSTANCES = [
    "https://inv.nadeko.net",
    "https://invidious.nerdvpn.de",
    "https://invidious.privacyredirect.com",
    "https://yt.cdaut.de",
    "https://invidious.io.lol",
]

class TranscriptItem:
    def __init__(self, text, start, duration):
        self.text = text
        self.start = start
        self.duration = duration

def fetch_transcript(videoId: str, languages: str):
    """
        Fetch transcript via Invidious API.
        Returns list of TranscriptItem objects.
    """
    errors = []

    for instance in INVIDIOUS_INSTANCES:
        try:
            response = httpx.get(
                f"{instance}/api/v1/captions/{videoId}",
                timeout=15
            )

            if response.status_code != 200:
                errors.append(f"{instance} returned {response.status_code}")
                continue

            data = response.json()
            captions = data.get("captions", [])

            if not captions:
                errors.append(f"{instance} has no captions for this video")
                continue

            target = None
            for cap in captions:
                if cap.get("languageCode", "").startswith(languages):
                    target = cap
                    break
            if not target:
                target = captions[0]

            label = target.get("label", "")
            lang_code = target.get("languageCode", "en")

            transcript_response = httpx.get(
                f"{instance}/api/v1/captions/{videoId}",
                params={"label": label, "lang": lang_code},
                timeout=15
            )

            if transcript_response.status_code != 200:
                errors.append(f"{instance} transcript fetch failed")
                continue

            lines = transcript_response.json()

            if not isinstance(lines, list) or len(lines) == 0:
                errors.append(f"{instance} returned empty transcript")
                continue

            result = []
            for line in lines:
                text = line.get("text", "").strip()
                start = float(line.get("start", 0))
                duration = float(line.get("dur", 1))
                if text:
                    result.append(TranscriptItem(text, start, duration))

            if result:
                return result

        except Exception as e:
            errors.append(f"{instance} error: {str(e)}")
            continue

    raise Exception(f"Failed to fetch transcript: {'; '.join(errors)}")