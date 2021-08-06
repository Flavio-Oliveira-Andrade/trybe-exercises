-- dump criar um backup do banco de dados
-- restaure - reataura o banco de dados 
 no bash
 
 mysql -u root -p 
 password
 
 mysql.  show  database  -- lista os bancos de dados 
 use nome ;
 show tables;
 
 mysqldump -u -p  nomebancodedados > nomedobackup.sql;
 mysqldump -u -p --no-data  nomebancodedados > nomedobackup.sql;
 
 -- restaure banco de dados 
 --  1 cria um banco de dados com o mesmo nome do banco q a ser restaurado
 create database banco_de_dados;
 -- estando na pasta onde o backup se enconte abra terminal 
 mysqldump -u root -p  nome_banco_dados < nome-do-backup.sql
 -- presta atenção no maior que e menos que , atravez dessa forma a direção da seta faz atribuição do backup
 
 
 
 
