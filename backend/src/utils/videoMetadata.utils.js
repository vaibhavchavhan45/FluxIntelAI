import axios from "axios"

const INVIDIOUS_INSTANCES = [
    "https://inv.nadeko.net",
    "https://invidious.nerdvpn.de",
    "https://invidious.privacyredirect.com",
    "https://yt.cdaut.de",
    "https://invidious.io.lol",
]


export async function fetchVideoTitle(videoId) {
    for (const instance of INVIDIOUS_INSTANCES) {
        try {
            const response = await axios.get(
                `${instance}/api/v1/videos/${videoId}`,
                { timeout: 10000 }
            )

            const rawTitle = response.data?.title || videoId

            let cleaned = rawTitle
            cleaned = cleaned.split(/[|—]/).shift().trim()
            cleaned = cleaned.replace(/\[.*?\]/g, '').trim()
            cleaned = cleaned.replace(/\(.*?\)/g, '').trim()
            cleaned = cleaned.replace(/[-–]\s*(Lyrical|Lyrics|Official|Full Version|Full Video|Audio|Video|HD|4K|feat|ft|w\/|with|by).*/i, '').trim()
            cleaned = cleaned.replace(/[:\-–|,]+$/, '').trim()
            cleaned = cleaned.replace(/\s+/g, ' ').trim()

            return cleaned.length > 45 ? cleaned.substring(0, 45).trim() + "..." : cleaned

        } catch (e) {
            continue
        }
    }

    console.error("Title fetch failed from all instances")
    return videoId
}