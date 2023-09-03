const fs = require('node:fs')
const fsp = require('node:fs/promises')

fs.readdir('.', (err, files) => {
  if (err) {
    console.log('Se ha poroducido un error al leer el directorio:', err)
    return
  }
  files.forEach(file => {
    console.log(file)
  })
})

// Con promesas

fsp.readdir('.')
  .then(files => {
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch(err => {
    console.log('Se ha producido un error:', err)
  })
