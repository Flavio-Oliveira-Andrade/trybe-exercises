Essas são as maneiras mais comuns de utilizar o UPDATE no dia a dia.
Um pouco mais sobre o modo --safe-updates
Para quem está ainda está se familiarizando com o MySQL, o --safe-updates (ou - -i-am-a-dummy , sim, é uma propriedade real do MySQL) pode ser uma configuração segura para utlizar operadores de alteração de dados. Ele é útil para casos em que você tenha emitido um comando UPDATE ou DELETE , mas esquecido de incluir WHERE para indicar quais linhas devem ser modificadas, evitanto que a query atualize ou exclua todas as linhas da tabela.
O --safe-updates exige que você inclua um valor chave (key value), por exemplo os ids (lembrando que os valores da coluna id de uma tabela são do tipo KEY ) dos itens selecionados para executar o UPDATE ou o DELETE . Essa camada de segurança é importante em bancos reais executando em ambientes de produção e ajuda a prevenir acidentes. Este modo também restringe querys SELECT que produzem resultados muito grandes, com uma quantidade excessiva de linhas.
A opção --safe-updates exige que o mysql execute a seguinte instrução ao se conectar ao servidor:
Copiar
SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;

sql_select_limit =1000 limita o conjunto de resultados SELECT a 1.000 linhas, a menos que a instrução inclua LIMIT .
max_join_size =1.000.000 faz com que as instruções SELECT de várias tabelas produzam um erro se o servidor estimar que deve examinar mais de 1.000.000 combinações de linhas.
Você pode desabilitar o --safe-updates utilizando o comando SET :
Copiar
SET SQL_SAFE_UPDATES = 0;
Ou configurar para um modo mais conveniente para você, alterando os valores das variáveis:
Copiar
SET sql_safe_updates=1, sql_select_limit=500, max_join_size=10000;
Quando ocorre um erro de --safe-updates , a mensagem de erro inclui o primeiro diagnóstico que foi produzido, para fornecer informações sobre o motivo da falha. Por exemplo, a mensagem pode indicar que o UPDATE esta sendo executado com um operador WHERE que não se refere a uma coluna do tipo KEY (veja a imagem abaixo), nesse caso voce pode desabilitar o --safe-updates , ou utilizar uma coluna KEY como referência do seu operador WHERE . Lembre-se que ler e interpretar os erros pode ajudar na sua solução!
Copiar
-- Mensagem de erro retornada pelo workbench.

-- Error Code: 1175. You are using safe update mode and you tried to update a table without WHERE that uses a KEY column. 
-- To disable safe mode, toogle the option in Preferences -> SQL Editor an reconnect.
Este erro ocorreu devido ao Safe Update Mode estar habilitado.
Agora está na hora de praticar!
Dê um UPDATE em seus conhecimentos com estes desafios
Como o banco pode ser deletado e recriado infinitamente, vamos desabilitar o --safe-updates nos exercícios. Além disso, esse modo pode ser habilitado novamente quando necessário. Rode o seguinte comando em uma janela de query dentro do MySQL Workbench sempre que abri-lo para desabilitar essa funcionalidade, antes de executar seus comandos UPDATE ou DELETE :
Copiar
SET SQL_SAFE_UPDATES = 0;
Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.
Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.

