// Usamos los ES Modules para poder usar el await dentro del cuerpo de las funciones
// Debido a que tienen soporte de usar await en el cuerpo del archivo esto se llama 'top-level-await'
import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo...')
const text = await readFile('./file.txt', 'utf-8')
console.log('Primer texto:', text)

console.log('---> Hacer cosas mientras se lee el archivo...')

console.log('Leyendo el segundo archivo...')
const sndText = await readFile('./file2.txt', 'utf-8')
console.log('segundo texto:', sndText)



