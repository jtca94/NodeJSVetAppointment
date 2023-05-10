import {writeFile, readFile} from "fs/promises";
import chalk from "chalk";

//  sets the level of color support for vscode debugger console
chalk.level = 1

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
  } catch (error) {
    // manejo de errores por consola
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
    const array = JSON.parse(data);
    
    // impresion de citas registradas
    array.forEach((element) => {
      console.log(
        chalk.cyan("Nombre: ") +
          element.nombre +
          "\n" +
          chalk.cyan("Edad: ") +
          element.edad +
          "\n" +
          chalk.cyan("Animal: ") +
          element.animal +
          "\n" +
          chalk.cyan("Color: ") +
          element.color +
          "\n" +
          chalk.cyan("Enfermedad: ") +
          element.enfermedad +
          "\n" +
          "---------------------------------"
      );
    });
  } catch (error) {
    console.log(error);
  }
}
