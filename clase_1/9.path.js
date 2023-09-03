const path = require('node:path')

// Al unir rutas no se debe hacer asi
// './content/subfolder/test.txt' // ❌, esto esta mal por la forma en que el sistema operativo trabaja con las barras

// Para saber como es la separacion de las rutas en el sistema operativo que estamos trabajando podemos hacer:
// Barra separadora de carpetas segun SO
console.log(path.sep) // En windows: \

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// Manera de obtener el nombre de un archivo. (base) nos da el nombre del fichero
const base = path.basename('content/subfolder/test.txt')
console.log(base)

// Manera de obtener el nombre de un fichero sin la extension (.txt, .pdf, etc)
const filename = path.basename('content/subfolder/test.txt', '.txt')
console.log(filename)

// Manera de obtener la extension de un fichero
const extension = path.extname('image.png')
console.log(extension)
