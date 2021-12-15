SELECT c.city, c.country_id, co.country
from sakila.city as c
inner join sakila.country as co
on c.country_id = co.country_id;

select f.title, f.language_id, l.name
from sakila.film as f
inner join sakila.language as l
on f.language_id = l.language_id;

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

