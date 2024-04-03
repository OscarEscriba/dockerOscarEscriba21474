-- Create the database
CREATE DATABASE IF NOT EXISTS blog_db;
USE blog_db;

-- la tabla sera de noticias de tecnologia.
CREATE TABLE IF NOT EXISTS blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    category TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- insertar datos para mostar
INSERT INTO blog_posts (title, content, author, category) VALUES 
('Introducción a la Inteligencia Artificial', 'La inteligencia artificial es un campo...', 'John Doe', 'Inteligencia Artificial'),
('Avances en la Tecnología Blockchain', 'La tecnología blockchain está revolucionando...', 'Jane Smith', 'Blockchain');