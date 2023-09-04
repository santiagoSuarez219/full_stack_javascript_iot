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








