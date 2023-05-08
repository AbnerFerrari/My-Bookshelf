import authorRoutes from './infra/http/routes'
import express from 'express'

const app = express()

app.use(express.json())

app.use('/authors', authorRoutes)

app.get('/', (req, res) => {
  res.json('hello world')
})

app.listen(3000, () => {
  console.log('rodando')
})