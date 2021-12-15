-- table scan
select * from table;

-- 
index scan 
SELECT * FROM table
WHERE alguma_condição;

-- Se achar que sua consulta está lenta, você deve verificar o execution plan
-- Tomando como exemplo as duas últimas queries desta página, crie dois novos arquivos SQL 
-- no seu MySQl Workbench. Em um deles, cole a query em que utilizamos a solução usada 
-- como SUBQUERY e, no outro, a que se utilizou como INNER JOIN .
-- Em seguida, execute uma das queries e depois clique em Execution Plan , 
-- como na imagem abaixo, e observe o valor de "Query Cost". Quanto menor o valor,
--  em comparação com outra versão da query, melhor a performance. Assim você pode 
-- simplesmente escolher a query que tem o menor custo.
