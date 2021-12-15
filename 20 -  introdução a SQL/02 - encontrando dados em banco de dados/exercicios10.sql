SELECT * FROM sakila.address
ORDER BY address DESC, district asc;
SELECT * FROM sakila.actor
ORDER BY last_name DESC;
select * from film;
select title, description from film limit 5;
select distinct  first_name from actor;
select distinct address from city;
select * from country limit 10 offset 5;
select count(city_id)as cidades, count(district)as distrito from address

