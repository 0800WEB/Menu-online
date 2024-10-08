
# Backend

## Tecnologías Utilizadas

- **Node.js v20+**: Plataforma para ejecutar código JavaScript en el servidor.
- **Express.js**: Framework para crear aplicaciones web y APIs en Node.js.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar los datos.
- **Mongoose**: ODM para manejar la base de datos MongoDB desde Node.js.
- **bcrypt**: Biblioteca para el cifrado de contraseñas, proporcionando seguridad en el manejo de credenciales.
- **cors**: Middleware para habilitar el intercambio de recursos entre dominios, permitiendo el acceso a la API desde diferentes orígenes.
- **google-auth-library**: Biblioteca que facilita la autenticación y autorización con los servicios de Google, comúnmente utilizada para la autenticación con OAuth 2.0.
- **jsonwebtoken**: Biblioteca para generar y verificar tokens JWT (JSON Web Tokens), utilizada para la autenticación y autorización de usuarios.
- **openai**: Biblioteca que permite la integración con la API de OpenAI para utilizar modelos de inteligencia artificial, como ChatGPT.

## Instalación

1. Instala las dependencias:
   ```bash
   cd server
   npm install
   ```

2. Configura las variables de entorno:
   - **Pedir las variables de entorno al administrador de la organización**

## Ejecución

Para iniciar el servidor en modo de desarrollo, ejecuta:
```bash
npm run dev
```

Esto iniciará el servidor.

## Estructura de Rutas

### Rutas para Categorías
- **POST** `/api/categories`: Crea una nueva categoría.
- **GET** `/api/categories`: Obtiene todas las categorías.
- **GET** `/api/categories/:id`: Obtiene una categoría específica.
- **PUT** `/api/categories/:id`: Actualiza una categoría existente.
- **DELETE** `/api/categories/:id`: Elimina una categoría.

### Ruta para el Chat Bot
- **POST** `/api/chatbot`: Crear y enviar un nuevo prompt.

### Rutas para Productos
- **GET** `/api/products`: Obtiene todos los productos.
- **POST** `/api/products`: Crea un nuevo producto.
- **GET** `/api/products/:id`: Obtiene un producto específico.
- **PUT** `/api/products/:id`: Actualiza un producto existente.
- **DELETE** `/api/products/:id`: Elimina un producto.

### Rutas para Reseñas
- **POST** `/api/reviews`: Crea una nueva reseña.
- **GET** `/api/reviews`: Obtiene todas las reseñas.
- **GET** `/api/reviews/:id`: Obtiene una reseña específica.
- **PUT** `/api/reviews/:id`: Actualiza una reseña existente.
- **DELETE** `/api/reviews/:id`: Elimina una reseña.

### Rutas para Usuarios
- **POST** `/api/users`: Crea un nuevo usuario.
- **GET** `/api/users`: Obtiene todos los usuarios.
- **GET** `/api/users/:id`: Obtiene un usuario específico.
- **PUT** `/api/users/:id`: Actualiza un usuario existente.
- **DELETE** `/api/users/:id`: Elimina un usuario.

## Base de Datos

La base de datos utilizada es MongoDB. El esquema básico incluye las siguientes colecciones:

- **products**: Contiene los productos disponibles en el menú.
- **users**: Registra los usuarios.
- **categories**: Registra las categorías del menú.
- **reviews**: Registra las reseñas de los productos.

## Schemas de la base de datos

### `categories`:
   - `id`: { type: Number, required: true, unique: true }
   - `name`: { type: String, required: true }

### `products`:
   - `id`: { type: Number, required: true, unique: true }
   - `name`: { type: String, required: true }
   - `image`: { type: String }
   - `array_images`: { type: [String] }
   - `description`: { type: String }
   - `price`: { type: Number, required: true }
   - `diet_type`: { type: String, enum: ['celiac', 'carnivore', 'vegetarian', 'vegan', 'no_diet_type'], default: 'no_diet_type' }
   - `category_id`: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }

### `reviews`:
   - `id`: { type: Number, required: true, unique: true }
   - `product_id`: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }
   - `user_id`: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
   - `comment`: { type: String, required: true }
   - `qualification`: { type: Number, required: true }

### `users`:
   - `name`: { type: String, required: true }
   - `email`: { type: String, required: true, unique: true }
   - `password`: { type: String }
   - `notification`: { type: Boolean, default: false }
   - `daily_notification`: { type: Boolean, default: false }
   - `review_quality`: { type: Number, default: 0 }
   - `user_type`: { type: String, enum: ['client', 'admin', 'owner'], required: true }
   - `image`: { type: String, default: 'no image' }
   - `googleId`: { type: String, unique: true, sparse: true }
   - `provider`: { type: String, enum: ['local', 'google'], default: 'local' }

## Postman

Puedes encontrar la colección de Postman para probar las APIs en el siguiente enlace:
```plaintext
https://www.postman.com/tobiasguerreroteam/workspace/menu-online-back
```

## Licencia

Este proyecto está bajo la Licencia MIT. Mira el archivo [LICENSE](LICENSE) para más detalles.

