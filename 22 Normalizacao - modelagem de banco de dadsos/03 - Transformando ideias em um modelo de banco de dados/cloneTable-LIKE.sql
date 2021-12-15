-- criar table clone 
create table filme_clone like film;
-- clona todo a estrutura sem os atributos ;
insert into filme_clone(film_id, film, last_update)
select film_id, film, last_updade from film;
-- fazendo assim voce insere todos os dados na tabela clone 
