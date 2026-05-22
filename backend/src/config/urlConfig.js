import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    googleCallback: `${process.env.BACKEND_URL}/auth/google/callback`,
    frontendCallback: `${process.env.FRONTEND_URL}/auth/callback`,
    frontendLogin: `${process.env.FRONTEND_URL}/login`
}