import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDB connected successfully.');
    return true;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return false;
  }
};

export default connectDB;
