import express from 'express'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import jwt from 'jsonwebtoken'
import pool from '../db/postgres.js'
import { URLS } from '../config/urlConfig.js'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

const cookieConfig = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
}

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: URLS.googleCallback
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const email = profile.emails[0].value
        const googleId = profile.id
        const name = profile.displayName
        const avatar = profile.photos[0]?.value

        const existing = await pool.query(
            'SELECT * FROM users WHERE google_id = $1',
            [googleId]
        )

        if (existing.rows.length > 0) {
            return done(null, existing.rows[0])
        }

        const newUser = await pool.query(
            'INSERT INTO users (google_id, email, name, avatar) VALUES ($1, $2, $3, $4) RETURNING *',
            [googleId, email, name, avatar]
        )

        return done(null, newUser.rows[0])

    } catch (error) {
        return done(error, null)
    }
}))

// Initiate Google OAuth
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false
}))

// Google OAuth callback
router.get('/google/callback',
    passport.authenticate('google', { session: false, failureRedirect: URLS.frontendLogin }),
    (req, res) => {
        const token = jwt.sign(
            {
                id: req.user.id,
                email: req.user.email,
                name: req.user.name,
                avatar: req.user.avatar
            },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        )

        // Set as HttpOnly cookie (For 30 days)
       res.cookie('token', token, {
    ...cookieConfig,
    maxAge: 30 * 24 * 60 * 60 * 1000
})

        res.redirect(URLS.frontendCallback)
    }
)

// Get current user
router.get('/me', (req, res) => {
    const token = req.cookies?.token

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        return res.json(decoded)
    } catch {
        return res.status(401).json({ message: 'Invalid token' })
    }
})

// Logout: clears the cookie
router.post('/logout', (req, res) => {
    res.clearCookie('token', cookieConfig)
    return res.json({ message: 'Logged out successfully' })
})

export default router;