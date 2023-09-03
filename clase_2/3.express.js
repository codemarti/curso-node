const express = require('express')
const ditto = require('./pokemon/ditto.json')
const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

// app.use((req, res, next) => {
//   console.log('Mi primer middleware')
//   // aqui también podemos hacer...
//   // trackear la request a la bd
//   // revisar si el usuario tiene cookies
//   // etc

//   // para terminar esto
//   next()
// })

app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  // solo llegan request que son POST y que tienen de header Content-Type application/json
  let body = ''

  // ahora debemos escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    // debemos mutar la request y meter la información en el req.body
    req.body = data
    next()
  })
})

app.get('/pokemon/ditto', (req, res) => {
  // res.status(200).send('Mi página') es lo mismo que...
  // res.send('Mi página')
  res.json(ditto)
})

// aqui solo usamos el req.body debido a que traspasamos la lógica al middleware
app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

// forma global de tratar todas las request
app.use((req, res) => {
  res.status(404).send('404')
})

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
