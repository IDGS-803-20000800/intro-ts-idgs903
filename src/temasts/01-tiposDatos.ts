// TypeScript es un lenguaje de programación orientado a objetos desarrollado y mantenido por Microsoft. 
// Es un superconjunto de JavaScript, que esencialmente añade tipado estático y objetos basados en clases.
var num1=2; // var es una variable global (actualmente no se usa)
let num2=3; // let es una variable local
const num3=4; // const es una constante

// Declaración de variables
let nombre: string = "Roberto"; // string
let num: number = 23; // number
let activo: boolean = true; // boolean
// nombre = 23 Error de compilación
let matricula: string | number | boolean = "ye634"; // string o number
matricula = 251432; // No hay error de compilación
matricula = true; // No hay error de compilación
let cualquiera: any = "hola"; // cualquier tipo

console.log(matricula);

export {}; // Exportación de módulo vacío para evitar error de compilación