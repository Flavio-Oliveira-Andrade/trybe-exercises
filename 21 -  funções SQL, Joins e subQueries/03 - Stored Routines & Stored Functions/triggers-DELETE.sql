-- Exemplo de trigger para o DELETE :
USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_delete
    AFTER DELETE ON perfil
    FOR EACH ROW
BEGIN
    INSERT INTO log_perfil(acao, data_acao)
    VALUES ('exclusão', NOW());
END $$
DELIMITER ;

-- O trigger acima envia informações para a tabela log_perfil , dizendo qual foi 
-- o tipo da operação e o horário do ocorrido. Pode-se confirmar o seu funcionamento
--  excluindo um registro do banco de dados e depois fazendo uma pesquisa na tabela
-- log_perfil . Veja o exemplo abaixo:


DELETE FROM perfil WHERE perfil_id = 1;

SELECT * FROM log_perfil;
