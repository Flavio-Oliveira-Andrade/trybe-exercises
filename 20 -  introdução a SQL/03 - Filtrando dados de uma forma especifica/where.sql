SELECT * FROM actor
WHERE actor_id =101;

select * from sakila.film
where length > 100
order by length;

select * from sakila.film
where rating = 'G' or rating = 'PG' or rating ='PG-13'
order by rating desc

