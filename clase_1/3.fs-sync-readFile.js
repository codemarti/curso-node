const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
// Ejemplo de leer un archivo de forma sincrona
// Esto devolvera un buffer, por lo que lo tendremos que convertir a un sistema que podemos entender
const text = fs.readFileSync('./file.txt', 'utf-8')
console.log(text)

console.log('Leyendo el segundo archivo...')
const sndText = fs.readFileSync('./file2.txt', 'utf-8')
console.log(sndText)
