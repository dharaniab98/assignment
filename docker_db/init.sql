CREATE USER 'app_user'@'%' IDENTIFIED BY 'password';

CREATE SCHEMA `myapp` DEFAULT CHARACTER SET utf8;

GRANT INSERT, CREATE, ALTER, UPDATE, DROP, SELECT, REFERENCES on myapp.*
TO 'app_user'@'%' IDENTIFIED BY 'password'
WITH GRANT OPTION;
SHOW DATABASES;