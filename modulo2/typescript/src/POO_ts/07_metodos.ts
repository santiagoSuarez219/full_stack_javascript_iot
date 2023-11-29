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

  infoEstudiante(): string {
    return `Nombre: ${this.nombre} \nEdad: ${this.edad} \nSemestre: ${this.semestre}`;
  }

  incluirCurso(nombreCurso: string) {
    this.cursos.push(nombreCurso)
  }

  imprimirCursos(): string {
    return `Cursos: ${this.cursos}`
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

const estudiante2 = new Estudiante(
    "andres",
    23,
    3,
    "santiago@gmail.com",
    "abcd1234",
    ['Circuitos 1', 'Fisica de Campos']
  );


console.log(estudiante1.infoEstudiante());
console.log(estudiante2.infoEstudiante());

console.log(estudiante1.imprimirCursos());
console.log(estudiante2.imprimirCursos());

estudiante1.incluirCurso('Optimizacion');
estudiante2.incluirCurso('Calculo Integral');

console.log(estudiante1.imprimirCursos());
console.log(estudiante2.imprimirCursos());

