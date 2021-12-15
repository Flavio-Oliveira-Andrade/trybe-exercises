### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Criando um formulário em React .
Lembra do formulário que você criou usando JavaScript "clássico" ? Vamos criar um parecido em React, e você verá como suas habilidades evoluíram desde então!
Crie um novo projeto, utilizando npx create-react-app my-form-2.0
Caso julgue necessário, crie estilos CSS para seu formulário, de acordo com a sua imaginação.
Faça tudo utilizando as abstrações do React .
Vamos criar um formulário de cadastro de currículo com base na especificação seguintes:
Crie um <fieldset> para os dados pessoais a seguir:
Nome - Texto
Limite de 40 caracteres
Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
Campo obrigatório
Email - Texto
Limite de 50 caracteres
Campo obrigatório
CPF - Texto
Limite de 11 caracteres
Campo obrigatório
Endereço - Texto
Limite de 200 caracteres
Remover qualquer caracter especial que seja digitado
Campo obrigatório
Cidade - Texto
Limite de 28 caracteres
Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
Campo obrigatório.
Estado - ComboBox
Todos os estados do Brasil
Campo obrigatório.
Tipo - Radio Button
Casa, Apartamento
Campo obrigatório.
Crie outro <fieldset> para dados do seu último emprego:
Resumo do currículo - TextArea
Limite de 1000 caracteres
Campo obrigatório.
Cargo - TextArea
Limite de 40 caracteres
Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
Campo obrigatório
Descrição do cargo - Texto
Limite de 500 caracteres
Campo obrigatório
Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário.
Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.
Por último, vá até o formulário que você criou na aula HTML & CSS - Forms e veja as diferenças no código.