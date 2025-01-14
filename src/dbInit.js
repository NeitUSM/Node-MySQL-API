import fs from 'fs';
import { createConnection } from 'mysql2/promise';
import {
    DB_HOST,
    DB_PASSWORD,
    DB_USER
} from './config.js'

async function initializeDatabase() {
    try {
        // Leer el archivo SQL
        const sql = fs.readFileSync('./db/database.sql', 'utf8');
        
        // Dividir las consultas en comandos individuales
        const queries = sql.split(';').filter(query => query.trim()); // Filtra consultas vacías

        // Crear la conexión a MySQL
        const connection = await createConnection({
            host: DB_HOST, // Cambia según tu configuración
            user: DB_USER,      // Usuario de la base de datos
            password: DB_PASSWORD, // Contraseña del usuario
        });

        console.log('Conectado a MySQL.');

        // Ejecutar cada comando de manera individual
        for (const query of queries) {
            console.log(`Ejecutando: ${query}`);
            await connection.query(query);
        }

        console.log('Base de datos inicializada.');
        await connection.end();
    } catch (error) {
        console.error('Error al inicializar la base de datos:', error);
    }
}



export default initializeDatabase;