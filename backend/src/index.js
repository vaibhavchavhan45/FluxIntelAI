import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import passport from "passport"
import cookieParser from "cookie-parser"
import queryRoutes from "./routes/query.route.js"
import videoRoutes from "./routes/video.route.js"
import chatRoutes from "./routes/chat.route.js"
import authRoutes from "./routes/auth.route.js"
import authMiddleware from "./middlewares/auth.middleware.js"
import createTables from "./db/schema.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
const FRONTEND_URL = process.env.FRONTEND_URL

app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}))

app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())

app.use("/auth", authRoutes)


app.use("/api/v1/youtube", (req, res, next) => {
  if (req.path.startsWith("/shared-chat")) return next();
  authMiddleware(req, res, next);
}, queryRoutes, videoRoutes, chatRoutes)

createTables()

app.get("/health", (req, res) => res.status(200).json({ status: "ok" }))

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})