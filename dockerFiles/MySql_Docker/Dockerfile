# get the latest mysql latest
FROM mysql:latest

#set envioronment variables for MySql 
ENV MYSQL_DATABASE=blog_db
ENV MYSQL_ROOT_PASSWORD=root_password 

#copiar la base de datos a la imagen 
COPY schema.sql ./docker-entrypoint-initdb.d/
