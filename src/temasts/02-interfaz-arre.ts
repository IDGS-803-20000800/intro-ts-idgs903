// Mostrar el uso de interfaces con arreglos
interface Alumno {
    matricula: number;
    nombre: string;
    email: string;
}

// Arreglo de objetos de tipo Alumno
const alumno: Alumno = {
    nombre: 'Mario',
    matricula: 12345,
    email: 'mario@gmail.com'
};

let mascotas: string[] = ['perro', 'gato', 'perico']; // Arreglo de strings
mascotas[1] = 'sshhh'
mascotas.push('ssssss'); // Agregar un elemento al final del arreglo

let tem:(number | string)[] = []; // Arreglo de números y strings
tem.push('nombre');
tem.push(224);

console.log(mascotas);
console.table(alumno);