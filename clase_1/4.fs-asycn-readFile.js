const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
// Vemos que al usar el metodo async, en el tercer parametro se le pasa un callback
// Un callback es una funcion que se ejucuta solo hasta cuando la tarea se haya terminado
fs.readFile('./file.txt', 'utf-8', (_err, text) => {
  console.log('Primer texto:', text)
})

console.log('---> Hacer cosas mientras se lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./file2.txt', 'utf-8', (_err, text) => {
  console.log('Segundo texto:', text)
})
