const os = require('node:os')

console.log('Informacion del sistema operativo:')
console.log('_______________________________')

console.log('Nombre del sistema operativo: ', os.platform())
console.log('Version del sistema operativo: ', os.release())
console.log('Arquitectura del sistema operativo: ', os.arch())
console.log('CPUs del sistema operativo: ', os.cpus())
console.log('Memoria libre del sistema operativo: ', os.freemem() / 1024 / 1024)
console.log('Memoria total del sistema operativo: ', os.totalmem() / 1024 / 1024)
console.log('Tiempo total  encendida del sistema operativo: ', os.uptime() / 60 / 60)
