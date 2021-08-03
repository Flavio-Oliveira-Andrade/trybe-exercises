use sakila; 
DELIMITER $$

create procedure atorcomsilaba(in silaba varchar(100))
begin
select * from sakila.actor
where first_name like concat('%',silaba,'%');
end$$
delimiter ;

-- como usar CALL atorcomsilaba('silaba') 
