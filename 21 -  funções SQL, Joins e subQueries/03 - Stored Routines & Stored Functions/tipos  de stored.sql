-- Verbo + Resultado

ObterTotalDeVendas
ExibirRankMaximo
ObterClienteMaisAtivo
CalcularNivelEngajamento
MontarNomeCompleto


USE banco_de_dados; -- obrigatório para criar a procedure no banco correto
DELIMITER $$ -- definindo delimitador

CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN) -- parâmetros
BEGIN -- delimitando o início do código SQL

END $$ -- delimitando o final do código SQL

DELIMITER ; -- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário


set @my_school = "BeTrybe" ;
select @my_school;

-- tipos de Strings 
-- varchar() uma string de comprimento variavel
-- char uma string de comprimento fixo
-- text uma pequena string 

--  tipo numerico 
-- TYNINT um numero inteiro muito pequeno
-- INT um numero inteiro padão 
-- BIGINT um grande numero inteiro
-- DECIMAL um numero de ponto fixo

-- procedure sem parametros
-- procedure com paramentros de entrada(IN)
-- procedure com parametros de saida(OUT)
-- procedure com parametros de entrada e saida(in-out)
