// CREACION DE API NATIVA SIMULANDO EL FUNCIONAMIENTO QUE USA POR DEBAJO EL WEB FRAMEWORK 'express'

const http = require('node:http')

// en commonJS podemos importar json
const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET': {
      switch (url) {
        case '/pokemon/ditto': {
          res.setHeader('Content-Type', 'application/json charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        }
        default: {
          res.statusCode = 404
          res.setHeader('Content-Text', 'text/plain; charset=utf-8')
          return res.end('404')
        }
      }
    }
    case 'POST': {
      switch (url) {
        case '/pokemon': {
          let body = ''

          // ahora debemos escuchar el evento data
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            // aqui ya podriamos llamar a una BD para guardar la informacion
            // ...
            // ahora otra forma de escribir la cabecera
            res.writeHead(201, { 'Content-Type': 'application/json; chatset=utf-8' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })
          break
        }
        default: {
          res.statusCode = 404
          res.setHeader('Content-Text', 'text/plain; charset=utf-8')
          return res.end('404')
        }
      }
    }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('servr listening on port http://localhost:1234')
})
