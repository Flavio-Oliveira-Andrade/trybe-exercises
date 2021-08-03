use sakila; 
DELIMITER $$

create procedure entradasaida(
in film_name varchar(150),
out media_de_dias double
)
begin
select avg(rental_duration) into media_de_dias 
from sakila.film
where title = film_name ;
end$$
delimiter ;

-- call entradasaida('ACADEMY DINOSAUR', @media_de_dias);
-- select @media_de_dias;
