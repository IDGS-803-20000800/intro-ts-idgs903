function suma(): void{
    console.log(3+6);
} //funcion sin parametros y sin retorno

function suma2(a:number, b:number): number{
    return a+b;
} //funcion con parametros y con retorno

const suma3 = (a:number, b:number): string => {
    return `${a+b}`;
}; //funcion flecha con parametros y con retorno

function multiplicar(n1:number, otronumero:number, nuevonumero:number= 3): number{
    let tem = n1*nuevonumero;
    return tem;
} //funcion con parametros y con retorno

interface Mascota{
    nombre: string;
    edad: number;
    mostrarEdad: () => void //funcion dentro de un objeto;
}

function calcular(mascota: Mascota, x:number): void{
    mascota.edad += x;
    console.log(mascota);
}

function calcular1(n1:number, n2:number, n3?:number): number{
    if(n3){
        return n1+n2+n3;
}
    else{
        return n1+n2;
    }
} //funcion con parametros opcionales y con retorno 
  //(si no se le pasa el tercer parametro, se le asigna un valor por defecto)

const nuevaMascota: Mascota = {
    nombre: 'Juan',
    edad: 3,
    mostrarEdad(){ //funcion dentro de un objeto
        console.log('La edad es: ', this.edad);
    }
}
calcular(nuevaMascota, 5);

console.log(multiplicar(3,0,2));

suma();

console.log(suma2(23,10));

const funcSumar = function(valor1:number, valor2:number): number{
    return valor1+valor2;
} //funcion anonima (no tiene nombre)

console.log(funcSumar(4,5));

// Funciones con parametros rest
function calcular2(...valores:number[]): number{
    let suma = 0;
    for(let x = 0; x<valores.length; x++){
        suma += valores[x];
    }
    return suma;
} // (parametros rest) funcion con parametros y con retorno (recibe un numero indeterminado de parametros)

console.log(calcular2(10, 2, 3, 4));
console.log(calcular2(1,2));