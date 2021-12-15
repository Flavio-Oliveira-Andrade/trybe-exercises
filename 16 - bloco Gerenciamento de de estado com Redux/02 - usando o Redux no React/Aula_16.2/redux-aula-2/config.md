###  checkList Redux
[] npx create-react-app  nomeDoProjeto
[] npm install --save redux react-redux
[] npm install

### criar dentro do diretorio Src
[] pasta Redux
  [] pasta _actions_
    [] arquivo index.js
  [] pasta Reducers
    [] arquivo index.js
  [] pasta store
    [] arquivo index.js

### Definir o Provider store={ store }
  [] dentro do arquivo ***index.js, ou App.js***
  [] sintaxe  <Provider store={ store }/>
  [] import Provider from 'redux'

## obs
reducers, actions, createStore  from Redux
mapStateToProps, mapDispatchToProps, connect, Provider = React-Redux

### No arquivo store/index.js
[] importar o rootReducer e criar a store
[] configurar o store nos componentes que o usa
[] configurar Redux Devetools