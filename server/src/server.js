import connectDB from './config/database.js';
import app from './index.js';
const port = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectDB(); 
    app.listen(port, () => {
      const baseUrl = process.env.NODE_ENV === 'production'
        ? `${process.env.BASE_URL_PRODUCTION}`
        : `http://localhost:${port}`;
      console.log(`Server running at ${baseUrl}`);
    });
    
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
}

startServer();