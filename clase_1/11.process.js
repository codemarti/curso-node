// process

// El objeto process es un objeto global que proporciona informacion y control sobre el proceso actual de ejecucion
// Tiene propiedades y metodos que nos permitiran interactuar con el entorno de ejucucion de nodeJS
// y nos dara infromacion que estara ralcionada con el proceso actual (argumentos de entrada)

// argumentos de entrada
// console.log(process.argv)

// Tambien podemos controlar su proceso y su salida
// process.exit(0) // Todo a ido bien y el proceso tiene que terminar
// process.exit(1) // Ha habido un error y debe salir para no generar mas problemas

// Podemos controlar eventos del proceso
process.on('exit', () => {
  // limpiar los recursos (limpiar la consola, etc)
})

// Podemos recuperar la carpeta actual en la que estamos ejecutando el proceso
console.log(process.cwd())

// Podemos obtener tambien informacion de la plataforma en donde se esta ejecutando
console.log(process.env.VAR_ENTORNO)
