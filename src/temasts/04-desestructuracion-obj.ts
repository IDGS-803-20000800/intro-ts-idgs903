//Desestructuracion de objetos y arreglos

interface Alumno1{
    matricula: number;
    nombre: string;
    edad: number;
    correo: string;
    grupo: Grupo;
}

interface Grupo{
    grupo: string;
    year: number;
}

const alumno1: Alumno1 = {
    matricula: 12345,
    nombre: 'Mario',
    edad: 23,
    correo: 'mario@gmail.com',
    grupo: {
        grupo: 'idgs',
        year: 2023
    }
}

console.log(`La matricula es:  ${alumno1.matricula}`);
console.log(`El nombre es:  ${alumno1.nombre}`);
console.log(`El año del grupo es:  ${alumno1.grupo.year}`);

//Desestructuracion de objetos
const {matricula, nombre:nom, grupo:xx} = alumno1;
const {grupo, year:anio} = xx;

console.log(`La matricula es:  ${matricula}`);
console.log(`El nombre es:  ${nom}`);
console.log(`El grupo es:  ${grupo}`);
console.log(`El año del grupo es:  ${anio}`);

// Desestructuracion de arreglos
const gps: string[] = ['IDGS', 'IEVN', 'REDES'];

console.log(`grupo 1: ${gps[0]}`)
console.log(`grupo 2: ${gps[1]}`)
console.log(`grupo 3: ${gps[2]}`)

const [a,, b] = gps;

console.log(`grupo 1: ${a}`)