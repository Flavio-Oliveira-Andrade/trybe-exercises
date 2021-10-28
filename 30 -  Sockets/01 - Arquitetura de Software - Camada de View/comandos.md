## verificando status do MySQL
sudo systemctl status mysql

## Caso o serviço esteje parado mysql ou para parar o serviço
systemctl start mysql
systemctl stop mysql

sudo systemctl disable mysql
sudo systemctl start mysql
sudo systemctl enable mysql
mysql -u root -p

 ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sua_senha_aqui'; flush privileges;
 -- EX: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234'; flush privileges;


## desisntalar MySqlServer
sudo apt-get remove mysql-server mysql-client mysql-common
sudo apt-get autoremove
sudo apt-get autoclean
sudo rm -rf /var/lib/mysql
sudo rm -rf /etc/mysql
mysql --version

## Comandos para visualizar banco de dados

SHOW DATABASES;
SHOW TABLES;

USE nome_do_banco_de_dados_que_quero_conectar;
-- EX: USE trybe;

SELECT * FROM banco_de_dados.tabela;
-- EX: SELECT * FROM trybe.students;

DESCRIBE nome_da_tabela;
-- EX: DESCRIBE students;

CREATE DATABASE nome_do_banco_de_dados;
-- EX: CREATE DATABASE trybe;

 npm install express