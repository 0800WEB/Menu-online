import connectDB from './config/database.js';
import app from './index.js';
const port = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectDB(); 
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
}

startServer();
