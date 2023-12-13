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

    async remove(id: string) {
        return this.scd40Model.findByIdAndDelete(id).exec();
    }
}
```

### Codigo del proyecto
[Codigo](https://github.com/santiagoSuarez219/scd40example)

### Apendice: Acceder a un servidor local hosteado en WSL 2.0 por medio de dispositivos de la misma red local
1. En la terminal de WSL vas a escribir lo siguiente y vas a copiar tu direccion IPv4
```bash
ifconfig
```
2. Luego ejecutaras la terminal de windows "PowerShell" como administrador
3. Dentro de la PS escribiras el siguiente comando
```bash
netsh interface portproxy add v4tov4 listenport=[Puerto del servidor] listenaddress=0.0.0.0 connectport=[Puerto del servidor] connectaddress=[Tu dirección IPv4]
```
4. Para finalizar, debemos habilitar estos puertos en el firewall de Windows
  1. Firewall de Windows Defender
  2. Configuracion Avanzada
  3. Reglas de entrada (Lateral izquierda)
  4. Nueva regla (Lateral derecha)
  5. Puerto
  6. TCP y puertos locales especificos (Puerto)
  7. Nombre: WSL
  8. Finalizar
5. ahora podremos acceder a nuestro servidor local desde cualquier dispositivo que este dentro de la misma red local. Cabe aclarar que la dirección IPv4 de la maquina WSL se cambia cada vez que reiniciamos el PC. Lo único de que debemos de hacer es volver a realizar los pasos 1, 2 y 3 con la nueva dirección IPv4 que se le asigno a la maquina WSL.

## Fundamentos de desarrollo Frontend utilizando JavaScript y React
### Que es HTML y CSS y para que sirven
La web se construye mediante 3 tecnologías esenciales: HTML, CSS y JavaScript. Estos tres lenguajes son las bases en que una aplicación o página web está construida

### Que es HTML
El lenguaje de marcado de hipertexto o HTML por sus siglas en inglés. (HyperText Markup Language) es el código para construir la estructura de una página web. En otras palabras, HTML es el esqueleto con el cual definimos cada elemento que compone la página web, así como:
 
- Enlaces  	
- Párrafos
- Títulos
- Botones
- Imágenes
- Formulario

### Que es CSS
El lenguaje de hojas de estilos en Cascada o CSS por sus siglas en inglés (Cascade Style Sheets) es el código para describir la presentación de los elementos de la página web, los que definimos con HTML

### Anatomia de un documento HTML y sus elementos
Los elementos son cada una de las partes que conforman un archivo HTML. Su estructura contiene:

- Etiquetas: es la representación de un elemento HTML. Se divide en etiquetas de apertura, representadas por `<etiqueta>` y etiquetas de cierre, representadas por `</etiqueta>`
- Contenido: es el texto o elementos encerrados por la etiqueta, este valor es opcional en algunas de ellas. 

```html
<h1> Hola mundo </h1>
```

### Atributos HTML
Los atributos HTML son propiedades en la etiqueta de apertura que manejan el comportamiento del elemento. Su valor está envuelto en comillas

```html
<h1 class="title"> Hola mundo </h1>
```

### Elementos anidados
El anidamiento de elementos HTML consiste en envolver varias etiquetas en otras etiquetas. Interpreta a cada elemento HTML como una caja donde puedes guardar diferentes elementos u otras cajas. Estas cajas tendrán diferentes tamaños y estarán colocadas junto a otras.

```html
<section>
    <h1> Hola Mundo</h1>
    <p> Hola mundo desde HTML </p>
    <ul>
        <li> Elemento 1 </li>
        <li> Elemento 2 </li>
        <li> Elemento 3 </li>
    </ul>
</section>
```

Aquellas etiquetas que envuelven a otras se las denomina “padres”. Es decir, `<section>` es padre de `<h1>, <p>, <ul>`, y a su vez `<ul>` es padre de 3 etiquetas `<li>`.
 
Las etiquetas que son el contenido de otras, se las denomina “hijos”. Es decir, las etiquetas `<h1>, <p>, <ul>` son hijos de `<section>`, y a su vez las etiquetas `<li>` son hijos de `<ul>`.

### Elementos vacios en HTML
Los elementos vacíos son aquellos que únicamente se representan en una etiqueta de apertura. Por ejemplo: `<img …>` . Estas etiquetas pueden cerrarse en la misma
etiqueta de apertura, utilizando la barra inclinada "/" al final `<img …/>`

```html
<img src="cat.jpg"/> 
```

### Estructura basica de un documento HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header></header>
    <nav></nav>
    <section></section>
    <footer></footer>
</body>
</html>
```

1. Etiqueta Doctype: especifica que el archivo se maneje con la versión 5 de HTML.
2. Etiqueta html: Define el elemento raíz de un documento HTML. Todos los demás elementos deben estar contenidos dentro de este elemento raíz. En esta etiqueta se especifica el lenguaje de la página web mediante la propiedad lang.
3. Etiqueta head: Define la metainformación, es decir, toda información que no es contenido como tal de la página web. Por ejemplo, los enlaces a archivos CSS y JavaScript, el título y la imagen que aparecen en la pestaña del navegador. Esto es importante para motores de búsqueda como Google.
4. Etiqueta body: La etiqueta `<body>` define el contenido de la página web. Debe ser hijo cercano de `<html>` y padre de todas las etiquetas HTML, excepto por aquellas que definan metainformación.

### Etiquetas de enlace
La etiqueta de enlace `<a>` o “anchor” define un vínculo o enlace hacia una URL. Se utiliza con el atributo href con el valor del enlace.

### Etiquetas para textos
Las etiquetas para textos son aquellas que nos permiten definir el contenido de la página web. Estas etiquetas son:

1. `<h1> - <h6>`
2. `<p>`
3. `<span>` define un contenedor genérico de tipo inline. Igual que `<div>` no tiene valor semántico y debes evitar su uso innecesario

### Etiquetas para listas
Las etiquetas para listas son aquellas que nos permiten definir listas de elementos. Estas etiquetas son:

1. `<ul>` define una lista desordenada
2. `<ol>` define una lista ordenada
3. `<li>` define un elemento de la lista

