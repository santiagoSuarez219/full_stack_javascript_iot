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




