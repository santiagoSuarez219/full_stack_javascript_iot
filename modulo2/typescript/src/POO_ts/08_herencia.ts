let lista_cursos: string[] = [
  "Circuitos1",
  "Electronica Analoga",
  "Electronica Digital",
  "Matematicas Especiales",
];

export class Usuario {
  nombre: string;
  edad: number;
  email: string;
  password: string;

  constructor(nombre: string, edad: number, email: string, password: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.password = password;
  }

  info(): string {
    return `Nombre: ${this.nombre} \nEdad: ${this.edad} \nEmail: ${this.email}`;
  }
}

export class Estudiante extends Usuario {
  semestre: number;
  cursos_estudiante: string[];

  constructor(
    nombre: string,
    edad: number,
    email: string,
    password: string,
    semestre: number,
    cursos_estudiante: string[]
  ) {
    super(nombre, edad, email, password);
    this.semestre = semestre;
    this.cursos_estudiante = cursos_estudiante;
  }

  incluirCurso(nombreCurso: string) {
    this.cursos_estudiante.push(nombreCurso);
  }

  imprimirCursos(): string {
    return `Cursos: ${this.cursos_estudiante}`;
  }
}

export class Profesor extends Usuario {
  cursos_impartidos: string[];

  constructor(
    nombre: string,
    edad: number,
    email: string,
    password: string,
    cursos_impartidos: string[]
  ) {
    super(nombre, edad, email, password);
    this.cursos_impartidos = cursos_impartidos;
  }

  crearCurso(nombreCurso: string) {
    lista_cursos.push(nombreCurso)
  }
  
}

const estudiante1 = new Estudiante(
  "santiago",
  24,
  "santiago@gmail.com",
  "abcd1234",
  7,
  [lista_cursos[0], lista_cursos[2]]
);

const profesor1 =  new Profesor(
    "David",
    30,
    "david@gmail.com",
    "abcd12234",
    [lista_cursos[1]]
)

console.log(`el nombre del estudiante1 es ${estudiante1.nombre}`);
console.log(`el nombre del estudiante1 es ${profesor1.nombre}`);

console.log(lista_cursos);
profesor1.crearCurso('Inteligencia Artificial')
console.log(lista_cursos);
estudiante1.incluirCurso(lista_cursos[lista_cursos.length -1]);
console.log(estudiante1.imprimirCursos());


