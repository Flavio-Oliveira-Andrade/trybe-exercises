SELECT UCASE('oi eu sou um estudANTE');
SELECT LCASE('OLA EU SOU UM ESTUDANTE !');
SELECT REPLACE('ola eu sou um estudante', 'estudante', 'professor');
SELECT LEFT('oi, sou um estudante', 8);
SELECT RIGHT('oi, sou um estudante', 5);
SELECT 
    SUBSTRING('ola eu sou um estudante',
        5,
        10);
SELECT SUBSTRING('ola eu sou um estudante', 5);
SELECT 
    REPLACE(title, 'ACADEMY', 'FOOo')
FROM
    sakila.film
WHERE
    film_id = 1;
    
SELECT 
    title, LENGTH(title)
FROM
    sakila.film
WHERE
    film_id = 1;
SELECT UCASE('trybe');
select replace('voce ja ouviu falar do duckduckgo', 'duckduckgo', 'google');
select length('uma frase qualquer');
SELECT 
    SUBSTRING('a lingua java scripts esta entrea as mais usads',
        10,
        12);
SELECT LCASE('RUA DO NORTE 1500, SAO PAULO, BRASIL');

SELECT title,
    IF(rental_rate > 0.99, 'caro', 'barato')
FROM
    sakila.film;
    
SELECT 
    title,
    rental_rate,
    CASE
        WHEN rental_rate = 0.99 THEN 'barato'
        WHEN rental_rate = 2.99 THEN 'Medio'
        WHEN rental_rate = 4.99 THEN 'caro'
        ELSE rental_rate = 'nao classificado'
    END AS 'clasificação'
FROM
    sakila.film
ORDER BY classificação
