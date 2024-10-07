import mongoose from "mongoose";

const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DATABASE, MONGODB_COLLECTION } = process.env;
const MONGODB_URI = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_DATABASE}.mongodb.net/${MONGODB_COLLECTION}?retryWrites=true&w=majority`;
async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

export default connectDB;
