Crie um modelo Book e defina o método getAll para retornar a lista de todos os livros.
Crie uma rota /books para trazer a lista de todos os livros.
Crie um método getByAuthorId no modelo Book , para retornar apenas livros associados com um determinado author_id . E altere o middleware da rota books criado no passo 2 para receber uma query string com a chave author_id , e retornar apenas os livros associados.

Crie uma rota /books/:id e retorne o livro de acordo com o id passado por parâmetro. Se não existir, retorne um json no seguinte formato { message: 'Not found' } .

Ainda usando a tabela books como referência crie uma rota books do tipo POST . Faça as seguintes validações:
Título não pode ser vazio;
Título precisa ter pelo menos três caracteres;
O campo author_id não pode ser vazio;
O campo author_id só é válido se existir um autor com esse id;
Se algum dos requisitos anteriores não for atendido, retornar um json no seguinte formato { message: 'Dados inválidos' } com status 400 . Caso contrário, insira o livro na tabela books e retorne o json { message: 'Livro criado com sucesso! '} com o status 201 .





Agora, a prática
Você criará uma aplicação que faz CRUD ( C reate, R ead, U pdate e D elete) de usuários. A entidade que representa um usuário se chamará user .
Utilize a camada de Model que você acabou de estudar para realizar a interação da aplicação com o MongoDB .
Com isso em mente, prossiga para a realização dos exercícios:
Crie o endpoint POST /user
Seu endpoint deve receber o seguinte conteúdo no body da request:
Copiar
    {
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com",
        "password": "d496d5ea2442"
    }
Todos os campos são obrigatórios;
O campo password deve ser uma string de 6 ou mais caracteres;
Caso qualquer um dos campos seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:
Copiar
    {
        "error": true,
        "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    }
Caso o usuário seja criado com sucesso, retorne os campos id (e não _id ), firstName , lastName e email em JSON, no formato abaixo, com o status 201 Created
Copiar
    {
        "id": "1837983326d5cd7ad6da5707a2bd11c5",
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com"
    }
O campo _id deve ser renomeado para id , pois a nomenclatura _id trata-se de um detalhe de implementação do MongoDB e que, portanto, deve ser transparente para as demais camadas da aplicação. Dessa forma, ao migrar para um banco relacional, por exemplo, você não precisa alterar o nome de nenhum campo da sua entidade.
Crie o endpoint GET /user
O endpoint sempre deve retornar um array;
Quando não houver nenhum usuário cadastrado, retorne um array vazio;
Deve sempre retornar o status 200 OK .
Crie o endpoint GET /user/:id
O endpoint deve retornar o usuário cujo id seja igual ao parâmetro id informado na URL. O status deve ser 200 OK .
Caso um usuário com o id informado não exista, o endpoint deve retornar o conteúdo abaixo em JSON, com status 404 Not Found .
Copiar
    {
        "error": true,
        "message": "Usuário não encontrado"
    }
Crie o endpoint PUT /user/:id
O endpoint deve receber, no corpo da request, os seguintes dados, em JSON:
Copiar
    {
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com",
        "password": "d496d5ea2442"
    }
Caso qualquer um dos campos esteja faltando ou seja inválido, retorne um JSON com o seguinte formato, variando a mensagem conforme o campo e o erro:
Copiar
    {
        "error": true,
        "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    }
Caso esteja tudo certo, utilize os dados enviados no corpo da requisição para atualizar o usuário cujo id foi especificado na URL.
Depois de alterar os dados do usuário no banco, retorne os novos dados com o status 200 OK , no seguinte formato:
Copiar
    {
        "id": "1837983326d5cd7ad6da5707a2bd11c5",
        "firstName": "Calebe",
        "lastName": "Junior",
        "email": "calebe.junior@gmail.com"
    }
Caso o usuário em questão não exista, retorne o status 404 Not Found e os seguintes dados em JSON no corpo da resposta:
Copiar
    {
        "error": true,
        "message": "Usuário não encontrado"
    }



Bônus
Refatore a camada de model da aplicação criada nos exercícios anteriores para acessar o MySQL ao invés do MongoDB .
Utilize o script SQL abaixo para criar o banco e a tabela que você precisará utilizar para realizar essa refatoração.
Copiar
CREATE DATABASE IF NOT EXISTS users_crud;

USE users_crud;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
Pode ser interessante fazer um cópia da aplicação que desenvolveu anteriormente, assim você terá os dois códigos para consultar posteriormente.
