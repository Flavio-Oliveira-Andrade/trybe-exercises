select * from actor;
SET SQL_SAFE_UPDATES = 0;

delete from sakila.actor
where first_name = FLAVIO;

DELETE FROM actor
WHERE actor_id  = 1

Erro ON DELETE RESTRICT
O banco de dados não vai permitir que você delete o ator chamado "GRACE". Isso acontece porque a coluna actor_id da tabela film_actor é uma chave estrangeira ( foreign key ) que aponta para a coluna actor_id na tabela actor , e essa chave estrangeira possui a restrição ON DELETE RESTRICT . Se essa restrição não existisse, o ator seria deletado, deixando nosso banco de dados em um estado inconsistente, pois haveria linhas na tabela film_actor com um actor_id que não mais existiria!
Para conseguir excluir este ator em actors , precisamos primeiro excluir todas as referências a ele na tabela sakila.film_actor :
Copiar
DELETE FROM sakila.film_actor
WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE
Após excluir as referências, podemos excluir o ator com o nome "GRACE":
Copiar
DELETE FROM sakila.actor
WHERE first_name = 'GRACE';
Antes de excluir dados que possuem restrições de chave estrangeira, como o exemplo que acabamos de ver, analise se você realmente deve excluir essa informação do banco de dados e depois, caso precise, faça de acordo com as restrições que foram impostas durante a criação da tabela.
As regras e restrições que acompanham querys de alteração do banco (como o UPDATE e o DELETE ) são importantes para manter a Integridade dos Dados , pois evitam mudanças involuntárias e garatem que as taxas de erro sejam menores, resultando em economia de tempo na solução de problemas. Um banco de dados que possui um sistema de integridade de dados bem controlado e bem definido aumenta a estabilidade das informações, desempenho das operações e manutenção das tabelas. Se existem restrições, normalmente não faria sentido simplesmente ignorá-las.


