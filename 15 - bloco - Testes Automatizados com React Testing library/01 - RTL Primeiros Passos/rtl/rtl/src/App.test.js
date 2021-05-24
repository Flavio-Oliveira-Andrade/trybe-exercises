// modifique o import abaixo
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';


import App from './App';

// Adicione esse teste.
test('Verificando se o botão e o campo email estão funcionando.', () => {
  const { getByTestId, getByLabelText } = render(<App />);

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

describe("Testa pagina Appp e", ()=> {
  test("verifica se a pagina é renderizada", ()=> {
    <Router history={history}>
      render(<App/>);
    </Router>

    const
  })
})

