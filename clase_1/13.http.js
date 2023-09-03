const http = require('node:http') // Este nos sirve para el protocolo HTTP
const { findAvailablePort } = require('./14.free-port.js')

const server = http.createServer((_req, res) => {
  console.log('Peticion recibida')
  res.end('Hola mundo')
})

findAvailablePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Server esta escuchando en el puerto http://localhost:${port}`)
  })
})
