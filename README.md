<img src="assets/utn_logo.svg" width="150">
<br/>
<br/>

# Trabajo Práctico Parte 2 — Node.js Express

## Objetivo

El objetivo de este trabajo práctico es que los estudiantes desarrollen una API utilizando Node.js, Express, MySQL y Sequelize, demostrando sus conocimientos en el manejo del backend, estructura de proyectos y operaciones CRUD.

Se valorará la organización del código, el uso de buenas prácticas y la implementación de funcionalidades adicionales especificadas.

<br/>

## Requisitos

### **Stack Tecnológico Obligatorio**

- Node.js
- Express.js
- MySQL
- Sequelize ORM

**Opcional:** Puede incluir otras herramientas y librerías (como Dotenv, Postman para probar la API, etc.).

<br/>

## Desarrollo del trabajo práctico

- Se deberá clonar o "forkear" este repositorio para poder modificarlo y completarlo con la resolución del proyecto.
- Una vez que su código esté listo, suba el código a un repositorio público propio y envíenos el enlace a dicho repositorio para que lo revisemos.

<br/>

## Documentación del Proyecto

### **Instalación y Configuración**

Siga estos pasos para iniciar el proyecto localmente:

1. **Clonar el Repositorio**
   ```bash
   git clone 
   cd app_cursos
Instalar Dependencias Asegúrese de tener instalado Node.js en su máquina. Luego ejecute:

- npm install

Configurar Variables de Entorno Cree un archivo .env en la raíz del proyecto y agregue las variables necesarias para la conexión con la base de datos MySQL. Por ejemplo:(no logre implementarlo, necesitas ir a la carpeta data y ahi esta todo para levantar la base de datos)

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=nombre_basededatos

Migraciones y Datos Iniciales Ejecute las migraciones para crear las tablas necesarias en la base de datos:



npm start
El servidor estará disponible en http://localhost:3000.

<br/>
Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript.
Express.js: Framework para construir aplicaciones web y APIs.
MySQL: Base de datos relacional.
Sequelize: ORM para trabajar con MySQL desde Node.js.
Bootstrap: Framework CSS para el diseño de las vistas, si aplica.
<br/>
Endpoints de la API
A continuación, se detallan los endpoints principales disponibles:

Modelo: Alumnos
Crear un alumno

POST /alumnos
Body:
{
  "nombre": "Juan",
  "apellido": "Pérez",
  "mail": "juan.perez@mail.com",
  "contraseña": "123456"
}
Actualizar un alumno por ID

PUT /alumnos/:id
Body:
{
  "nombre": "Juan Actualizado",
  "apellido": "Pérez",
  "mail": "juan.actualizado@mail.com"
}
Obtener todos los alumnos

GET /alumnos
Obtener un alumno por ID

GET /alumnos/:id
Eliminar un alumno por ID

DELETE /alumnos/:id
<br/>
Estructura de Carpetas
Organice el proyecto respetando esta estructura básica:

src/
├── controllers/
├── models/
├── routes/
├── data/
└── app.js
<br/>
Opcionales
Query Params

Implementar paginado, ordenado y filtrado en las rutas de lectura, como:
GET /alumnos?page=2&limit=5&sort=DESC&type=category1&status=active
Relaciones

Crear una relación 1:N entre los modelos (por ejemplo, Autor y Alumnos).
<br/>
Entrega
Subir el proyecto completo a un repositorio público en GitHub.
Incluir un archivo README.md con:
Descripción breve de la API.
Instrucciones para instalar y correr el proyecto.
Ejemplos de uso de los endpoints.
<br/>
Comentarios Finales
Un dicho común en el desarrollo es:

"An API is just as good as its documentation"

— Common saying in backend development

Se valorará mucho este aspecto. Puede utilizar herramientas como Swagger para documentar la API automáticamente.
