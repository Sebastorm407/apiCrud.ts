import mysql from 'mysql2/promise';
import keys from './keys'; 

const pool = mysql.createPool(keys.database);

(async () => {
    try {
        const connection = await pool.getConnection(); // Obtiene una conexión
        console.log('DB is connected');

        // Realiza tus operaciones con la conexión aquí

        // Luego, libera la conexión
        connection.release();
    } catch (error) {
        console.error('Error al obtener la conexión:', error);
    }
})();

export default pool;