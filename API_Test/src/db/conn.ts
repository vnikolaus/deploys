import { createConnection } from 'mysql2'
import { config } from 'dotenv'
config()

export const conn = createConnection({
    // host: process.env.MYSQL_HOST,
    // user: process.env.MYSQL_USER,
    // password: process.env.MYSQL_PWD,
    // database: process.env.MYSQL_DATABASE,
    host: 'localhost',
    user: 'nk',
    password: 'nikol@us06',
    database: 'deployjs',
}).promise()
