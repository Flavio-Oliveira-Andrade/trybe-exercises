-- inclua um valor inicial e final 
SELECT title, length from sakila.film
where length between  50 and 60;

-- com strings
select * from sakila.language
where name between 'Italian' and 'Mandaein'
order by name;

-- com datas 
select rental_id, rental_date from sakila.rental
where rental_date between '2005-05-27' and '2005-06-17';



