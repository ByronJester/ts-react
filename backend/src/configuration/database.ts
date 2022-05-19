import { createPool } from 'mysql2/promise'

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'sample_app',
        connectionLimit: 1000
    })

    return connection;
}