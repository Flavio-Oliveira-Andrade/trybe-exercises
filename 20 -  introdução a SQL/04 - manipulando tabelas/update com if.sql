-- Para evitar essa restrição, rode o seguinte comando em uma janela de query dentro
-- do MySQL Workbench sempre que abri-lo para desabilitar essa funcionalidade, 
-- antes de executar seus comandos de UPDATE ou DELETE :
-- SET SQL_SAFE_UPDATES = 0;
-- WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!

-- Opção 1 - Incluindo a lista de condições fixas
set sql_safe_updade = 0;
update actor set first_name = 'FLAVIO'
where actor_id in (1,2,3);
select * from actor;

-- Opção 2 - Especificando como cada entrada será alterada individualmente
set sql_safe_updade = 0;
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
          ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);
-- sintaxe
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END;
