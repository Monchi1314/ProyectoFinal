const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir el análisis de JSON en las solicitudes
app.use(express.json());

// Ruta para el inicio del servidor (ruta de prueba)
app.get('/', (req, res) => {
    res.send('¡Servidor Express funcionando correctamente!');
});

// Ruta para el login de usuario
app.post('/user/login', (req, res) => {
    // Aquí puedes colocar la lógica para autenticar al usuario
    // y responder con la información necesaria
    const { user, password } = req.body;
    // ...aquí va la lógica de autenticación...

    // Ejemplo de respuesta para pruebas
    res.json({ user, token: 'un-token-generado' });
});

// Ruta para otras operaciones relacionadas con usuarios
// ...

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});
