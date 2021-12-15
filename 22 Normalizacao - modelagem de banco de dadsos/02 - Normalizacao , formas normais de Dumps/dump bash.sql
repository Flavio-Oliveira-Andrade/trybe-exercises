-- dump criar um backup do banco de dados
-- restaure - reataura o banco de dados 
 no bash
 
 mysql -u root -p 
 password
 
 mysql.  show  database  -- lista os bancos de dados 
 use nome ;
 show tables;
 
 mysqldump -u -p  nomebancodedados > nomedobackup.sql
 mysqldump -u -p --no-data  nomebancodedados > nomedobackup.sql
