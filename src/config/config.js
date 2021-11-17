import dotenv from 'dotenv'
dotenv.config();

const CONTEXT = process.env.CONTEXT || 'development';

const configContext = {
  development: {
    port: process.env.PORT || 4000,
    mongodbUri: process.env.MONGODB_CNN || 'mongodb://localhost:27017/fpay',
  }
}

export const config = configContext[CONTEXT];