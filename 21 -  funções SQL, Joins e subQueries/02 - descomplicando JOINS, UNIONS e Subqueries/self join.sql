select * from sakila.film;

select t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
from sakila.film as t1 , sakila.film as t2
where t1.length = t2.length
order by t1.title

