import mongoose from 'mongoose';
import config from '../../config.js';

const { DB_USER, DB_PASS, DB_NAME } = config;

const connectDB = async ()=>{
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.wqxuwn7.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`);
        console.log(`Conexión a la base de datos ${DB_NAME} establecida correctamente`);
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;
