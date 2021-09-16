SELECT c.COUNTRY_NAME as 'PAíS',                                                     1
IF(r.REGION_NAME = 'Europe', 'incluido', 'nao incluido') as 'Status inclusao'
from hr.countries as c
INNER JOIN hr.regions as r
on r.region_id = c.region_id
order by c.country_name


SELECT JOB_TITLE AS "Cargo",                                                         2
CASE
WHEN MAX_SALARY between 5000 and 10000 then "Baixo"
WHEN MAX_SALARY between 10001 and 20000 then "Médio"
WHEN MAX_SALARY between 20001 and 30000 then "Alto"
WHEN MAX_SALARY > 30000 then "Altíssimo"
ELSE MAX_SALARY END AS "Nível" 
FROM hr.jobs 
ORDER BY Cargo;


SELECT JOB_TITLE as "Cargo" ,                                                        3
MAX_SALARY - MIN_SALARY AS "Diferença entre salários máximo e mínimo"
FROM `hr`.`jobs`
order by MAX_SALARY - MIN_SALARY ASC, Cargo Asc


SELECT j.JOB_TITLE as "Cargo" ,                                                      4
round(avg(e.salary),2) as  "Média salarial",
case 
when round(avg(e.salary),2) between 2000 and 5800 then "Júnior"
when round(avg(e.salary),2) between 5801 and 7500 then "Pleno"
when round(avg(e.salary),2) between 7501 and 10500 then "Sênior"
else "CEO"
end as "Senioridade"
FROM `hr`.`employees` as e
inner join `hr`. `jobs` as j
where j.JOB_ID = e.JOB_ID
group by e.JOB_ID 
order by `Média salarial` , Cargo ;


select j.job_title as "Cargo",                                                      5
j.max_salary - j.min_salary as "Variação Salarial",
round(j.min_salary/12, 2) as "Média mínima mensal",
round(j.max_salary/12, 2) as "Média máxima mensal"
from `hr`.`jobs` as j
order by `Variação Salarial` , Cargo


select concat(e.first_name, " ", e.last_name) as "Nome completo",                   6
j.job_title as 'Cargo',
jh.START_DATE as "Data de início do cargo",
d.DEPARTMENT_NAME as "Departamento"
from `hr`.`employees` as e
INNER JOIN `hr`.`job_history` as jh
on jh.EMPLOYEE_ID = e.EMPLOYEE_ID
INNER JOIN `hr`.`jobs` as j
on j.JOB_ID = jh.JOB_ID
INNER JOIN `hr`.`departments` as d
on d.DEPARTMENT_ID = jh.DEPARTMENT_ID
order by  `Nome completo` desc, Cargo ASC;


SELECT
UPPER(CONCAT(e.FIRST_NAME, " ", e.LAST_NAME))  AS "Nome completo",                  7
jh.START_DATE as "Data de início",
e.SALARY as "Salário"
from `hr`.`job_history` as jh
INNER JOIN `hr`.`employees` as e
on e.EMPLOYEE_ID = jh.EMPLOYEE_ID
where month(jh.start_date) = 01
or month(jh.start_date) = 02
or month(jh.start_date) = 03
order by  `Nome completo`, `Data de início`;


SELECT c.ContactName AS "Nome de contato",					      8
s.ShipperName AS "Empresa que fez o envio",
o.OrderDate AS "Data do pedido"
FROM `w3schools`.`orders` as o
inner join `w3schools`.`shippers` as s
on o.ShipperID = s.ShipperID
inner join `w3schools`.`customers` as c
on o.customerId = c.customerId
where s.ShipperName in("Speedy Express", "United Package")
ORDER BY `Nome de contato`, `Empresa que fez o envio`,
`Data do pedido`;



select concat(e.FirstName, " ", e.LastName) "Nome completo",			      9
count(*) as "Total de pedidos" 
FROM `w3schools`.`orders` as o
inner join `w3schools`.`employees` as e
on e.EmployeeID = o.EmployeeID
group by o.EmployeeID
order by `Total de pedidos`;



select p.productName "Produto",						     10
MIN(od.quantity) as "Mínima",
max(od.quantity) as "Máxima",
round(avg(od.quantity),2) as "Média"
FROM `w3schools`.`order_details` as od
inner join `w3schools`.`orders` as o
on o.OrderID = od.OrderID
inner join `w3schools`.`products` as p
on p.ProductID = od.ProductID
group by od.ProductID
having Média > 20
order by Média, Produto;





select c.ContactName as "Nome", 						     11
c.Country as "País", 
count(c.Country) as "Número de compatriotas"
FROM `w3schools`.`customers` as c,
`w3schools`.`customers` as copia
where c.Country = copia.Country
and c.CustomerID <> copia.CustomerID
group by c.ContactName, c.Country
order by Nome


SELECT CONCAT(e.first_name," ", e.last_name ) as "Nome completo funcionário 1",   12
e.salary as "Salário funcionário 1",
e.phone_number as "Telefone funcionário 1",
CONCAT(c.first_name, " ", c.last_name) as  "Nome completo funcionário 2",
c.salary as "Salário funcionário 2",
c.phone_number as "Telefone funcionário 2"
FROM `hr`.`employees` as e, `hr`.`employees` as c
WHERE e.JOB_ID = c.JOB_ID 
AND e.EMPLOYEE_ID <> c.EMPLOYEE_ID
order by `Nome completo funcionário 1`, `Nome completo funcionário 2`;


SELECT p.productName as "Produto",						     13
p.price as "Preço" 
FROM `w3schools`.`order_details` as od
INNER JOIN `w3schools`.`products` as p
ON od.ProductID = p.ProductID
WHERE od.Quantity > 80
ORDER BY Produto ;


SELECT c.country as "País"							     14
FROM `w3schools`.`customers` as c
union
SELECT s.country as "País"
FROM `w3schools`.`suppliers` as s
ORDER BY `País`
LIMIT 5; 


use `hr`;									     15
DELIMITER $$

create procedure buscar_media_por_cargo(in cargo varchar(70))
begin
select round(avg(e.salary), 2) as "Média salarial"
FROM `hr`.`employees` as e
inner join `hr`.`jobs` as j
on j.JOB_TITLE = cargo
where j.JOB_ID = e.JOB_ID;
end $$
DELIMITER ;


use `hr`									     16
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
DECLARE mensagem INT;
SELECT COUNT(jh.JOB_ID)
FROM `hr`.`job_history`  as jh
INNER JOIN `hr`.`employees` as e
ON e.EMAIL = email
WHERE e.EMPLOYEE_ID = jh.EMPLOYEE_ID
INTO mensagem;
RETURN mensagem;
END $$
DELIMITER ;


USE `w3schools`;									17
DELIMITER $$

create trigger insert_date_on_order_date
before insert on `w3schools`.`orders`
for each row
begin
set NEW.OrderDate = DATE(NOW());
end $$
DELIMITER ;





