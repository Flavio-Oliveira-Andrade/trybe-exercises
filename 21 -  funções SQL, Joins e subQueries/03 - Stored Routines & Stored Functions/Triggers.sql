-- Triggers são blocos de código SQL que são disparados em reação a alguma atividade que ocorre -- no banco de dados. Eles podem ser disparados em dois momentos distintos, e é possível  -- 
-- definir condições para esse disparo.

Momentos em que um trigger pode ser disparado
BEFORE : antes que alguma ação seja executada;
AFTER : após alguma ação já ter sido executada.


O que pode ativar um Trigger?
INSERT ;
UPDATE ;
DELETE .

O valor 'OLD' de uma coluna: valor presente em uma coluna antes de uma operação;
O valor 'NEW' de uma coluna: valor presente em uma coluna após uma operação.

Operação	OLD	NEW
INSERT	        Não	Sim
UPDATE	        Sim	Sim
DELETE	        Sim	Não

Sintaxe
Copiar
DELIMITER $$

CREATE TRIGGER nome_do_trigger
[BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
FOR EACH ROW
BEGIN
    -- o código SQL entra aqui
END $$

DELIMITER $$ ;
