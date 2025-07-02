import mongoose from 'mongoose';

export const connectDB = async (mongodbUri: string) => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(mongodbUri);
    console.log('MongoDB connected successfully.');
    return true;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return false;
  }
};
