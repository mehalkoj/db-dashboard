import { Client } from 'pg'

// Compile credentials into .env.local file for github hidden

    const client = new Client({
        host: String(process.env.DB_HOST),
        port: Number(process.env.DB_PORT),
        database: String(process.env.DB_NAME),
        user: String(process.env.DB_USER),
        password: String(process.env.DB_PASSWORD),
    });

    export default client;
