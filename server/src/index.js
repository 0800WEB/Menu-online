import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js' ;
import categoryRoutes from './routes/categoryRoutes.js' ;
import chatRoutes from './routes/chatRoutes.js' ;
import productRoutes from './routes/productRoutes.js' ;
import reviewRoutes from './routes/reviewRoutes.js' ;
import userRoutes from './routes/userRoutes.js' ;

// Initializations
const app = express();

app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/chatbot', chatRoutes);
app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/users', userRoutes);

export default app; 