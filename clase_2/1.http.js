const http = require('node:http') // Esto nos sirve para el protocolo HTTP
const fs = require('node:fs')

const desiredPort = process.env.port ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.end('Bievenido a mi página')
  } else if (req.url === '/imagen.jpg') {
    fs.readFile('./this.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('Internal Server Error')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        data.timestamp = Date.now
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // OK
    res.end('Contactame')
  } else {
    res.statusCode = 404
    res.end('404')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server esta escuchando en el puerto http://localhost:${desiredPort}`)
})
