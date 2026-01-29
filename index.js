import express from 'express'

const app = express()
const port = process.env.PORT ?? 8081

app.get('/', (req, res) => {
    return res.json({ msg: 'hello from the server' })
})

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})
