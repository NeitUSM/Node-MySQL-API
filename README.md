# Proyecto Backend con conexión a contenedor de Base de Datos

## Descripción
Este es un proyecto backend realizado para probar conexión a un contenedor MySQL en entornos dev y de redes internas de Docker. Adicionalmente, tiene implementado cors, que permite la comunicación con el frontend y el consumo de los endpoints. Para abarcarlo, está el repositorio **Frontend-Angular-19** con lo necesario.

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
1. Abrir el directorio raíz en la terminal
2. Crear una nueva red en docker
3. Correr la imagen de mysql desde docker-hub con el comando **sudo docker run --rm -p 3306:3306 -d --network node-angular-mysql --name mysql -e MYSQL_ROOT_PASSWORD=neitanadmin -v mysql_data:/var/lib/mysql mysql**
4. Construir la imagen del backend con **sudo docker build -t nodejs-app .**
5. Correr el contenedor

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

<h4> Proyecto realizado por Natán Apablaza </h4> 
