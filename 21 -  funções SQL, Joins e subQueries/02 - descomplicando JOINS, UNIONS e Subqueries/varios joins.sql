select * from address  as a
inner join city as c
on  a.city_id = c.city_id
where a.city_id = 300;

select a.address, c.city, cou.country from address  as a
inner join city as c
on  a.city_id = c.city_id
inner join country as cou
on cou.country_id  = c.country_id
where a.city_id = 300
