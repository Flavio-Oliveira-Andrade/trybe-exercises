SELECT first_name FROM actor group by first_name;
select first_name from actor;

select first_name, count(*)as total from actor
group by first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
group by rating;

select rating , min(length)
from film
group by rating;

select rating, max(length)
from film
group by rating;

select rating, sum(length)
from film
group by rating;

 SELECT rating, AVG(length)
 FROM sakila.film
 GROUP BY rating;
 
  SELECT rating, SUM(replacement_cost)
  FROM sakila.film
  GROUP by rating;
