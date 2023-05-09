
# Vet Appointment Registration and Reading Application

The Vet Appointment Registration and Reading Application is a Node.js application that allows you to register and manage vet appointments. It provides functionality to register new appointments and view the existing appointments.

## Prerequisites:

Before running the application, make sure you have the following installed:
- Node.js: [Download and install Node.js](https://nodejs.org)

## Installation:

1. Clone the repository:
```bash
   git clone https://github.com/your-repo.git
```
2. Install dependencies:
```bash
   cd vet-appointment-app
   npm install
```
## Usage:

To use the application, navigate to the project directory and run the following command:
```bash
node index.js [command] [arguments]
```

## Commands:
- `registrar`: Registers a new vet appointment.
- `leer`: Reads the registered vet appointments.

## Arguments:

When using the `registrar` command, provide the following arguments in the specified order:
1. `nombre`: Name of the pet owner.
2. `edad`: Age of the pet.
3. `animal`: Type of animal.
4. `color`: Color of the pet.
5. `enfermedad`: Description of the pet's illness.

## Examples

To register a new vet appointment:
```bash
node index.js registrar John 5 Dog Red Fever
```
To read the registered vet appointments:
```bash
node index.js leer
```

## Error Handling:

The application incorporates basic error handling. Here are some scenarios where errors may occur:

- If an invalid number of arguments is provided, an error message will be displayed indicating the correct format and the required arguments.
- If there are no appointments registered, an error message will be displayed indicating that there are no appointments available.
- File-related errors, such as file not found or read/write errors, will be logged with appropriate error messages.

## File Structure:

The project consists of the following files:

- `index.js`: The main entry point of the application. It handles command-line arguments and executes the corresponding operations.
- `operaciones.js`: Contains the functions for writing and reading vet appointments. It validates arguments, reads and writes data to the `citas.json` file.
- `citas.json`: The JSON file used to store the registered vet appointments. It starts with an empty array `[]`, and new appointments are added to this array.

