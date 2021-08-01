SELECT 
    city.city, city.country_id, country.country
FROM
    sakila.city AS city
        INNER JOIN
    sakila.country AS country ON city.country_id = country.country_id;
    
    SET @idade  = 19;
select if (@idade > 18, 'Maior', 'Menor');

select title, release_year, length,
case when length <= 60 then 'curto'
when length > 60 AND length < 135 then 'Médio'
else length
end as tempo
from film;
-- agregação 
-- MIN()
-- MAX()
-- AVG()
-- SUM()
-- count()
-- group by having;

select district, count(*) as total
from address group by district 
having total > 2 AND district <> ''
