-- Usando uma SUBQUERY como fonte de dados para o FROM .
SELECT f.title, f.rating
from( 
select * from film
where rating = "R"  
)as f;

-- Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY .
select address, district,
(select city  from sakila.city
where city.city_id = sakila.address.city_id)as city
from sakila.address;

-- Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY .
select address, district
from sakila.address
where city_id in ( select city_id from sakila.city
where city in('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan'));

-- Usando uma tabela externa, de fora da SUBQUERY , dentro dela.
select first_name, (
select address from sakila.address
where address.address_id = tabela_externa.address_id
)as address
from sakila.customer as tabela_externa;

-- podemos resolver as queries do join com subqueries
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;

SELECT c.first_name, ad.address
FROM sakila.customer c
INNER JOIN sakila.address ad ON c.address_id = ad.address_id;
-- Uma maneira de mensurar a performance e decidir sobre qual abordagem utilizar (Execution Plan)
-- A otimização envolve configurar, ajustar e medir o desempenho em vários níveis:
-- 1 Escalar o banco de dados de forma vertical, ou seja, instanciar mais CPU e memória para o processo do Banco de dados.
-- 2 Escalar o banco de dados de forma horizontal, ou seja, instanciar mais máquinas e balancear a carga entre as diferentes instâncias.
-- 3 Escrever o código SQL de forma que aproveite melhor os recursos do SGBD;
