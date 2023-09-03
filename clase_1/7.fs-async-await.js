const { readFile } = require('node:fs/promises');

// A lo siguiente se le llama IIFE: Inmediately Invoked Function Expression, con la podemos usar las
// funciones asincronas

// Forma de funcion anonima
// (
//     async () => {
//         console.log('Leyendo el primer archivo...')
//         const text = await readFile('./file.txt', 'utf-8')
//         console.log('Primer texto:', text)

//         console.log('---> Hacer cosas mientras se lee el archivo...')

//         console.log('Leyendo el segundo archivo...')
//         const sndText = await readFile('./file2.txt', 'utf-8')
//         console.log('segundo texto:', sndText)
//     })();

// Lo anterior es lo mismo que lo siguiente, pero "arreglado":
(async () => {
  console.log('Leyendo el primer archivo...')
  const text = await readFile('./file.txt', 'utf-8')
  console.log('Primer texto:', text)

  console.log('---> Hacer cosas mientras se lee el archivo...')

  console.log('Leyendo el segundo archivo...')
  const sndText = await readFile('./file2.txt', 'utf-8')
  console.log('segundo texto:', sndText)
})()

// Y lo anterior es como crear primero la funcion y despues ejecutarla, de esta forma:
/*

    Primero creamos la funcion:

        async function init () {
            console.log('Leyendo el primer archivo...')
            const text = await readFile('./file.txt', 'utf-8')
            console.log('Primer texto:', text)

            console.log('---> Hacer cosas mientras se lee el archivo...')

            console.log('Leyendo el segundo archivo...')
            const sndText = await readFile('./file2.txt', 'utf-8')
            console.log('segundo texto:', sndText)
        }

    Y despues la ejecutamos:

        init()

    Es exactamente los mismo que cuando hacemos una IIFE:

        (async () => {
            console.log('Leyendo el primer archivo...')
            const text = await readFile('./file.txt', 'utf-8')
            console.log('Primer texto:', text)

            console.log('---> Hacer cosas mientras se lee el archivo...')

            console.log('Leyendo el segundo archivo...')
            const sndText = await readFile('./file2.txt', 'utf-8')
            console.log('segundo texto:', sndText)
        })()

    Solo que es una funcion anonima, misma que se ejecuta despues de leerla
*/
