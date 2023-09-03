const express = require('express')
const ditto = require('./pokemon/ditto.json')
const app = express()
app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234

// esta linea de codigo representa la logica del middleware del fichero 3
app.use(express.json())

app.get('/pokemon/ditto', (req, res) => {
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
