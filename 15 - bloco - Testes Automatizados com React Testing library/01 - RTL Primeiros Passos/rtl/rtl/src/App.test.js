// modifique o import abaixo
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';


import App from './App';

// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  // descontruo {     }  o selector do metodo render
  const { getByTestId, getByLabelText } = render(<App />);
  //uso o seletor para verificar o que condiz com o seletor do
  const input = getByLabelText('Email')
  // faço a verificação se existe
  expect(input).toBeInTheDocument();
  expect(input.type).toBe('email');

  const EMAIL_USER = 'email@email.com';

  const textEmail = getByTestId('id-email-user');
  expect(textEmail).toBeInTheDocument();
  expect(textEmail).toHaveTextContent('Valor:');

  const btnSend = getByTestId('id-send');
  const inputEmail = getByLabelText('Email');
  fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
  fireEvent.click(btnSend);
  expect(inputEmail).toHaveValue('');
  expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
});

test('verifica se ha 2  botao', ()=>{
  const { getAllByRole } = render(<App />)
  const button = getAllByRole('button')

  expect(button.length).toBe(2)
})

describe("Testa pagina Appp e", ()=> {
  test("verifica se a pagina é renderizada", ()=> {
    const history = createMemoryHistory();
    <Router history={ history }>
      render(<App/>);
    </Router>

    const about = screen.getInTheDocuments();
    console.log(about)
  })
})

// testa  campo de email  boatao enviar , input


