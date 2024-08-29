# Backend para Menú Online

Este proyecto es el backend para un sistema de menú online. Permite gestionar productos, usuarios, etc.

## Tecnologías Utilizadas

- **Node.js**: Plataforma para ejecutar código JavaScript en el servidor.
- **Express.js**: Framework para crear aplicaciones web y APIs en Node.js.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar los datos.
- **Mongoose**: ODM para manejar la base de datos MongoDB desde Node.js.
- **dotenv**: Manejo de variables de entorno.
- **Nodemon**: Herramienta para desarrollo que reinicia automáticamente el servidor al detectar cambios en el código.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/0800WEB/Menu-online.git
   cd Menu-online/backend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno: (falta implementar)
   Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:
   ```plaintext
   DB_URI=mongodb://localhost:27017/nombre_de_tu_base_de_datos
   ```

## Ejecución

Para iniciar el servidor en modo de desarrollo, ejecuta:
```bash
npm start
```

Esto iniciará el servidor en `http://localhost:3000`. (modificar segun sea necesario)

## Estructura de Rutas (panteamiento)

### Rutas para Productos
- **GET** `/products`: Obtiene todos los productos.
- **POST** `/products`: Crea un nuevo producto.
- **PUT** `/products/:id`: Actualiza un producto existente.
- **DELETE** `/products/:id`: Elimina un producto.

### Rutas para Registro de usuarios
- **POST** `/registro_usuario`: Crea un nuevo usuario.
- **GET** `/registro_usuario`: Obtiene todos los registros de usuarios.
- **GET** `/registro_usuario/:id`: Obtiene un usuario específico.
- **DELETE** `/registro_usuario/:id`: Elimina un usuario especifico.

## Base de Datos

La base de datos utilizada es MongoDB. El esquema básico incluye las siguientes colecciones:

- **products**: Contiene los productos disponibles en el menú.
- **registro_usuarios**: Registra los usuarios.

## Licencia

Este proyecto está bajo la Licencia MIT. Mira el archivo [LICENSE](LICENSE) para más detalles.
