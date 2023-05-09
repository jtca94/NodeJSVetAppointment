import {writeFile, readFile} from "fs/promises";

export async function write(newInfo, values) {
    // recibe objeto con datos de la cita y array con argumentos para validar
  try {
    // validacion de argumentos
    if (values.length != 5) {
      throw new Error(
        "Los argumentos deben ser: nombre, edad, animal, color, enfermedad"
      );
    }
    // lectura de datos anteriores
    const data = await readFile("citas.json", "utf-8");
    const newData = JSON.parse(data);
    // push de nueva cita
    newData.push(newInfo);
    // escritura de datos previos + nuevos
    await writeFile("citas.json", JSON.stringify(newData));
    console.log("Cita registrada");
  } 
  // manejo de errores por consola
  catch (error) {
    throw new Error("Error writing to citas.json: " + error.message);
  }
}

export async function read() {
  try {
    const data = await readFile("citas.json", "utf-8");
    // validacion de citas registradas 
    if (data.length == 2) {
      throw new Error("No hay citas registradas");
    }
    // impresion de citas registradas
    console.log("Las citas registradas son: \n", JSON.parse(data));
  } 
  catch (error) {
    console.log(error);
  }
}
