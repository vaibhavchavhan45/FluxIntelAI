import pool from './postgres.js'

const createTables = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                google_id VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                name VARCHAR(255),
                avatar VARCHAR(500),
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
            )
        `)

        console.log('Tables created successfully')
    } catch (error) {
        console.error('Error creating tables:', error)
    }
}

export default createTables;