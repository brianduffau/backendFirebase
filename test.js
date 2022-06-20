import { crearServidor } from "./server/server.js";

const servidor = crearServidor()

const conexion = await servidor.conectar()

console.log(conexion.address().port)

