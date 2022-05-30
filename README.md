# ORGANIZER
Está una aplicación creada con React usando Tailwind css, contiene formularios creados con formik y validados con Yup.
Implementando Json Sever para traer los datos para generar nuevos registros, actualizarlos y eliminarlos según corresponda.

## MODO PARA LEVANTAR EL PROYECTO

Realizar un:

    npm install 

De manera global debe de tener instalado **Json Sever** si no visita npm busca Json Sever o ve al link de debajo y sigue los pasos.
[JSON SERVER](https://www.npmjs.com/package/json-server)

Ejecuta el comando en la raíz

    json-server --watch db.json --port 4000

(Aquí especificamos que escuche el puerto 4000 para modificar el archivo db.json)

Pro último crear un .env con la variable:

VITE_API_URL = ~~~ http://localhost:4000/clientes/ ~~~

Para correr la app 

npm run dev

Todo listo y gracias por ver el proyecto 👋🏻
