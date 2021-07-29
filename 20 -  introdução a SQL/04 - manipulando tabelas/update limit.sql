-- UPDATE nome_da_tabela
-- SET coluna1 = valor1, coluna2 = valor2
-- [WHERE condições]
-- [ORDER BY expressao [ ASC | DESC ]]
-- [LIMIT quantidade_resultados];

-- Exemplo:
UPDATE sakila.staff
SET password = '1651fdd8fwerwfdf12wf98'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

select * from staff
