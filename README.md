# Desarrollo FullStack con JavaScript orientado a aplicaciones de Iot
Mi nombre es Santiago Suarez, Soy Joven Investigador del laboratorio de Sistemas de control y robotica del Instituto Tecnologico Metropolitano de Medellin y estudiante de Ingenieria Electronica. En este repositorio, se encontraran los archivos de las clases del curso de Desarrollo FullStack con JavaScript orientado a aplicaciones de Iot.

## Contenido
1. Configuracion de entorno de trabajo
2. Fundamentos de JavaScript y TypeScript
   1. Introduccion a JavaScript
   2. Introduccion a TypeScript
   3. Programacion orientada a objetos con TypeScript

3. Fundamentos de desarrollo Backend utilizando TypeScript y Nest JS.
   1. API Rest con Nest JS
   2. MQTT y WebSocket para aplicaciones IoT
   3. Persistencia de datos en bases de datos NO SQL

4. Fundamentos de desarrollo Frontend utilizando JavaScript y React
   1. Fundamentos de HTML y CSS
   2. Fundamentos de ReactJS
   3. Fundamentos de Docker y despliegue de aplicacion en un servidor

## Configuracion de entorno de trabajo
### Instalacion de WSL
1. Ir a la tienda de Microsoft Store y descargar la aplicacion 'Terminal' (Opcional)
2. Puedes descargar WSL desde la Microsoft Store o bien, desde cmd o powershell utilizando el siguiente comando
```bash
wsl --install
```
Recuerda, que si presentas problemas, trata de iniciar la powershell como administrador
3. Si descargaste WSL desde la Microsoft Store, debes descargar una distribucion de Linux, en este caso, se utilizara Ubuntu. 
4. Una vez descargada la distribucion, debes iniciarla y configurar tu usuario y contraseña.

## Instalacion de VS Code
1. Descarga VS Code desde la pagina oficial de Microsoft
2. Una vez descargado, debes instalarlo y abrirlo

## Instalacion de git
1. Abre WSL y ejecuta el siguiente comando
```bash
sudo apt-get install git-all
```
2. Una vez instalado, debes configurar tu usuario y correo electronico
```bash
git config --global user.name "Tu nombre"
git config --global user.email "Tu correo"
```
3. Para verificar que se haya instalado correctamente, ejecuta el siguiente comando
```bash
git --version
```

## Creacion de una cuenta en GitHub
1. Ingresa a la pagina oficial de GitHub
2. Crea una cuenta

## Configuracion de SSH
1. Abre WSL y ejecuta el siguiente comando
```bash
ssh-keygen -t rsa -b 4096 -C "tu@email.com"
```
2. Una vez ejecutado el comando, se te pedira que ingreses una ruta para guardar la llave, puedes dejar la ruta por defecto o bien, ingresar una ruta personalizada
3. Se te pedira que ingreses una contraseña, puedes dejarla en blanco o bien, ingresar una contraseña
4. Una vez creada la llave, debes ejecutar el siguiente comando
```bash
eval "$(ssh-agent -s)"
```
5. Ahora, debes agregar la llave a ssh
```bash
ssh-add ~/.ssh/id_rsa
```
6. Para obtener la llave, debes ejecutar el siguiente comando
```bash
cat ~/.ssh/id_rsa.pub
```
7. Copia la llave y pegala en tu cuenta de GitHub

## Instalacion de Node JS con NVM
1. Abre WSL y ejecuta el siguiente comando
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
2. Una vez instalado, debes cerrar y abrir WSL
3. Para verificar que se haya instalado correctamente, ejecuta el siguiente comando
```bash
nvm --version
```
4. Ahora, debes instalar la version de Node JS que desees, en este caso, se instalara la version 18.17.0
```bash
nvm install 18.17.0
```
5. Para verificar que se haya instalado correctamente, ejecuta el siguiente comando
```bash
node --version
```
6. Debes verificar la version de npm que se instalo, para ello, ejecuta el siguiente comando
```bash
npm --version
```

