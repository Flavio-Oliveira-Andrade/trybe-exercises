-- Exemplo de trigger para o INSERT 
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END $$
DELIMITER ;
-- No trigger acima, o valor da coluna ultima_atualizacao está sendo definido 
-- para a data atual com o comando NOW() e, na sequência, definindo o valor da 
-- coluna acao para "INSERT". A palavra-chave NEW é utilizada para acessar e
-- modificar as propriedades da tabela.

INSERT INTO perfil(saldo) VALUES (25);

SELECT * FROM perfil;
