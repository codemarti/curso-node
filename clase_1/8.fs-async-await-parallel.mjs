import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./file.txt', 'utf-8'),
  readFile('./file2.txt', 'utf-8')
]).then(([frtText, sndText]) => {
  console.log('Primer texto:', frtText)
  console.log('Segundo texto:', sndText)
})
