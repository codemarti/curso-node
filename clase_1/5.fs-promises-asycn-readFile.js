// Para usar promesas usamos 'node:fs/promises'
const fs = require('node:fs/promises')
// Se puede comparar este con el archivo '4.asycnFs-readFile.js'
console.log('Leyendo el primer archivo...')
fs.readFile('./file.txt', 'utf-8')
  .then(text => {
    console.log('Primer texto:', text)
  })

console.log('---> Hacer cosas mientras se lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./file2.txt', 'utf-8')
  .then(text => {
    console.log('Segundo texto:', text)
  })

// Para usar promesas en modulos nativos que no tienen implementadas promesas nativas, se puede usar:
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)
