import app from './app.js';
import { PORT } from './config.js';
import initializeDatabase from './dbInit.js';

// Inicializar base de datos y arrancar el servidor
async function startServer() {
    await initializeDatabase(); // Inicializar base de datos
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

startServer();