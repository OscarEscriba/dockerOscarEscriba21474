const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: '*'
})); // Habilitar CORS para todas las solicitudes

const PORT = process.env.PORT || 3000;

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'BaseDeDatosApi',
  database: 'blog_db'
});

// Conexión a la base de datos
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Middleware para permitir el uso de JSON en las solicitudes
app.use(express.json());

// Endpoint para obtener todos los posts
app.get('/posts', (req, res) => {
  const sql = 'SELECT * FROM blog_posts';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

// Endpoint para obtener un post por su ID
app.get('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const sql = 'SELECT * FROM blog_posts WHERE id = ?';
  db.query(sql, [postId], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result[0]);
  });
});

// Endpoint para crear un nuevo post
app.post('/posts', (req, res) => {
  const { title, content, author, category } = req.body;
  const sql = 'INSERT INTO blog_posts (title, content, author, category) VALUES (?, ?, ?, ?)';
  db.query(sql, [title, content, author, category], (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Post creado exitosamente');
  });
});

// Endpoint para actualizar un post existente
app.put('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const { title, content, author, category } = req.body;
  const sql = 'UPDATE blog_posts SET title = ?, content = ?, author = ?, category = ? WHERE id = ?';
  db.query(sql, [title, content, author, category, postId], (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Post actualizado exitosamente');
  });
});

// Endpoint para eliminar un post existente
app.delete('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const sql = 'DELETE FROM blog_posts WHERE id = ?';
  db.query(sql, [postId], (err, result) => {
    if (err) {
      throw err;
    }
    res.send('Post eliminado exitosamente');
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor API en funcionamiento en el puerto ${PORT}`);
});