## Fundamentos de JavaScript
### Introduccion a JavaScript
JavaScript es un lenguaje de programación de alto nivel que se utiliza principalmente en el desarrollo web para agregar interactividad y dinamismo a las páginas web. Fue creado originalmente por Netscape y se ha convertido en uno de los lenguajes de programación más populares y ampliamente utilizados en el mundo. JavaScript se ejecuta en el lado del cliente en la mayoría de los navegadores web modernos. También se puede utilizar en el lado del servidor a través de Node.js.

Además de su uso en el desarrollo web, JavaScript también se ha expandido para ser utilizado en otros contextos, como el desarrollo de aplicaciones móviles (usando frameworks como React Native), el desarrollo de aplicaciones de servidor (usando Node.js), la automatización de tareas en navegadores web, y más.

#### Lenguajes de alto nivel
Un lenguaje de programación de alto nivel es un tipo de lenguaje de programación que está diseñado para ser más comprensible y más cercano al lenguaje humano que a la máquina. Estos lenguajes se crean con el objetivo de facilitar la escritura de programas y reducir la complejidad al programar, al proporcionar abstracciones y características que permiten a los programadores expresar sus ideas de manera más clara y concisa.

Ejemplos de lenguajes de alto nivel populares incluyen Python, Java, JavaScript, Ruby, C#, y muchos otros. Estos lenguajes son ampliamente utilizados en una variedad de aplicaciones, desde desarrollo web y aplicaciones móviles hasta inteligencia artificial y análisis de datos, debido a su facilidad de uso y versatilidad.

#### Frameworks
Un framework de desarrollo, en el contexto de la programación de software, es una estructura predefinida y un conjunto de herramientas, bibliotecas y componentes que facilitan el desarrollo de aplicaciones y sistemas de software. Los frameworks proporcionan un esqueleto o una base sobre la cual los desarrolladores pueden construir sus aplicaciones, lo que acelera el proceso de desarrollo y ayuda a mantener un código más organizado y consistente.

Ejemplos de frameworks de desarrollo incluyen:

1. Django: Un framework de desarrollo web para Python.
2. Ruby on Rails: Un framework de desarrollo web para Ruby.
3. Angular y React: Frameworks de desarrollo web front-end para JavaScript.
4. Spring: Un framework de desarrollo de aplicaciones Java.
5. Express.js: Un framework de desarrollo web para Node.js.

### Tipos de datos en JavaScript
1. [Codigo](./modulo2/javascript/01_tipos_de_datos.js)

### Variables en JavaScript
1. [Codigo](./modulo2/javascript/02_variables.js)

### Operadores en JavaScript
1. [Operadores](https://javascript.info/operators)

### Operadores de comparacion
1. [Comparacion](https://javascript.info/comparison)

### Condicionales
1. [Condicionales](https://javascript.info/ifelse)
2. [Codigo](./modulo2/javascript/03_condicionales.js)

### Operadores Logicos
1. [Logicos](https://javascript.info/logical-operators)

### Ciclos
1. [Ciclos](https://javascript.info/while-for)

### Funciones en JavaScript
1. [Funciones](https://javascript.info/function-basics)
2. [Codigo](./modulo2/javascript/04_funciones.js)

## Fundamentos de TypeScript
### Configuracion de un proyecto de TypeScript
1. Crear un proyecto de Node JS
```bash
npm init -y
```
2. Instalar TypeScript
```bash
npm install typescript --save-dev
```
3. Verificar la version de TypeScript
```bash
npx tsc --version
```

### Encontrando errores con TS
1. [Codigo](./modulo2/typescript/01_demo.js)

### Convirtiendo un archivo de TS a JS
para convertir un archivo de TS a JS, debes ejecutar el siguiente comando
```bash
npx tsc nombre_archivo.ts
```
tambien puedes utilizar esta estructura mas completa
```bash
npx tsc archivo_typescript.ts --target es6 --outDir carpeta_destino
```

### TSConfig
Para configurar un archivo de TS, debes ejecutar el siguiente comando
```bash
npx tsc --init
```
Una vez ejecutado el comando, se creara un archivo llamado tsconfig.json, en este archivo, podras configurar tu proyecto de TS

Algunas configuraciones importantes son:
1. target: Especifica la version de JS a la que se compilara el codigo
2. outDir: Especifica la carpeta de destino de los archivos compilados
3. rootDir: Especifica la carpeta de origen de los archivos a compilar

Para transpilar un proyecto de TS, debes ejecutar el siguiente comando
```bash
npx tsc
```
Para transpilar un proyecto de TS en modo watch, debes ejecutar el siguiente comando
```bash
npx tsc --watch
```
este modo permite que, cada vez que se realice un cambio en el codigo, se compile automaticamente

### Tipos de datos en TypeScript
1. [Codigo](./modulo2/typescript/src/03_tipado.ts)

### Funciones en TypeScript
1. [Codigo](./modulo2/typescript/src/04_funciones.ts)

### Modulos en TypeScript
1. [Modulo](./modulo2/typescript/src/suma_resta.ts)
2. [Codigo](./modulo2/typescript/src/05_modulos.ts)

## Programacion orientada a objetos con TypeScript
### Apendice: instalacion de ts node
ts-node es un paquete de npm que nos permite ejecutar archivos de TypeScript directamente sin necesidad de compilarlos a JavaScript. Esto es muy útil para probar nuestro código de TypeScript sin tener que compilarlo cada vez que hagamos un cambio.

Para instalar ts-node, debes ejecutar el siguiente comando
```bash
npm install -D ts-node
```
Para ejecutar un archivo de TS con ts-node, debes ejecutar el siguiente comando

```bash
npx ts-node nombre_archivo.ts
```

### Objetos
En el contexto de la programación orientada a objetos (POO), un objeto es una entidad que representa un concepto o una entidad del mundo real. Tiene un estado y un comportamiento.

El estado de un objeto es la información que lo define, como su nombre, su edad, su color, etc. El comportamiento de un objeto es lo que puede hacer, como caminar, hablar, comer, etc.

Los objetos se pueden agrupar en clases. Una clase es un molde que se utiliza para crear objetos. Cada clase tiene un conjunto de atributos y métodos que definen el estado y el comportamiento de los objetos de esa clase.

Por ejemplo, la clase `Persona` podría tener los siguientes atributos:

* nombre
* edad
* sexo

Y los siguientes métodos:

* hablar()
* caminar()
* comer()

Un objeto `Persona` creado a partir de esta clase tendría un estado y un comportamiento definido por los valores de sus atributos y la implementación de sus métodos.

Los objetos son una forma potente de organizar el código. Permiten que los programadores piensen en los problemas en términos de entidades del mundo real, lo que puede facilitar el desarrollo de software.

Aquí hay algunos ejemplos de objetos en la programación orientada a objetos:

* Un coche es un objeto que tiene un estado (color, marca, modelo, etc.) y un comportamiento (acelerar, frenar, girar, etc.).
* Una ventana es un objeto que tiene un estado (tamaño, posición, etc.) y un comportamiento (abrir, cerrar, maximizar, minimizar, etc.).
* Un cliente es un objeto que tiene un estado (nombre, dirección, etc.) y un comportamiento (comprar, devolver, etc.).

Los objetos se pueden utilizar para representar cualquier cosa, desde objetos físicos hasta conceptos abstractos.

![POO1](https://static.platzi.com/media/user_upload/%C2%BFQu%C3%A9%20es%20un%20Objeto-47c35a48-0599-4e3d-acf0-084b27d007fc.jpg)

![POO2](https://edteam-media.s3.amazonaws.com/community/original/293a1738-c643-465b-8c30-677d8b185e46.jpg)

### Clases
En el contexto de la programación orientada a objetos (POO), una clase es una plantilla que se utiliza para crear objetos. Define el estado y el comportamiento de los objetos de esa clase.

El estado de un objeto es la información que lo define, como su nombre, su edad, su color, etc. El comportamiento de un objeto es lo que puede hacer, como caminar, hablar, comer, etc.

Una clase se compone de los siguientes elementos:

* **Atributos:** Representan el estado de los objetos de la clase. Pueden ser variables, constantes o propiedades.
* **Métodos:** Representan el comportamiento de los objetos de la clase. Pueden ser funciones o procedimientos.

Por ejemplo, la clase `Persona` podría tener los siguientes atributos:

* **nombre:** Una variable de tipo cadena que representa el nombre de la persona.
* **edad:** Una variable de tipo entero que representa la edad de la persona.
* **sexo:** Una variable de tipo enumerado que representa el sexo de la persona.

Y los siguientes métodos:

* **hablar():** Un método que representa la acción de hablar.
* **caminar():** Un método que representa la acción de caminar.
* **comer():** Un método que representa la acción de comer.

Un objeto `Persona` creado a partir de esta clase tendría un estado y un comportamiento definido por los valores de sus atributos y la implementación de sus métodos.

Aquí hay algunos ejemplos de clases en la programación orientada a objetos:

* La clase `Coche` representa un coche.
* La clase `Ventana` representa una ventana.
* La clase `Cliente` representa un cliente.

Las clases se pueden utilizar para representar cualquier cosa, desde objetos físicos hasta conceptos abstractos.

Las clases son una forma importante de organizar el código en la programación orientada a objetos. Permiten que los programadores piensen en los problemas en términos de entidades del mundo real, lo que puede facilitar el desarrollo de software.'

1. [Clases](./modulo2/typescript/src/POO_ts/06_clases.ts)
2. [Metodos](./modulo2/typescript/src/POO_ts/07_metodos.ts)

### Herencia
En la programación orientada a objetos (POO), la herencia es un mecanismo que permite que una clase herede las características de otra clase.

Las características heredadas pueden ser atributos, métodos o incluso otras clases.

La herencia se utiliza para lograr varios objetivos en la POO, incluyendo:

* **Reutilización de código:** La herencia permite reutilizar el código que se ha escrito para una clase en otra clase. Esto puede ahorrar tiempo y esfuerzo a los programadores.
* **Extensión de funcionalidad:** La herencia permite extender la funcionalidad de una clase existente. Esto puede hacerse añadiendo nuevos atributos, métodos o incluso nuevas clases.
* **Organización de código:** La herencia puede utilizarse para organizar el código en una jerarquía de clases. Esto puede facilitar la comprensión y el mantenimiento del código.

La herencia se implementa de forma diferente en diferentes lenguajes de programación. Sin embargo, en general, la herencia se expresa utilizando la palabra clave `extends`.

Por ejemplo, la siguiente declaración de clase muestra cómo la clase `Coche` hereda de la clase `Vehículo`:

```
class Coche extends Vehiculo {

  // Atributos y métodos específicos de Coche

}
```

En este ejemplo, la clase `Coche` hereda los atributos y métodos de la clase `Vehículo`. Además, la clase `Coche` puede definir sus propios atributos y métodos específicos.

Aquí hay algunos ejemplos de cómo se puede utilizar la herencia en la POO:

* Una clase `Animal` podría heredar de la clase `SerVivo`. Esto permitiría que los objetos `Animal` tuvieran todos los atributos y métodos de los objetos `SerVivo`.
* Una clase `Coche` podría heredar de la clase `Vehículo`. Esto permitiría que los objetos `Coche` tuvieran todos los atributos y métodos de los objetos `Vehículo`.
* Una clase `Ventana` podría heredar de la clase `ElementoGrafico`. Esto permitiría que los objetos `Ventana` tuvieran todos los atributos y métodos de los objetos `ElementoGrafico`.

La herencia es una herramienta poderosa que puede utilizarse para mejorar la eficiencia y la flexibilidad del código en la POO.

1. [Herencia](./modulo2/typescript/src/POO_ts/08_herencia.ts)

## Fundamentos de desarrollo Backend utilizando TypeScript y Nest JS.

Instalacion de nest 

```bash
npm install -g @nestjs/cli
```

Una vez instalado el CLI, verifica que el proceso es correcto con el comando

```bash
nest --version
```

### Primer proyecto
Para crear tu primer proyecto con este framework basta con utilizar el comando
```bash
nest new <project-name>
cd <project-name>
```

El CLI te realizará una pregunta sobre qué gestor de dependencias quieres utilizar:

Para este ejemplo, escojeremos NPM. Luego de algunos segundos, tu primer proyecto estará listo.

Ahora, utiliza el comando 
```bash
npm run start
```

para levantar el servidor de pruebas básico que trae consigo NestJS y finalmente, ingresa a http://localhost:3000/ para visualizar tu primer “Hola Mundo” con esta tecnología.

### Controladores
El concepto más básico para desarrollar una aplicación con NestJS son los Controladores.
Los Controladores manejarán las rutas o endpoints que la aplicación necesite, además de validar los permisos del usuario, filtro y manipulación de datos. El controlador importa un servicio que son los responsables de la lógica y obtención de datos desde una BBDD que el controlador requiere.

Para crear un controlador, debes ejecutar el siguiente comando
```bash
nest generate controller <nombre-controlador>
```

Puedes correr el servidor de NestJS con el comando `npm run start:dev` e ingresar a la ruta localhost:3000/ para visualizar el contenido que el controlador envía.

```typescript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

### Servicios
Los servicios son clases que se encargan de la lógica de negocio de nuestra aplicación. Estos servicios pueden ser inyectados en los controladores para ser utilizados en los diferentes endpoints que se requieran.

Para crear un servicio, debes ejecutar el siguiente comando
```bash
nest generate service <nombre-servicio>
```

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

### Modulos
Los módulos son clases que se encargan de organizar los controladores y servicios de nuestra aplicación. Estos módulos pueden ser inyectados en otros módulos para ser utilizados en los diferentes endpoints que se requieran.

Para crear un modulo, debes ejecutar el siguiente comando
```bash
nest generate module <nombre-modulo>
```

#### GET: como recibir parametros
Existen diferentes tipos de endpoints que se identifican a través de los Verbos HTTP. Cada uno con un propósito determinado siguiendo el protocolo.En particular, el verbo GET suele utilizarse para endpoints que permiten la obtención de datos como un producto o una lista de productos.

Es frecuente la necesidad de que este tipo de endpoints también reciban información dinámica en las URL como el identificador de un producto.Para capturar estos datos en NestJS, tienes que importar el decorador Param desde @nestjs/common y emplearlo de la siguiente manera en tus endpoints.

```typescript
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Scd40Service } from './scd40.service'

@Controller('scd40')
export class Scd40Controller {
    constructor(private scd40Service: Scd40Service){}

    @Get()
    getDataScd40(){
        return this.scd40Service.findAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        return this.scd40Service.findOne(+id)
    }
}
```

### Metodo POST
Así como el verbo HTTP GET se utiliza para la obtención de datos, el verbo HTTP Post se utiliza para la creación de los mismos previamente.

El metodo post se utiliza para crear un recurso en el servidor, por ejemplo, crear un usuario, crear un producto, crear una categoria, etc.

En tu proyecto NestJS, tienes que importar los decoradores Post y Body desde @nestjs/common. El primero para indicar que el endpoint es del tipo POST y el segundo para capturar los datos provenientes del front-end en el cuerpo del mensaje.

```typescript
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Scd40Service } from './scd40.service'

@Controller('scd40')
export class Scd40Controller {
    constructor(private scd40Service: Scd40Service){}

    @Get()
    getDataScd40(){
        return this.scd40Service.findAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        return this.scd40Service.findOne(+id)
    }

    @Post()
    create(@Body() data: any){
        return this.scd40Service.create(data)
    }
```

### Metodo PUT
El verbo HTTP PUT se utiliza para la actualización de datos en el servidor. En tu proyecto NestJS, tienes que importar los decoradores Put y Body desde @nestjs/common. El primero para indicar que el endpoint es del tipo PUT y el segundo para capturar los datos provenientes del front-end en el cuerpo del mensaje.

```typescript
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Scd40Service } from './scd40.service'

@Controller('scd40')
export class Scd40Controller {
    constructor(private scd40Service: Scd40Service){}

    @Get()
    getDataScd40(){
        return this.scd40Service.findAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        return this.scd40Service.findOne(+id)
    }

    @Post()
    create(@Body() data: any){
        return this.scd40Service.create(data)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: any){
        return this.scd40Service.update(+id, data)
    }
}
```

### Metodo DELETE
El verbo HTTP DELETE se utiliza para la eliminación de datos en el servidor. En tu proyecto NestJS, tienes que importar el decorador Delete desde @nestjs/common. Este decorador para indicar que el endpoint es del tipo DELETE.

```typescript
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Scd40Service } from './scd40.service'

@Controller('scd40')
export class Scd40Controller {
    constructor(private scd40Service: Scd40Service){}

    @Get()
    getDataScd40(){
        return this.scd40Service.findAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        return this.scd40Service.findOne(+id)
    }

    @Post()
    create(@Body() data: any){
        return this.scd40Service.create(data)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: any){
        return this.scd40Service.update(+id, data)
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.scd40Service.remove(+id)
    }
}
```

### Servicio SCD40
```typescript
import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { scd40 } from './scd40.entity'

@Injectable()
export class Scd40Service {

    private contador = 2;
    private scd40data: scd40[] = [
         {
               id: 1,
               co2: 400,
               humedad: 50,
               temperatura: 25,
               fecha: new Date()
         },
         {
               id: 2,
               co2: 500,
               humedad: 60,
               temperatura: 30,
               fecha: new Date()
         }
   ];

    findAll() {
        return this.scd40data;
    }

    findOne(id: number){
        console.log(id);
        return this.scd40data.find((item) => item.id === id);
    }
    
    create(data: any){
        this.contador = this.contador + 1;
        const newData = {
            id: this.contador,
            ...data,
            fecha: new Date()
        };
        this.scd40data.push(newData);
        return newData
    };

    update(id: number, data: any) {
        const dataSensor = this.findOne(id);
        if (dataSensor) {
            const index = this.scd40data.findIndex((item) => item.id == id);
            this.scd40data[index] = {
                ...dataSensor,
                ...data,
            };
            return this.scd40data[index]
        };
        return null;
    }

    remove(id: number) {
        const index = this.scd40data.findIndex((item) => item.id === id);
        if(index === -1){
            return false
        }
        this.scd40data.splice(index, 1);
        return true
    }
}
```

### Persistencia de datos en bases de datos NO SQL
#### Creacion de contenedor de MongoDB
```yml
version: '3'
services:
  my-database:
    image: mongo:4.4.4
    environment:
      - MONGO_INITDB_DATABASE=scd40db
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=admin12345
    ports:
      - '27017:27017'
    volumes:
      - ./mongo_data:/data/db
```

#### Instalacion de paquetes
```bash
npm install --save @nestjs/mongoose mongoose
```

### Instalacion de MongoCompass
[Descargar](https://www.mongodb.com/try/download/compass)

#### Modulo de conexion
```bash
nest generate module database
nest generate module scd40
```

```typescript
// src/database/database.module.ts
import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

@Global()
@Module({
    imports: [
        MongooseModule.forRoot('mongodb://admin:admin12345@localhost:27017/?authMechanism=DEFAULT')
    ],
    exports: [MongooseModule]
})
export class DatabaseModule {}
```

```typescript
// src/scd40/scd40.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Scd40, Scd40Schema} from './entities/scd40.entity'
import { Scd40Service } from './services/scd40.service';
 
@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Scd40.name, schema: Scd40Schema},
        ])
    ],
    providers: [Scd40Service]
})
export class Scd40Module {}
```

#### Entidad SCD40
```typescript
// src/scd40/entities/scd40.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Scd40 extends Document {
  @Prop()
  co2: number;

  @Prop()
  temperatura: number;

  @Prop()
  humedad: number;

  @Prop()
  VPD: number;

  @Prop()
  fecha: Date;
}

export const Scd40Schema = SchemaFactory.createForClass(Scd40);
```

#### Servicio SCD40
```typescript
// src/scd40/services/scd40.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Scd40 } from '../entities/scd40.entity';

@Injectable()
export class Scd40Service {
    constructor(@InjectModel(Scd40.name) private scd40Model: Model<Scd40>) {}

    async findAll() {
        return this.scd40Model.find().exec();
    }

    async findOne(id: string) {
        return this.scd40Model.findById(id).exec();
    }

    async create(data: any) {
        const date = new Date();
        const newDocument Data = {
            ...data,
            fecha: date
        } 
        const newScd40 = new this.scd40Model(newDocument);
        return newScd40.save();
    }

    async update(id: string, changes: any) {
        return this.scd40Model
            .findByIdAndUpdate(id, { $set: changes }, { new: true })
            .exec();
    }

    async remove(id: string): Promise<Scd40> {
        return this.scd40Model.findByIdAndDelete(id).exec();
    }
}
```







