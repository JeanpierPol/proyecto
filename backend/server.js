import http from 'http';

import connectDB from './src/config/database.js';
import config from './config.js';
import app from './src/app.js';

const server = http.createServer(app);
const { PORT } = config;

const startServer = async () => {
    try {
        await connectDB();

        server.listen(PORT, () => {
            console.log(`Servidor listo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error al iniciar el servidor:", error);
        process.exit(1);
    }
};

startServer();
