# Proyecto Backend con conexión a contenedor de Base de Datos

## Descripción
Este es un proyecto backend de ExpressJS realizado para probar conexión a un contenedor MySQL en entornos dev y de redes internas de Docker. Adicionalmente, tiene implementado cors, que permite la comunicación con el frontend y el consumo de los endpoints. Para abarcar la interfaz visual, está el repositorio **Frontend-Angular-19** con las conexiones necesarias hacia el backend.

## ¡Importante!
Para el completo funcionamiento de la aplicación web se debe realizar la instalación de las siguientes dependencias. Estas, fueron instaladas desde las páginas oficiales en Ubuntu.

### Dependencias
Las siguientes dependencias estarán asignadas con la versión con la que fue desarrollada la aplicación:
1. **Docker v.27.3.1**
2. **Node v.20**
3. **Dependencias del backend**: dependencias que son necesarias para el funcionamiento correcto del backend.
   - **Express**
   - **dotenv**
   - **cors**
   - **mysql2**

## ¿Cómo ejecutar la aplicación web?
1. Abrir el directorio raíz en la terminal
2. Ejecutar el comando **npm install** para cada dependencia del backend
3. Ejecutar el comando **npm run dev**

## ¿Cómo genero el contenedor en Docker y ejecuto la aplicación?
1. Descargar el directorio en tu maquina local con **git pull https://github.com/NeitUSM/Node-MySQL-API.git**
2. Abrir el directorio raíz en la terminal
3. Crear una nueva red en docker con **sudo docker create network node-angular-mysql**, esto creará la red en formato puente automaticamente.
4. Correr la imagen de MySQL desde docker-hub con el comando **sudo docker run --rm -p 3306:3306 -d --network node-angular-mysql --name mysql -e MYSQL_ROOT_PASSWORD=neitanadmin -v mysql_data:/var/lib/mysql mysql**
5. Construir la imagen del backend con **sudo docker build -t nodejs-app .**
6. Correr el contenedor con el comando **sudo docker run --rm -d -e PORT=3000 -p 3000:3000 --name nodejs-app --network node-angular-mysql nodejs-app**

## ¿Existe alguna forma de crear el contenedor sin descargar el repositorio?
Sí, de hecho, es una forma mucho más simple! Para ello, se debe crear la red **node-angular-mysql** y correr la imagen de MySQL. Luego, se ejecutan los siguientes comandos:
1. **sudo docker build -t nodejs-app https://github.com/NeitUSM/Node-MySQL-API.git**, esto creará automaticamente la imagen en Docker sin descargar el repositorio en la máquina local.
2. Se ejecuta el contenedor con normalidad con el mismo comando explicado anteriormente **sudo docker run --rm -d -e PORT=3000 -p 3000:3000 --name nodejs-app --network node-angular-mysql nodejs-app**

## ¿Cuáles son los endpoints y como los pruebo?
**GET: localhost:3000/api/employees** <br>
Obtiene todos los empleados que están en la base de datos en formato JSON

**GET: localhost:3000/api/employee/:id** <br>
Obtiene los datos del empleado en formato JSON según la id entregada 

**POST: localhost:3000/api/employees** <br>
Crea un nuevo empleado en la base de datos con un body formato JSON con los atributos *name* y *salary*

**PATCH: localhost:3000/api/:id** <br>
Actualiza el empleado con la id especificada con un body formato JSON con los atributos *name* y *salary*

**DELETE: localhost:3000/api/:id** <br>
Elimina el empleado de la base de datos según la id entregada

Para probar cada endpoint, se puede usar Postman o la extensión de VS Code llamada Thunderbolt que cumple la misma función.

## Tecnologías utilizadas
- **Creación de contenedores**: Docker.
- **Contenedor del proyecto**: NodeJS.
- **Contenedor de la base de datos**: MySQL:latest.
- **Proyecto realizado en**: NodeJS con el framework ExpressJS.

<h4> 🚀Proyecto realizado por Natán Apablaza 🚀</h4> 
