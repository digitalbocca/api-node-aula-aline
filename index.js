import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World'
  })
})

app.get('/batatinha', (req, res) => {
  res.status(200).json({
    nome: 'Batatinha'
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
