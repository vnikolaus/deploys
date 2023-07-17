import { conn } from './db/conn'
import { z } from 'zod'
import fastify from 'fastify'
const app = fastify()

app.get('/users', async () => {
    const [users] = await conn.query(`SELECT * FROM users`)
    return { users }
})

app.post('/users', async (request, reply) => {
    const createUserSchema = z.object({
        name: z.string(),
        email: z.string().email(),
    })
    const { name, email } = createUserSchema.parse(request.body) // 'parse' -> zod faz validação dos tipos dos campos name e email

    await conn.query(`INSERT INTO users (name, email) VALUES (?, ?)`, [name, email])

    return reply.status(201).send({ message: 'User Created !' })
})

app.listen({
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 3011,
}).then(() => {
    console.log(`Server running...`)
})
