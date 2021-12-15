select first_name, last_name from sakila.actor
union  -- remove os valores duplicados na unioão das tabelas
select first_name, last_name from sakila.customer;

select first_name, last_name from sakila.actor
union all  -- não remove os valores duplicados na unioão das tabelas
select first_name, last_name from sakila.customer;

select first_name, last_name, '_'as 'customer_id' from sakila.actor
union all  -- não remove os valores duplicados na unioão das tabelas
select first_name, last_name, customer_id from sakila.customer;

(select first_name, last_name, '_'as 'customer_id' from sakila.actor)
union all  -- não remove os valores duplicados na unioão das tabelas
(select first_name, last_name, customer_id from sakila.customer)
order by first_name; 
-- foi acrescentado os parentes nois dois select para garantir a ordenação nas duas colunas 

(select first_name, last_name, '_'as 'customer_id' from sakila.actor limit 5)
union all  -- não remove os valores duplicados na unioão das tabelas
(select first_name, last_name, customer_id from sakila.customer limit 5)
order by first_name;

-- criar paginas com off set 
(select first_name, last_name, '_'as 'customer_id' from sakila.actor limit 20)
union all  -- não remove os valores duplicados na unioão das tabelas
(select first_name, last_name, customer_id from sakila.customer limit 20)
order by first_name
limit 10 offset 10;   -- este limit ,limita  o limit das duas queries epaginando com offset


