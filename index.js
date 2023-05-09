import {read, write} from "./operaciones.js";

// captura de input en consola
const values = process.argv.slice(3);
// creacion del objeto entregado a traves del input
const appointment = {
    nombre: values[0],
    edad: values[1],
    animal: values[2],
    color: values[3],
    enfermedad: values[4]
}
// validacion de argumentos recibidos
switch (process.argv[2]) {
  case "registrar":
    write(appointment, values);
    break;
  case "leer":
    read();
    break;
  default:
    console.log("No se reconoce el comando: " + process.argv[2] + ", intente con 'registrar' o 'leer'");
    break;
}
