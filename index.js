import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/batatinha', (req, res) => {
  res.status(200).json({ nome: 'Batatinha' })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
