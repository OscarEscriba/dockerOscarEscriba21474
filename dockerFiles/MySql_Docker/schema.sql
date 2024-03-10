-- Create the database
CREATE DATABASE IF NOT EXISTS blog_db;
USE blog_db;

-- la tabla sera de noticias de tecnologia.
CREATE TABLE IF NOT EXISTS blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    titulo TEXT NOT NULL,
    noticias TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);