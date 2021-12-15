alter table betrybe add column estado varchar(30) after cidade;
alter table betrybe add column estado varchar(30) first;

-- fulltext search index
CREATE FULLTEXT INDEX descricao_filme
on film(description); 

select * from film
where match(description) against('Pastry');

