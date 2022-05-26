import crypto from 'crypto'
import express from 'express'

const app = express()

app.use(express.json())

const listaDeNomes = ['João', 'Maria', 'José']
const listaDeSobrenomes = ['Silva', 'Santos', 'Oliveira']

const sorteio = lista => lista[Math.floor(Math.random() * lista.length)]

const usuarios = []

// crypto.randomUUID()

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World'
  })
})

// RECURSO USUARIOS
// LISTAR TODOS OS USUÁRIOS
app.get('/usuarios', (req, res) => {
  res.status(200).json({
    usuarios
  })
})

// LISTAR UM USUÁRIO
app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id
  const usuario = usuarios.find(u => u.id === id)
  res.status(200).json({
    usuario
  })
})

// CRIAR UM USUÁRIO
app.post('/usuarios', (req, res) => {
  const nome = req.body.nome
  const sobrenome = req.body.sobrenome

  const novoUsuario = {
    nome,
    sobrenome,
    id: crypto.randomUUID()
  }

  usuarios.push(novoUsuario)

  res.status(201).json({
    usuario: novoUsuario
  })
})

// EDITAR UM USUÁRIO
app.put('/usuarios/:id', (req, res) => {
  const id = req.params.id
  const usuario = usuarios.find(u => u.id === id)

  const usuarioEditado = {
    ...usuario,
    lastEdit: new Date()
  }

  const posicaoNoArray = usuarios.indexOf(usuario)
  usuarios[posicaoNoArray] = usuarioEditado

  res.status(200).json({
    usuarioEditado
  })
})

// APAGAR UM USUÁRIO
app.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id
  const usuario = usuarios.find(u => u.id === id)
  const posicaoNoArray = usuarios.indexOf(usuario)

  usuarios.splice(posicaoNoArray, 1)

  res.status(200).json({
    mensagem: 'Usuário apagado com sucesso'
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
