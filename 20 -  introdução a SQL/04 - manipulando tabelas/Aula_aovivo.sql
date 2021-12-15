-- TRUNCATE banco_de_dados.tabela    crud ;
insert into actor (first_name, last_name) values('Sabrina','Oliveira ' );
select * from actor;  
Update custumer
set email = 'teste@teste.com'
where customer_id = 8;
select * from film;

update film set rental_rate = rental_rate * 10  where rental_rate = 2.99
order by film_id desc  limit 10;

select * from film
order by rental_rate desc;


truncate payment;
select * from payment

