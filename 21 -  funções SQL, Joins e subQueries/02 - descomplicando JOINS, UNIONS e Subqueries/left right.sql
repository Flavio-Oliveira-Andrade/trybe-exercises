select c.customer_id, c.first_name, a.actor_id
from sakila.customer as c
left join sakila.actor as a
on c.last_name = a.last_name;

select c.customer_id, c.first_name, a.actor_id
from sakila.customer as c
right join sakila.actor as a
on c.last_name = a.last_name;
