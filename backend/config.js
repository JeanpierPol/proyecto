import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, '.env')
});

export default {
    DB_HOST: process.env.DB_HOST || 'localhost',
    PORT: process.env.PORT || 3000,
    DB_USER: process.env.DB_USER || 'example_user',
    DB_PASS: process.env.DB_PASS || 'example_pass',
    DB_NAME: process.env.DB_NAME || 'example_name',
    SECRET_JWT_KEY: process.env.SECRET_JWT_KEY
};