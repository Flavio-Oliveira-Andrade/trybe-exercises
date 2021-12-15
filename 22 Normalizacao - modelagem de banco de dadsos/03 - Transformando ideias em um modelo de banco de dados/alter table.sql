--  ALTER TABLE ; 
use sakila;

create table noticias(
noticia_id int(11) auto_increment,
titulo varchar(30),
historia varchar(100),
constraint primary key(noticia_id) 
)engine = InnoDB;

-- fazer uma alteração na tabela; 
ALTER TABLE sakila.noticias 
ADD COLUMN data_postagem DATE NOT NULL;

-- fazer uma alteração tipo de dado 
ALTER TABLE noticias 
MODIFY noticia_id BIGINT;

-- idiciona mais propiedades na tabela
ALTER TABLE noticias
MODIFY noticia_id BIGINT AUTO_INCREMENT;

-- altera o tipo e o nome de uma coluna 
ALTER TABLE noticias 
CHANGE historia conteudo_postagem varchar(100)NOT NULL;

-- Dropar / Excluir uma coluna 
ALTER TABLE noticias 
DROP COLUMN data_postagem; 

-- adiciona uma nova coluna apos a outra after === apos 
ALTER TABLE noticias 
ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;

SHOW COLUMNS FROM sakila.noticias;





