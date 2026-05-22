import axios from "axios"

export async function detectVideoLanguage(videoId) {
    try {
        const ytHTMLPage = await axios.get(
            `https://www.youtube.com/watch?v=${videoId}`
        )

        const html = ytHTMLPage.data
        const captureLanguage = html.match(/"languageCode":"(.*?)"/)

        if (captureLanguage && captureLanguage[1]) {
            return captureLanguage[1];
        }

        return "en";

    } catch (e) {
        console.error("Language detection failed:", e);
        return "en";
    }
}