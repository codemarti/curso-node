const fs = require('node:fs')

const stats = fs.statSync('./file.txt')

// Node.js trabaja en monohilo

// Ejemplo sincrono
console.log(
  stats.isFile(), // si es un archivo o fichero
  stats.isDirectory(), // si es un directorio o carpeta
  stats.isSymbolicLink(), // si es un enlace simbolico
  stats.size // el tamaño del archivo en bytes
)
