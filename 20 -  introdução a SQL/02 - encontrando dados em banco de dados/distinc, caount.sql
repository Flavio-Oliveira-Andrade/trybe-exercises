SELECT COUNT(*) FROM sakila.actor;
SELECT COUNT(distinct first_name) from actor;
SELECT COUNT(address2)  FROM sakila.address
WHERE address2 = '';
select password from sakila.staff;
select  count(password) from staff
