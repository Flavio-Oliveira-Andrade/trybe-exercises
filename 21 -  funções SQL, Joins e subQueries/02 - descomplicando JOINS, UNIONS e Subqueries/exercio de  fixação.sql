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


