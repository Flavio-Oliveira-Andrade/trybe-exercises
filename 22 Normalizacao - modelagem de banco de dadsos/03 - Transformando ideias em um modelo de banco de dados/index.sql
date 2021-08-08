-- DROP TABLE nome da tabela 
-- para excluir uma tabela ixists , vove nao consegue escluir uma tabela referenciada 
drop table nome_tabela;

-- como usar index 
index;
Primary key
unique
fulltext index
sinataxe 

create index nome_index on tabela(coluna)
create fullText index nome_index on tabela(coluna)

-- criando index junto com a criação da tabela 
create database if not exists pizzaria;
use pizzaria;

create table pizzas(
pizza_id int(11), 
sabor varchar(40),
preco decimal(5,2),
primary key(pizza_id),
INDEX sabor_index(sabor)
)engine = InnoDB;

-- alterando uma tabela existente ;
-- alter table pizzas ADD sabor_index(sabor);

-- Criando um índice em uma coluna
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna1, coluna2);

-- Excluindo índices
DROP INDEX nome_do_indice ON tabela;

create index index_first_name on sakila.actor(first_name);
select * from sakila.actor where first_name = 'RITA';

drop index index_first_name on sakila.actor;

-- FULLTEXT INDEX  
create fulltext index index_nome on tabela(coluna);
select * from  nome_tabela
where match(coluna) against('drive');

-- select * from sakila.address where address like %drive%;

-- UNIQUE index;
create unique index nome_indice on nome_tabela(coluna); 
DROP INDEX nome_do_indice ON nome_tabela;
-- O UNIQUE INDEX é utilizado em uma coluna para, principalmente, 
-- prevenir a duplicação de dados em uma tabela e, secundariamente, melhorar a performance de busca.
SHOW INDEX FROM sakila.actor;




