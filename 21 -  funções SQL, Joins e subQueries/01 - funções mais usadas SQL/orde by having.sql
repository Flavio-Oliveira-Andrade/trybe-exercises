SELECT first_name, COUNT(*)as 'total cadastrados'
FROM sakila.actor
GROUP BY first_name
having count(*) > 3;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
select first_name, count(*)as total from actor
group by first_name having total > 3;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;





