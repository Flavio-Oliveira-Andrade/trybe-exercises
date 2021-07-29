-- Para evitar essa restrição, rode o seguinte comando em uma janela de query dentro
-- do MySQL Workbench sempre que abri-lo para desabilitar essa funcionalidade, 
-- antes de executar seus comandos de UPDATE ou DELETE :
SET SQL_SAFE_UPDATES = 0;

UPDATE staff set first_name = 'Flavio'
where staff_id = 1; 
select * from staff	;

UPDATE nome_da_tabela
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!
