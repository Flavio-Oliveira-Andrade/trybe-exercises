select title, rental_rate, case
when rental_rate = 4.99  then rental_rate - 1.00
when rental_rate = 29.90 then round(rental_rate / 10, 2)
else rental_rate
END  as verificar
from film


- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493