### Etiquetas para multimedia
Las etiquetas para multimedia son aquellas que nos permiten definir contenido multimedia. Estas etiquetas son:

1. `<img>` define una imagen
2. `<svg>` define una svg
3. `<iframe>` define un contenedor para una pagina web dentro de otra pagina web.
4. `<video>` define un contenedor de video

### Etiquetas para formularios
Las etiquetas para formularios son aquellas que nos permiten definir formularios. Estas etiquetas son:

1. `<form>` define un formulario
2. `<input>` define un elemento de entrada del formulario. Es necesario especificar el tipo con el atributo type. Existen varios tipos de input, revísalos en su [documentación](https://developer.mozilla.org/es/docs/Learn/Forms/HTML5_input_types).
3. `<label>` define un titulo para la etiqueta input. Es utilizado para acciones de accesibilidad.
4. `<button>` define un botón. Es usado para la interactividad de la página. 

### Anatomia de una declaracion CSS: selectores, propiedades y valores
Una declaración de CSS es un bloque que especifica el conjunto de estilos que se añadirán a un elemento HTML. Su estructura contiene lo siguiente:
1. Selector: define el elemento o conjunto de elementos a los cuales se añadirán los estilos.
2. Propiedad: es el nombere del estilo CSS
3. Valor: es el valor que tomará la propiedad CSS

```css
selector {
    propiedad: valor;
}
```

### Algunas propiedades inciales
 
1. Color: establece el color del texto de un elemento
2. Background-color: establece un color de fondo al elemento
3. Font-size: establece el tamaño de la fuente
4. Width: establece la anchura de un elemento.
5. Height: establece la altura de un elemento

### Medidas inciales en CSS
Las medidas iniciales en CSS son las siguientes:
1. px: píxeles
2. %: establece un porcentaje con respecto a una medida base.

### Selectores de CSS
Los selectores de CSS son la forma de definir a qué elementos se les aplicará un estilo. Existen diferentes tipos de selectores, los cuales se pueden combinar entre sí para definir un estilo más específico.

**Nota:** Existen color de CSS que puedes explorar [Aqui](https://htmlcolorcodes.com/es/nombres-de-los-colores/).

### Selectores de tipo
Los selectores de tipo son aquellos que seleccionan a todos los elementos que coincidan con el nombre del selector. Por ejemplo, el selector `p` seleccionará a todos los elementos `<p>`.

### Selectores de clase
Selecciona todos los elementos que coincidan con las etiquetas HTML que contengan el atributo class
 
```html
<!--archivo HTML-->
<div class="card"> Soy una carta </div
```

Para seleccionar estos elementos, se empieza por un punto . Y seguido el valor exacto del atributo class de la etiqueta. Puede ser cualquier que desees colocar.
 
```css
/* archivo CSS */
.card {
	/* Todas las etiquetas con la clase "card" */
}
```
 
Pueden existir más de un valor dentro del atributo class separados por espacios.
 
```html
<!--archivo HTML-->
<div class="card card1"> Soy una carta </div>
<div class="card card2"> Soy una carta </div>
```

```css
.card {
	/* Todas las etiquetas con la clase "card" */
}
 
.card1 {
	/* Todas las etiquetas con la clase "card1" */
}
 
.card2 {
	/* Todas las etiquetas con la clase "card2" */
}
```

### Selectores de id
Selecciona el único elemento que coincida con la etiqueta HTML que contenga el atributo id. Solo puede existir un valor id para todo el documento.
 
```html
<!--archivo HTML-->
<button id="eliminar"> Eliminar </button>
```
 
Para seleccionar el elemento, se empieza por el símbolo de hashtag # y seguido el valor exacto del atributo id de la etiqueta. Puede ser cualquier valor que desees colocar.
 
```css
/* archivo CSS */
#eliminar {
	/* La única etiqueta con el id "eliminar" */
}
```

### Selectores de atributo

### Selectores combinados
Un selector combinador es la unión de dos o más selectores básicos
 
```css
Selector1 selector2 selector3 {
/*Estilos */
}
```

#### Combinador descendientes
Selecciona todos los elementos que coincidan con el selector2 que sean descendientes de selector1
 
```html
<!--archivo HTML-->
<div class="card">
    <h1> Soy un título </h1>
</div>
```
 
```css
/* archivo CSS */
.card h1 {
/* Todos los elementos <h1> que sean descendientes de un elemento con la clase "card" */
}
```

### Pseudoclases
Una pseudoclase define el estilo de un estado de un elemento.

[Documentacion](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes#indice_de_las_pseudo-clases_est%C3%A1ndar)

**Sintaxis**
```css
selector:pseudoclase {
    propiedad:valor;
}
```

#### Algunos ejemplos de pseudoclases
1. :hover aplica estilos cuando el cursor está sobre el elemento. [Ejemplo](https://codi.link/PGRpdj5TZcOxw6FsYW1lPC9kaXY+%7CZGl2IHsNCiAgZm9udC1zaXplOiAzcmVtOw0KICBjdXJzb3I6IHBvaW50ZXI7DQp9DQoNCmRpdjpob3ZlciB7DQogIGNvbG9yOiByZWQ7DQp9%7C)
2. :active Representa el estado de un elemento que no ha sido visitado. [Ejemplo](https://codi.link/PGEgaHJlZj0iIyI+Q2xpY2tlYW1lPC9hPg==%7CYSB7DQogIGZvbnQtc2l6ZTogM3JlbTsNCn0NCg0KYTpsaW5rIHsNCiAgY29sb3I6IHJlZDsNCn0=%7C)
3. :visited Representa el estado de un elemento que ya ha sido visitado. [Ejemplo](https://codi.link/PGEgaHJlZj0iIyI+Q2xpY2tlYW1lPC9hPg==%7CYSB7DQogIGZvbnQtc2l6ZTogM3JlbTsNCn0NCg0KYTp2aXNpdGVkIHsNCiAgY29sb3I6IHJlZDsNCn0=%7C)
4. :not Representa el estado en el cual no coinciden los selectoes que se indiquen.
[Ejemplo](https://codi.link/PGRpdj5BenVsPC9kaXY+DQo8ZGl2PkF6dWw8L2Rpdj4NCjxkaXYgY2xhc3M9Im5lZ3JvIj5OZWdybzwvZGl2Pg0KPGRpdj5BenVsPC9kaXY+DQo8ZGl2PkF6dWw8L2Rpdj4=%7CZGl2IHsNCiAgZm9udC1zaXplOiAzcmVtOw0KfQ0KDQpkaXY6bm90KC5uZWdybykgew0KICBjb2xvcjogYmx1ZTsNCn0=%7C)
5. :ntn-child() Representa el estado en el cual coinciden los hijos del elemento segun el valor indicado. 
   1. odd: los elementos hijos con posiciones impares
   2. even: los elementos hijos en posiciones pares.

[Ejemplo](https://codi.link/PGRpdj5OZWdybzwvZGl2Pg0KPGRpdj5BenVsPC9kaXY+DQo8ZGl2Pk5lZ3JvPC9kaXY+DQo8ZGl2Pk5lZ3JvPC9kaXY+DQo8ZGl2Pk5lZ3JvPC9kaXY+%7CZGl2IHsNCiAgZm9udC1zaXplOiAzcmVtOw0KfQ0KDQpkaXY6bnRoLWNoaWxkKDIpIHsNCiAgY29sb3I6IGJsdWU7DQp9%7C)

### Estilos en linea
Los estilos en línea son las propiedades CSS escritas en el HTML a través de la propiedad style de toda etiqueta. También es una mala práctica y debes evitarlo.

```html
 <h1 style="color: blue">Especificad</h1>
```

### Tipos de displays mas usados
#### Block
El display block establece que un elemento ocupará todo el espacio disponible por defecto y el siguiente elemento a este se situará por debajo. Es posible añadir medidas de anchura width y altura height a estos elementos. También es posible agregar todas las propiedades del modelo de caja (no te preocupes de este concepto, ya lo abordaremos).

[Ejemplo](https://codi.link/PGRpdj5Tb3kgZGlzcGxheSBibG9jazwvZGl2Pg0KPGRpdj5Tb3kgZGlzcGxheSBibG9jazwvZGl2Pg0KPGRpdiBjbGFzcz0iY29uX21lZGlkYXMiPlNveSBkaXNwbGF5IGJsb2NrPC9kaXY+DQoNCg==%7CLyogUXVpdGEgbG9zIGNvbWVudGFyaW9zIHkgb2JzZXJ2YSBlbCBjb21wb3J0YW1pZW50byAqLw0KZGl2ew0KICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOw0KICAvKiBtYXJnaW46IDEwcHg7ICovDQogIC8qIHBhZGRpbmc6IDEwcHg7ICovDQp9DQoNCi5jb25fbWVkaWRhcyB7DQogIC8qIHdpZHRoOiAyMDBweDsgKi8NCiAgLyogaGVpZ2h0OiAyMDBweDsgKi8NCn0NCg0KLyogSWdub3JhIGVzdG9zIGVzdGlsb3MsIHBvciBhaG9yYSAqLw0KKiB7DQogIGZvbnQtc2l6ZTogMS4ycmVtOw0KICBtYXJnaW46IDA7DQp9DQoNCg0KDQo=%7C)

#### Visualizacion en linea (inline)
El display inline establece que un elemento ocupará el espacio del contenido del mismo y el siguiente elemento se situará a la derecha. No es posible añadir medidas de anchura width y altura height a estos elementos. También, no es posible agregar todas las propiedades del modelo de caja, únicamente funcionará la propiedad margin en el eje horizontal (no te preocupes de este concepto, ya lo abordaremos).

[Ejemplo](https://codi.link/PHNwYW4+U295IGRpc3BsYXkgaW5saW5lPC9zcGFuPg0KPHNwYW4+U295IGRpc3BsYXkgaW5saW5lPC9zcGFuPg0KPHNwYW4+U295IGRpc3BsYXkgaW5saW5lPC9zcGFuPg0KPHNwYW4+U295IGRpc3BsYXkgaW5saW5lPC9zcGFuPg0KPHNwYW4gY2xhc3M9ImNvbl9tZWRpZGFzIj5Tb3kgZGlzcGxheSBpbmxpbmU8L3NwYW4+DQoNCg==%7CLyogUXVpdGEgeSBhZ3JlZ2EgbG9zIGNvbWVudGFyaW9zIHkgb2JzZXJ2YSBlbCBjb21wb3J0YW1pZW50byAqLw0Kc3BhbnsNCiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTsNCiAgLyogbWFyZ2luOiAyMHB4OyAqLw0KICAvKiBwYWRkaW5nOiAyMHB4OyAqLw0KfQ0KDQouY29uX21lZGlkYXMgew0KICAvKiB3aWR0aDogMjAwcHg7ICovDQogIC8qIGhlaWdodDogMjAwcHg7ICovDQp9DQoNCi8qIElnbm9yYSBlc3RvcyBlc3RpbG9zLCBwb3IgYWhvcmEgKi8NCiogew0KICBmb250LXNpemU6IDEuMnJlbTsNCiAgbWFyZ2luOiAwOw0KfQ0KDQoNCg0K%7C)

### Visualizacion nula (none)
El display none desactiva la visualización de un elemento, como si el elemento no existiera.

[Ejemplo](https://codi.link/PGRpdj48L2Rpdj4NCjxkaXY+PC9kaXY+DQo8ZGl2IGNsYXNzPSJkZXNhcGFyZWNlciI+DQogIEVuIG1pIHNpZ3VpZW50ZSB0cnVjbywgwqF2b3kgYSBkZXNhcGFyZWNlciENCjwvZGl2Pg0KPGRpdj48L2Rpdj4NCjxkaXY+PC9kaXY+DQo=%7CLyogUXVpdGEgbG9zIGNvbWVudGFyaW9zIHkgb2JzZXJ2YSBlbCBjb21wb3J0YW1pZW50byAqLw0KLmRlc2FwYXJlY2Vyew0KICAvKiBkaXNwbGF5OiBub25lOyAqLw0KICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTsNCiAgDQp9DQoNCi8qIElnbm9yYSBlc3RvcyBlc3RpbG9zLCBwb3IgYWhvcmEgKi8NCiogew0KICBib3gtc2l6aW5nOiBib3JkZXItYm94Ow0KICBmb250LXNpemU6IDEuMXJlbTsNCiAgbWFyZ2luOiAwOw0KfQ0KDQpib2R5ew0KICBkaXNwbGF5OiBmbGV4Ow0KfQ0KDQpkaXZ7DQogIGJhY2tncm91bmQtY29sb3I6IGNvcmFsOw0KICB3aWR0aDogMTIwcHg7DQogIGhlaWdodDogMTIwcHg7DQogIGZvbnQtd2VpZ2h0OiA4MDA7DQogIHBhZGRpbmc6IDhweDsNCn0NCg0KDQoNCg==%7C)

## Flexbox y CSS Grid
El display flex y grid son formas de visualización de elementos recientes y cada uno tienen sus propias características para crear interfaces de manera efectiva, a partir de un contenedor padre que dotará a los elementos hijos de superpoderes del posicionamiento.

Ambas son herramientas muy útiles en el desarrollo, especialmente para la creación de interfaces amigables al usuario y aptas para cualquier dispositivo, que a este último se lo conoce como responsive design.

### Flexbox
Flexbox consiste en el ordenamiento de elementos hijos en un solo eje, por defecto horizontalmente. El elemento padre o contenedor deberá contener la propiedad display con el valor flex. A partir de aquí, ya puedes ordenar los hijos según sea necesario.

[Ejemplo](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCjwvZGl2Pg0KDQoNCg0K%7CKiB7DQogIG1hcmdpbjogMDsNCiAgcGFkZGluZzogMDsNCiAgYm94LXNpemluZzogYm9yZGVyLWJveDsNCn0NCg0KLyogUXVpdGEgbG9zIGNvbWVudGFyaW9zIHkgb2JzZXJ2YSBlbCBjb21wb3J0YW1pZW50byAqLw0KLmNvbnRhaW5lcnsNCiAgLyogZGlzcGxheTogZmxleDsgKi8NCn0NCg0KLmNvbnRhaW5lciBkaXYgew0KICB3aWR0aDogMTAwcHg7IA0KICBoZWlnaHQ6IDEwMHB4Ow0KfQ0KDQouY29udGFpbmVyIGRpdjpudGgtY2hpbGQoMm4pew0KICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOw0KfQ0KDQouY29udGFpbmVyIGRpdjpudGgtY2hpbGQoMm4rMSl7DQogIGJhY2tncm91bmQtY29sb3I6IGJyb3duOw0KfQ0KDQoNCg0KDQoNCg0K%7C)

### Grid
Grid consiste en el ordenamiento de elementos hijos en dos ejes, como si fuera una cuadrícula o tabla. El elemento padre o contenedor deberá contener la propiedad display con el valor grid y debes definir las medidas de las columnas y de las filas. A partir de aquí, ya puedes ordenar los hijos según sea necesario.

[Ejemplo](https://codi.link/PGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCiAgPGRpdj48L2Rpdj4NCjwvZGl2Pg0KDQoNCg0K%7CKiB7DQogIG1hcmdpbjogMDsNCiAgcGFkZGluZzogMDsNCiAgYm94LXNpemluZzogYm9yZGVyLWJveDsNCn0NCg0KLyogUXVpdGEgbG9zIGNvbWVudGFyaW9zIHkgb2JzZXJ2YSBlbCBjb21wb3J0YW1pZW50byAqLw0KLmNvbnRhaW5lcnsNCi8qICAgDQogIGRpc3BsYXk6IGdyaWQ7DQogIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHggMTAwcHg7DQogIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMTAwcHggMTAwcHg7IA0KICAqLw0KDQoNCn0NCg0KLmNvbnRhaW5lciBkaXYgew0KICB3aWR0aDogMTAwcHg7IA0KICBoZWlnaHQ6IDEwMHB4Ow0KfQ0KDQouY29udGFpbmVyIGRpdjpudGgtY2hpbGQoMm4pew0KICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOw0KfQ0KDQouY29udGFpbmVyIGRpdjpudGgtY2hpbGQoMm4rMSl7DQogIGJhY2tncm91bmQtY29sb3I6IGJyb3duOw0KfQ0KDQoNCg0KDQoNCg0K%7C)

- [Flexbox vs CSS Grid: ¿Cuál es la diferencia?](https://platzi.com/blog/flexbox-vs-css-grid-cual-es-la-diferencia/)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Modelo de caja
El modelo de caja se compone de cuatro elementos: margin, border, padding y contenido.
Si entras a las herramientas de desarrollador de tu navegador y señalas un elemento HTML, en la sección de estilos te aparecerá una vista parecida a la anterior imagen, este es el modelo de caja del elemento señalado.

[Imagen](https://www.eniun.com/modelo-cajas-css-margenes-relleno-bordes/)

### Content
El contenido del elemento, como su nombre lo indica, es todo lo que está dentro del elemento. Este tiene medidas establecidas por las propiedades width y height, que representan la anchura y la altura, respectivamente. Si imaginamos una caja, este valor sería todo lo que decidas colocar dentro.

### Border
El border consiste en el perfil o borde de un elemento HTML. Si imaginamos una caja, sería la caja en sí. Para definir un borde es necesario utilizar las siguientes tres propiedades:

- border-color: establece el color del borde.
- border-style: establece el estilo propio del borde, estos pueden ser: none (sin borde), dotted (puntos), dashed (guiones), solid (continuo), double (doble continuo), groove (recuadro).
- border-width: estable la anchura del borde.

También se puede establecer los tres valores en una sola propiedad border donde no importa el orden.

[Ejemplo](https://codi.link/PGRpdiBjbGFzcz0ibm9uZSI+U2luIGJvcmRlPC9kaXY+DQo8ZGl2IGNsYXNzPSJkb3R0ZWQiPkNvbiBwdW50b3M8L2Rpdj4NCjxkaXYgY2xhc3M9ImRhc2hlZCI+Q29uIGd1aW9uZXM8L2Rpdj4NCjxkaXYgY2xhc3M9InNvbGlkIj5Db250aW51bzwvZGl2Pg0KPGRpdiBjbGFzcz0iZG91YmxlIj5kb2JsZSBjb250aW51bzwvZGl2Pg0KPGRpdiBjbGFzcz0iZ3Jvb3ZlIj5Db24gcmVjdWFkcm88L2Rpdj4NCg0KDQo=%7CZGl2ew0KICB3aWR0aDogMTIwcHg7DQogIGhlaWdodDogMTIwcHg7DQp9DQoNCi5ub25lew0KICAvKiBWYWxvciBwb3IgZGVmZWN0byBkZSBkaXYgKi8NCiAgYm9yZGVyOiAzcHggYmxhY2sgbm9uZTsNCn0NCg0KLmRvdHRlZHsNCiAgYm9yZGVyOiAzcHggYmxhY2sgZG90dGVkOw0KfQ0KDQouZGFzaGVkew0KICBib3JkZXI6IDNweCBibGFjayBkYXNoZWQ7DQp9DQoNCi5zb2xpZHsNCiAgYm9yZGVyOiAzcHggYmxhY2sgc29saWQ7DQp9DQoNCi5kb3VibGV7DQogIGJvcmRlcjogM3B4IGJsYWNrIGRvdWJsZTsNCn0NCg0KLmdyb292ZXsNCiAgYm9yZGVyOiA1cHggZ3JlZW55ZWxsb3cgZ3Jvb3ZlOw0KfQ0KDQoNCg0KLyogSWdub3JhIGVzdG9zIGVzdGlsb3MsIHBvciBhaG9yYSAqLw0KKiB7DQogIGZvbnQtc2l6ZTogMS4xcmVtOw0KICBtYXJnaW46IDA7DQp9DQoNCmJvZHl7DQogIGRpc3BsYXk6IGZsZXg7DQogIGZsZXgtd3JhcDogd3JhcDsNCiAgZ2FwOiAxLjVyZW07DQogIG1hcmdpbjogMjBweDsNCiAgZm9udC13ZWlnaHQ6IDgwMDsNCn0NCg0KDQoNCg==%7C)

```css
div {
    border: [color] [style] [width];
}

div {
    border-color: red;
    border-style: solid;
    border-width: 1px;
}
```

También estableciendo de manera individual los valores de cada posición:

```css
div {
    border-top: 5px solid blue;
    border-bottom: 5px solid red;
    border-left: 5px solid black
    border-right: 5px solid yellow;
}
```

### Padding
El padding consiste en el espacio entre el borde y el contenido del elemento HTML. Si imaginamos una caja, este valor sería el espacio entre la caja y lo que deseas guardar.

[Ejemplo](https://codi.link/PGRpdj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0aTwvZGl2Pg0KDQoNCg==%7CLyogUXVpdGEgbG9zIGNvbWVudGFyaW9zIHkgb2JzZXJ2YSBlbCBjb21wb3J0YW1pZW50byAqLw0KZGl2ew0KICB3aWR0aDogMTIwcHg7DQogIGhlaWdodDogMTIwcHg7DQogIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93Ow0KICBib3JkZXI6IHNvbGlkIDFweCBibGFjazsNCiAgLyogcGFkZGluZzogMzBweDsgKi8NCn0NCg0KDQoNCi8qIElnbm9yYSBlc3RvcyBlc3RpbG9zLCBwb3IgYWhvcmEgKi8NCiogew0KICBmb250LXNpemU6IDEuMXJlbTsNCiAgbWFyZ2luOiAwLjVyZW07DQp9DQo=%7C)

Puedes establecer el padding en cada posicion en una sola linea de las siguientes maneras: 

- padding: [arriba] [derecha] [abajo] [izquierda], siguiendo el sentido horario.
- padding: [arriba] [abajo] [derecha e izquierda], siguiendo el eje principal.
- padding: [arriba y abajo] [derecha e izquierda], siguiendo los ejes del elemento.

También estableciendo de manera individual los valores de cada posición:

```css
div {
    padding-top: 10px;
    padding-bottom: 15px;
    padding-left: 20px;
    padding-right: 10px;
}
```

### Margin
El margin consiste en el espacio entre el borde y otro elemento HTML. Si imaginamos una caja, es el espacio entre tu caja y otra caja

```css
div {
    margin-top: 10px;
    margin-bottom: 15px;
    margin-left: 20px;
    margin-right: 10px;
}
```

### Valores por defecto
Por defecto, el navegador establece valores iniciales a algunas propiedades CSS, este es el caso de margin y padding. Una buena práctica es utilizar el selector universal para restablecer estos valores a 0, para que no surjan errores inesperados.

### Propiedades y valores de CSS
[Documentacion](https://cssreference.io/)

## Unidades de medida
Las unidades de medida establecen una longitud para un determinado elemento o tipografía. Existen dos tipos de medidas: absolutas y relativas.

### Medidas absolutas
Las medidas absolutas son valores fijos, por lo que la medida no cambiará. La unidad absoluta más utilizada son los píxeles px, las demás son muy poco utilizadas, pero es bueno que las conozcas.

### Medidas relativas
Las medidas relativas son valores variables, por lo que la medida depende de un valor externo. Se debe tener en cuidado con estas porque un pequeño cambio puede desencadenar tamaños muy elevados.

- em: el elemento que lo contiene
- rem: el elemento raiz
- vw: 1% del ancho de la pantalla
- vh: 1% de la altura de la pantalla

La medida em depende del elemento que lo contiene, es decir, si un elemento tiene font-size de 20px, el valor de em es igual a 20px, el valor de 2em será de 40px y así sucesivamente.

La medida rem depende del elemento raíz, el valor del font-size del elemento raíz es de 16px, por lo tanto, el valor de 2rem es igual a 32px, y así sucesivamente.

- [Ejemplo em](https://codi.link/PGRpdiBjbGFzcz0ibml2ZWwxIj4NCiAgPHA+TGV0cmEgZGUgMjBweDwvcD4NCiAgPGRpdiBjbGFzcz0ibml2ZWwyIj4NCiAgICA8cD5MZXRyYSBkZSAyMHB4PC9wPg0KICAgIDxkaXYgY2xhc3M9Im5pdmVsMyI+DQogICAgICA8cD5MZXRyYSBkZSA0MHB4PC9wPg0KICAgICAgPGRpdiBjbGFzcz0ibml2ZWw0Ij4NCiAgICAgICAgPHA+TGV0cmEgZGUgODBweDwvcD4NCiAgICAgIDwvZGl2Pg0KICAgIDwvZGl2Pg0KICA8L2Rpdj4NCjwvZGl2Pg==%7CKiB7DQogIG1hcmdpbjogMDsNCn0NCg0KLm5pdmVsMSB7DQogIC8qIFB1ZWRlcyBjYW1iaWFyIGVzdGUgdmFsb3IgKi8NCiAgZm9udC1zaXplOiAyMHB4Ow0KfQ0KDQoubml2ZWwyIHsNCiAgLyogdGFtYcOxbyA9IDIwcHggKiAxID0gMjBweCAqLw0KICBmb250LXNpemU6IDFlbTsNCn0NCg0KLm5pdmVsMyB7DQogIC8qIHRhbWHDsW8gPSAyMHB4ICogMiA9IDQwcHggKi8NCiAgZm9udC1zaXplOiAyZW07DQp9DQoNCi5uaXZlbDQgew0KICAvKiB0YW1hw7FvID0gNDBweCAqIDIgPSA4MHB4ICovDQogIGZvbnQtc2l6ZTogMmVtOw0KfQ0KDQoNCg==%7C)
- [Ejemplo rem](https://codi.link/PGRpdiBjbGFzcz0ibml2ZWwxIj4NCiAgPHA+TGV0cmEgZGUgMjBweDwvcD4NCiAgPGRpdiBjbGFzcz0ibml2ZWwyIj4NCiAgICA8cD5MZXRyYSBkZSAxNnB4PC9wPg0KICAgIDxkaXYgY2xhc3M9Im5pdmVsMyI+DQogICAgICA8cD5MZXRyYSBkZSAzMnB4PC9wPg0KICAgICAgPGRpdiBjbGFzcz0ibml2ZWw0Ij4NCiAgICAgICAgPHA+TGV0cmEgZGUgMzJweDwvcD4NCiAgICAgIDwvZGl2Pg0KICAgIDwvZGl2Pg0KICA8L2Rpdj4NCjwvZGl2Pg==%7CLm5pdmVsMSB7DQogIC8qIFB1ZWRlcyBjYW1iaWFyIGVzdGUgdmFsb3IgKi8NCiAgZm9udC1zaXplOiAyMHB4Ow0KfQ0KDQoubml2ZWwyIHsNCiAgLyogdGFtYcOxbyA9IDE2cHggKiAxID0gMTZweCAqLw0KICBmb250LXNpemU6IDFyZW07DQp9DQoNCi5uaXZlbDMgew0KICAvKiB0YW1hw7FvID0gMTZweCAqIDIgPSAzMnB4ICovDQogIGZvbnQtc2l6ZTogMnJlbTsNCn0NCg0KLm5pdmVsNCB7DQogIC8qIHRhbWHDsW8gPSAxNnB4ICogMiA9IDMycHggKi8NCiAgZm9udC1zaXplOiAycmVtOw0KfQ0KDQoNCg==%7C)

### Diferencias entre porcentajes y la anchura y altura de la pantalla
Los porcentajes representan el tamaño con respecto al total del elemento padre. Si el elemento padre tiene 20px, entonces el 100% será de 20px.

Por otra parte, las medidas de anchura vw y altura vh representan el tamaño con respecto al total de la pantalla. Si el elemento tiene un tamaño de 100vw será el 100 por ciento de la pantalla.

Si un elemento tiene todo el tamaño de la pantalla, entonces solamente en ese punto la medida 100% será igual a 100vw o 100vh.

## Responsive Design
El diseño responsivo (Responsive Design) consiste en un conjunto de herramientas para que tu sitio se vea bien en varias medidas de pantalla, esto incluye imágenes, tipografía, internacionalización de la página y entre otros.

En la actualidad, la mayoría de sitios web son visitados desde un celular, por lo que asegurarse que nuestro sitio sea responsivo para cualquier dispositivo es fundamental para optimizar las ganancias.

### media queries
Las media queries son reglas CSS que establecen un comportamiento distinto o diferentes estilos en un cierto rango de la pantalla. Esto sirve para establecer el layout del sitio web para diferentes tipos de pantalla: escritorio, tablets y celulares.

Estos son dos tipos de media querie :

1. max-width / max-height: establece un rango máximo para cierto comportamiento.
2. min-width / min-height: establece un rango mínimo para cierto comportamiento.

Estos valores son parecidos a condicionales, mientras se cumpla la condición, aplica determinados estilos.

#### Estructura
La estructura de una media querie consiste en empezar con @media, seguido del tipo de la media querie estableciendo un rango, envolviendo las reglas CSS dentro de ese rango.

```css
@media (max-width: 750px){
    div {
        color: red;
    }
    p {
        background-color: red;
    }
}
```

Para observar que los cambios se estén aplicando correctamente, las herramientas de desarrollador serán de gran ayuda.

Abre las herramientas del navegador y da clic en la opción “Toggle device tool”, aquí podrás manipular la pantalla y observar en cuántos píxeles está ocurriendo determinados estilos.

Utiliza el siguiente ejemplo para visualizar cómo cambian los estilos según la longitud de la pantalla. Puedes revisar la media querie que está en el código. Aunque solo cambien el color de dos elementos, puede estar cualquier propiedad que desees, prueba con todo.

[Ejemplo](https://codi.link/PGRpdiBjbGFzcz0iY2FyZDEiPjwvZGl2Pg0KPGRpdiBjbGFzcz0iY2FyZDIiPjwvZGl2Pg0KDQo=%7CKiB7DQogIG1hcmdpbjogMDsNCiAgcGFkZGluZzogMDsNCiAgYm94LXNpemluZzogYm9yZGVyLWJveDsNCn0NCg0KYm9keSB7DQogIHdpZHRoOiAxMDB2dzsNCiAgaGVpZ2h0OiAxMDB2aDsNCn0NCg0KLmNhcmQxew0KICB3aWR0aDogMTAwJTsNCiAgaGVpZ2h0OiAyNSU7DQogIGJhY2tncm91bmQtY29sb3I6IGJyb3duOw0KfQ0KDQouY2FyZDIgew0KICB3aWR0aDogNTAlOw0KICBoZWlnaHQ6IDc1JTsNCiAgYmFja2dyb3VuZC1jb2xvcjogY2hhcnRyZXVzZTsNCn0NCg0KQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KXsNCiAgLmNhcmQxIHsNCiAgICAgIGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7DQogIH0NCg0KICAuY2FyZDIgew0KICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duOw0KICB9DQp9DQoNCg==%7C)

## Fundamentos de 
### Que es React
React es una librería de JavaScript para construir interfaces de usuario. Fue desarrollada por Facebook. 

### Que es un componente
Un componente es una pieza de código que puede ser reutilizada. En React, los componentes son funciones que reciben parámetros llamados props y retornan elementos de React (normalmente JSX).

### Que es JSX
JSX es una extensión de JavaScript que permite escribir código HTML dentro de JavaScript. Esto nos permite escribir código más legible y expresivo. 

### Que es Vite

Vite es un nuevo compilador de código abierto que sirve para crear aplicaciones web modernas con React, Vue, Svelte, Preact y TypeScript. Vite se centra en el tiempo de compilación y el tiempo de ejecución rápido. No es un marco completo, sino más bien un compilador de desarrollo que aprovecha las importaciones nativas de ES Module para lograr un tiempo de compilación rápido y un servidor de desarrollo instantáneo con recarga rápida.

### Que es TailwindCSS

Tailwind CSS es un framework CSS de utilidad de bajo nivel que le permite crear rápidamente diseños personalizados y receptivos para sitios web. Tailwind CSS es un framework CSS de utilidad de bajo nivel que le permite crear rápidamente diseños personalizados y receptivos para sitios web.

### Crear un proyecto con Vite

Para crear un proyecto con Vite, debemos tener instalado Node.js y npm. Luego, abrimos una terminal y ejecutamos el siguiente comando:

```bash
npm create vite@latest
```

### Instalacion de TailwindCSS

[https://tailwindcss.com/docs/guides/vite](Documentacion oficial)

_Nota:_ Para empezar de cero un proyecto puedes eliminar la carpeta assets, limpiar el archivo App.css y el index.css y el App.jsx, debe quedar asi.

```jsx
import "./App.css";

function App() {
  return (
    <div className="bg-red-100">
      <h1>Hola Mundo</h1>
    </div>
  );
}

export default App;
```


### Google Fonts y TailwindCSS
Para utilizar Google Fonts con TailwindCSS, debemos agregar la fuente en el archivo index.css. Luego, en el archivo tailwind.config.js, debemos agregar la fuente en la propiedad fontFamily.

```css
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
}
```

```js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Quicksand','sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

### Configuracion de colores en TailwindCSS
Para configurar los colores en TailwindCSS, debemos agregarlos en el archivo tailwind.config.js, en la propiedad colors.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#386641',
        secondary: '#6A994E',
        tertiary: '#A7C957',
        quartiary: '#F2E8Cf',
        quintenary: '#BC4749',
        input: '#F7F7F7'
      },
      fontFamily:{
        primary:['Quicksand','sans-serif']
      }
    },
    
  },
  plugins: [],
}
```

1. [Colors](https://coolors.co/)

### Dependencias
```bash
npm install mqtt --save
npm install react-icons --save
```

### Componentes para la aplicacion
1. Componente Layaout
```jsx
const Layout = ({ children }) => {
    return (
        <div className='bg-primary w-full h-screen flex flex-col items-center justify-center'>
            { children }
        </div>
    )
}

export default Layout
```
2. Utilizar el componete Layout
```jsx
import Layout from '../Components/Layout'

const App = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Layout>
  );
};

export default App;
```

3. Componente Card
```jsx
import { PiPlant } from "react-icons/pi";
import { WiThermometer } from "react-icons/wi";

const Card = () => {
  return (
    <div className="bg-secondary w-2/5 p-8 flex flex-col shadow-lg rounded-lg">
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">Sensores</p>
        <PiPlant className="text-green-900 w-8 h-8" />
      </div>
      <div className="w-full flex justify-between p-1 mt-2">
        <div className="flex items-center">
          <WiThermometer className="w-8 h-8 text-green-900" />
          <p className="ml-2 text-lg">Temperatura</p>
        </div>
        <div className="flex">
          <p className="text-lg">
            34 °C
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
```

4. Modificar app
```jsx
import Layout from '../Components/Layout'
import Card from '../Components/Card'

const App = () => {
  return (
    <Layout>
      <Card />
    </Layout>
  );
};

export default App;
```

5. Componente SensorData
```jsx
const SensorData = ({ parametro, icon: Icon, iconColor, unidades, valor }) => {
  return (
    <div className="w-full flex justify-between p-1 mt-2">
      <div className="flex items-center">
        <Icon className={`w-8 h-8 ${iconColor}`} />   
        <p className="ml-2 text-lg">{ parametro }</p>
      </div>
      <div className="flex">
        <p className="text-lg">{valor} {unidades }</p>
      </div>
    </div>
  );
};

export default SensorData;
```

6. Modificar Card
```jsx
import { PiPlant } from "react-icons/pi";
import { WiThermometer } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";
import { MdCo2 } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

import SensorData from "../SensorData";

const Card = () => {
  return (
    <div className="bg-secondary w-2/5 p-8 flex flex-col shadow-lg rounded-lg">
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">Sensores</p>
        <PiPlant className="text-green-900 w-8 h-8" />
      </div>
      <SensorData
        parametro="Temperatura"
        icon={WiThermometer}
        iconColor="text-green-900"
        unidades="°C"
        valor="25"
      />
      <SensorData
        parametro={"Humedad"}
        icon={WiHumidity}
        iconColor="text-blue-900"
        unidades="%"
        valor="25"
      />
      <SensorData
        parametro="Dioxido de Carbono"
        icon={MdCo2}
        iconColor="text-red-900"
        unidades="ppm"
        valor="25"
      />
      <SensorData
        parametro="Vapor de agua"
        icon={WiRaindrop}
        iconColor="text-blue-900"
        unidades="%"
        valor="25"
      />
    </div>
  );
};

export default Card;
```

7. Incluir Boton
```jsx
import { PiPlant } from "react-icons/pi";
....

const Card = () => {
  return (
    <div className="bg-secondary w-2/5 p-8 flex flex-col shadow-lg rounded-lg">
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">Sensores</p>
        <PiPlant className="text-green-900 w-8 h-8" />
      </div>
      <SensorData
        parametro="Temperatura"
        icon={WiThermometer}
        iconColor="text-green-900"
        unidades="°C"
        valor="25"
      />
        ....
      <div className="w-full flex justify-end mt-2">
        <button className="p-2 border-2 border-tertiary rounded-lg">Actuador</button>
      </div>
    </div>
  );
};

export default Card;
```

### Comunicacion MQTT y contexto de la aplicacion
1. Crear archivo AppIotContext/index.jsx
2. Crear archivo AppIotContext/useMqtt.js
```js
import { useState, useEffect } from "react";
import mqtt from "mqtt";

const useMqtt = (topic) => {
  const [client, setClient] = useState(null);
  const [message, setMessage] = useState(null);

  const mqttBrokerUrl = "ws://localhost:8083/mqtt";

  const mqttConnect = () => {
    setClient(mqtt.connect(mqttBrokerUrl));
  };

  useEffect(() => {
    if (client) {
      client.on("connect", () => {
        client.subscribe(topic);
        client.subscribe("smartgrow/actuadores");
        console.log("connection successful");
      });

      client.on("error", (err) => {
        console.error("Connection error: ", err);
        client.end();
      });

      client.on("message", (topic, message) => {
        const data = { topic, message: message.toString() };
        setMessage(data);
        console.log(`received message: ${message} from topic: ${topic}`);
      });
    }
  }, [client]);

  const mqttPublish = (context) => {
    if (client) {
      const { topic, qos, payload } = context;
      client.publish(topic, payload, qos, (error) => {
        if (error) {
          console.log("Publish error: ", error);
        } else {
          console.log("Published successfully");
        }
      });
    }
  };

  return { message, mqttConnect, mqttPublish};
};

export { useMqtt };
```

3. Modificar AppIotContext/index.jsx
```jsx
import { createContext, useState, useEffect } from "react";
import { useMqtt } from "./useMqtt";

const AppIotContext = createContext();

function AppIotProvider({ children }) {
  const { message, mqttConnect, mqttPublish } = useMqtt("smartgrow/sensores");

  const [temperatura, setTemperatura] = useState(null);
  const [humedad, setHumedad] = useState(null);
  const [co2, setCo2] = useState(null);
  const [vaporAgua, setVaporAgua] = useState(null);

  const handleMqttMessage = (data) => {
    const topic = data.topic;
    if (topic === "smartgrow/sensores") {
      data = JSON.parse(data.message);
      setTemperatura(data.temperatura);
      setHumedad(data.humedad);
      setCo2(data.co2);
      setVaporAgua(data.VPD);
    } else if (topic === "smartgrow/actuadores") {
      console.log(data.message);
    }
  };

  useEffect(() => {
    mqttConnect();
  },[])

  useEffect(() => {
    if (message !== null) {
      handleMqttMessage(message);
    }
  },[message])

  return (
    <AppIotContext.Provider
      value={{
        temperatura,
        humedad,
        co2,
        vaporAgua,
        mqttPublish,
      }}
    >
      {children}
    </AppIotContext.Provider>
  );
}

export { AppIotContext, AppIotProvider };
```

4. Modificar App
```jsx
import Layout from '../Components/Layout'
import Card from '../Components/Card'
import { AppIotProvider } from '../AppIotContext';

const App = () => {
  return (
    <AppIotProvider>
      <Layout>
        <Card />
      </Layout>
    </AppIotProvider>
  );
};

export default App;
```

5. Modificar Card
```jsx
import React, { useContext } from "react";
import { PiPlant } from "react-icons/pi";
import { WiThermometer } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";
import { MdCo2 } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";

import { AppIotContext } from "../../AppIotContext";
import SensorData from "../SensorData";

const Card = () => {
  const { temperatura, humedad, co2, vaporAgua, mqttPublish } =
    useContext(AppIotContext);

  const context = {
      topic: "smartgrow/actuadores",
      qos: 0,
      payload: "Encender ventilador",
    };

  return (
    <div className="bg-secondary w-2/5 p-8 flex flex-col shadow-lg rounded-lg">
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">Sensores</p>
        <PiPlant className="text-green-900 w-8 h-8" />
      </div>
      <SensorData
        parametro="Temperatura"
        icon={WiThermometer}
        iconColor="text-green-900"
        unidades="°C"
        valor={temperatura != null ? temperatura : "Cargando... "}
      />
      <SensorData
        parametro={"Humedad"}
        icon={WiHumidity}
        iconColor="text-blue-900"
        unidades="%"
        valor={humedad != null ? humedad : "Cargando... "}
      />
      <SensorData
        parametro="Dioxido de Carbono"
        icon={MdCo2}
        iconColor="text-red-900"
        unidades="ppm"
        valor={co2 != null ? co2 : "Cargando... "}
      />
      <SensorData
        parametro="Vapor de agua"
        icon={WiRaindrop}
        iconColor="text-blue-900"
        unidades="%"
        valor={vaporAgua != null ? vaporAgua : "Cargando..."}
      />
      <div className="w-full flex justify-end mt-2">
        <button className="p-2 border-2 border-tertiary rounded-lg hover:bg-tertiary hover:text-white" onClick={()=>{
          mqttPublish(context)
        }}>
          Actuador
        </button>
      </div>
    </div>
  );
};

export default Card;
```

[Repositorio de GitHub del proyecto](https://github.com/santiagoSuarez219/MqttFrontExample)





































