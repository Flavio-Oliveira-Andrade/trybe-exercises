SELECT * FROM hr.countries
where region_id = 1;

select * from sakila.film;
select title ,if(rental_rate > 4.99 , 'caro', 'barato')
from film;

select title, rental_rate, case
when rental_rate = 4.99  then rental_rate - 1.00
when rental_rate = 29.90 then round(rental_rate / 10, 2)
else rental_rate
END  as verificar
from film;

select rand();
select round(6 + (rand()*55));

select current_date();
select current_time();
select now();
select datediff(current_date , '1981-12-30');
select datediff('2020-01-31', '2020-01-01');
SELECT TIMEDIFF('08:30:10', '09:30:10');

SELECT DATE(data_cadastro); -- YYYY-MM-DD
SELECT YEAR(data_cadastro); -- Ano
SELECT MONTH(data_cadastro); -- Mês
SELECT DAY(data_cadastro); -- Dia
SELECT HOUR(data_cadastro); -- Hora
SELECT MINUTE(data_cadastro); -- Minuto
SELECT SECOND(data_cadastro); -- Segundo

SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual
