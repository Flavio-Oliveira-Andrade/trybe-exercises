INSERT ignore INTO actor (first_name, last_name)
select first_name, last_name from staff;
select * from actor order by actor_id;
select * from staff;

INSERT ignore into staff(first_name, last_name)
select first_name, last_name from actor;

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.staff; 
