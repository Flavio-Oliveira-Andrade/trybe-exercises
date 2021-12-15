-- Procedure  sem Parametros 
use sakila;
DELIMITER $$

create procedure mostrarAtor()
begin 
select * from sakila.actor;
end$$
DELIMITER ;
-- como usar  call  mostrarAtor;
