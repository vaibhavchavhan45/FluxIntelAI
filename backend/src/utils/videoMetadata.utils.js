import axios from "axios"

export async function fetchVideoTitle(videoId) {
    try {
        const ytHTMLPage = await axios.get(
            `https://www.youtube.com/watch?v=${videoId}`
        )

        const html = ytHTMLPage.data
        const captureTitle = html.match(/"title":"(.*?)"/)

        const rawTitle = captureTitle?.[1] || videoId

        let cleaned = rawTitle

        // decode unicode escapes like \u0026 → &
        cleaned = cleaned.replace(/\\u[\dA-Fa-f]{4}/g, (match) =>
            String.fromCharCode(parseInt(match.replace('\\u', ''), 16))
        )

        // remove content after | or —
        cleaned = cleaned.split(/[|—]/).shift().trim()

        // remove content in brackets/parens
        cleaned = cleaned.replace(/\[.*?\]/g, '').trim()
        cleaned = cleaned.replace(/\(.*?\)/g, '').trim()

        // remove common suffix keywords
        cleaned = cleaned.replace(/[-–]\s*(Lyrical|Lyrics|Official|Full Version|Full Video|Audio|Video|HD|4K|feat|ft|w\/|with|by).*/i, '').trim()

        // remove trailing special chars
        cleaned = cleaned.replace(/[:\-–|,]+$/, '').trim()

        // remove multiple spaces
        cleaned = cleaned.replace(/\s+/g, ' ').trim()

        // truncate to 45 chars
        return cleaned.length > 45 ? cleaned.substring(0, 45).trim() + "..." : cleaned

    } catch (e) {
        console.error("Title fetch failed:", e)
        return videoId
    }
}