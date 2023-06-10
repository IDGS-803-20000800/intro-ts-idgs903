// Definicion de una clase
class Persona{
    nombre:string = '2';
    edad:number = 2;
    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`);
    }
}

let persona: Persona;
persona = new Persona('Juan', 23);
persona.imprimir();

//Modificadores de acceso
class Dado{
    private valor: number = 0;
    public tirar(){
        this.valor = Math.floor(Math.random()*6)+1;
    }

    imprimir(){
        console.log(`Valor: ${this.valor}`);
    }
}

let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();

//clase con constructor simplificado
class Persona2{
    constructor(public nombre:string, public edad:number){}
    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`);
    }
}

let persona2: Persona2;
persona2 = new Persona2('Juan', 23);
persona2.imprimir();