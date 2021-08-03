-- Exemplo de trigger para o UPDATE 
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_update
    BEFORE UPDATE ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'UPDATE';
END $$
DELIMITER ;
-- No trigger acima, o valor da coluna ultima_atualizacao está sendo definido 
-- para a data atual com o comando NOW() e, na sequência, definindo o valor da 
-- coluna acao para "UPDATE". A palavra-chave NEW é utilizada para acessar e
-- modificar as propriedades da tabela.

UPDATE perfil
SET saldo = 30
WHERE perfil_id = 1;

SELECT * FROM perfil;
