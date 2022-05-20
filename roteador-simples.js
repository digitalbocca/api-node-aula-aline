const http = require('node:http')

const getHome = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write('<h1>Hello World</h1>')
  response.end()
};

getBatatinha = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' })
  response.write('<h1>Batatinha</h1>')
  response.end()
};

getSeuTio = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.write(JSON.stringify({ nome: 'Seu Tio' }))
  response.end()
};

const routes = {
  '/': (req, res) => getHome(req, res),
  '/batatinha': (req, res) => getBatatinha(req, res),
  '/seu-tio': (req, res) => getSeuTio(req, res)
}

const router = (request, response) => {
  const path = request.url
  if (path in routes) {
    routes[path](request, response)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.write('<h1>404 Not Found</h1>')
    response.end()
  }
}

const server = http.createServer((request, response) => {
  router(request, response)
})

server.listen(3000, () => console.log('Estou rodando!!! Porta 3000'))
