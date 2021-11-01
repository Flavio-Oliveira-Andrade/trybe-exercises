select * from address  as a
inner join city as c
on  a.city_id = c.city_id
where a.city_id = 300;

select a.address, c.city, cou.country from address  as a
inner join city as c
on  a.city_id = c.city_id
inner join country as cou
on cou.country_id  = c.country_id
where a.city_id = 300;

select * from friends as f
left join pets as p
on f.friend-id = p.owner_id;

select * from friends as f
right join pets as p
on f.friend-id = p.owner_id;

-- self join 
select a.actor_id, b.actor_id, a.first_name 
from actor as a, actor as b
where a.first_name =  b.first_name;

-- union   unir duas queries diferentes 

select first_name from actor
union
select first_name from customer;

select first_name from actor
union all
select first_name from customer;

select distinct first_name from actor
union all
select distinct first_name from customer;

-- subqueries , consulta dentro da outra 
select customer_id, first_name,
(select address from address as a 
where a.address_id = c.address_id )
from  customer as c;

-- subqueries com where group by     com mais de dois selct 

select first_name, last_name, (select count(*)
from film_actor as f
where a.actor_id = f.actor_id
group by actor_id)
from actor as a
where actor_id in(select actor_id
from film_actor
group by actor_id
having count(*) > 20
)

