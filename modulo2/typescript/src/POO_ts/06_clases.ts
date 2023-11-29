export class Estudiante {
    nombre: string;
    edad: number;
    semestre: number;
    email: string;
    password: string;
    cursos: (string)[];
  
    constructor(
      nombre: string,
      edad: number,
      semestre: number,
      email: string,
      password: string,
      cursos: (string)[]
    ) {
      console.log("Entre al constructor");
      this.nombre = nombre;
      this.edad = edad;
      this.semestre = semestre;
      this.email = email;
      this.password = password;
      this.cursos = cursos
    }
}

const estudiante1 = new Estudiante(
    "santiago",
    24,
    7,
    "santiago@gmail.com",
    "abcd1234",
    ['Fisica Moderna', 'Teoria Electromagnetica']
    );
    
console.log(`el nombre del estudiante1 es ${estudiante1.nombre}`);