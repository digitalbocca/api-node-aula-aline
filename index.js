const http = require('node:http');

const server = http.createServer((request, response) => {
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('<h1>Hello World</h1>');
  } else {
    response.writeHead(404);
    response.end();
  }
})

server.listen(3000, () => console.log('Estou rodando!!! Porta 3000'))
