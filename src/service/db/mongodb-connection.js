import mongoose from 'mongoose'
import { config } from '../../config/config';

export const dbConnection = async() => {
  try {
    await mongoose.connect( config.mongodbUri, {
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
  
    console.log('Data base is online');
  } catch (error) {
    console.log(error);
    throw new Error('Error init db');
  }
}