importar  userEvent  de  '../'
import  { setup ,  addListeners }  de  './helpers/utils'
import  './helpers/custom-element'

test ( 'digita texto na entrada' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setup ( '<input />' )
  userEvent . tipo ( elemento ,  'Sup' )
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: input [value = "Sup"]
    input [value = ""] - ponteiro
    input [value = ""] - pointerenter
    input [value = ""] - mouseover: Left (0)
    input [value = ""] - mouseenter: Esquerda (0)
    input [value = ""] - ponteiromove
    entrada [valor = ""] - mousemove: Esquerda (0)
    entrada [valor = ""] - ponteiro para baixo
    input [value = ""] - mouseedown: Left (0)
    input [value = ""] - foco
    input [value = ""] - focusin
    entrada [valor = ""] - ponteiroup
    input [value = ""] - mouseup: Left (0)
    entrada [valor = ""] - clique: Esquerda (0)
    input [value = ""] - keydown: S (83)
    entrada [valor = ""] - pressionamento de tecla: S (83)
    entrada [valor = "S"] - entrada
      "{CURSOR}" -> "S {CURSOR}"
    entrada [valor = "S"] - tecla: S (83)
    input [value = "S"] - keydown: u (117)
    entrada [valor = "S"] - pressionamento de tecla: u (117)
    entrada [valor = "Su"] - entrada
      "S {CURSOR}" -> "Su {CURSOR}"
    entrada [valor = "Su"] - tecla: u (117)
    input [value = "Su"] - keydown: p (112)
    entrada [valor = "Su"] - pressionamento de tecla: p (112)
    entrada [valor = "Sup"] - entrada
      "Su {CURSOR}" -> "Su {CURSOR}"
    input [value = "Sup"] - keyup: p (112)
  ` )
} )

test ( 'pode pular o clique inicial' ,  ( )  =>  {
  const  { element , getEventSnapshot , clearEventCalls }  =  setup ( '<input />' )
  elemento . focus ( )  // os usuários DEVEM se concentrar se desejam pular o clique
  clearEventCalls ( )
  userEvent . tipo ( elemento ,  'Sup' ,  { skipClick : true } )
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: input [value = "Sup"]
    input [value = ""] - keydown: S (83)
    entrada [valor = ""] - pressionamento de tecla: S (83)
    entrada [valor = "S"] - entrada
      "{CURSOR}" -> "S {CURSOR}"
    entrada [valor = "S"] - tecla: S (83)
    input [value = "S"] - keydown: u (117)
    entrada [valor = "S"] - pressionamento de tecla: u (117)
    entrada [valor = "Su"] - entrada
      "S {CURSOR}" -> "Su {CURSOR}"
    entrada [valor = "Su"] - tecla: u (117)
    input [value = "Su"] - keydown: p (112)
    entrada [valor = "Su"] - pressionamento de tecla: p (112)
    entrada [valor = "Sup"] - entrada
      "Su {CURSOR}" -> "Su {CURSOR}"
    input [value = "Sup"] - keyup: p (112)
  ` )
} )

test ( 'digita texto dentro do elemento personalizado' ,  ( )  =>  {
   elemento  const =  documento . createElement ( 'custom-el' )
  documento . corpo . anexar ( elemento )
  const  inputEl  =  element . shadowRoot . querySelector ( 'input' )
  const  { getEventSnapshot }  =  addListeners ( inputEl )

  userEvent . tipo ( inputEl ,  'Sup' )
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: input [value = "Sup"]
    input [value = ""] - ponteiro
    input [value = ""] - pointerenter
    input [value = ""] - mouseover: Left (0)
    input [value = ""] - mouseenter: Esquerda (0)
    input [value = ""] - ponteiromove
    entrada [valor = ""] - mousemove: Esquerda (0)
    entrada [valor = ""] - ponteiro para baixo
    input [value = ""] - mouseedown: Left (0)
    input [value = ""] - foco
    input [value = ""] - focusin
    entrada [valor = ""] - ponteiroup
    input [value = ""] - mouseup: Left (0)
    entrada [valor = ""] - clique: Esquerda (0)
    input [value = ""] - keydown: S (83)
    entrada [valor = ""] - pressionamento de tecla: S (83)
    entrada [valor = "S"] - entrada
      "{CURSOR}" -> "S {CURSOR}"
    entrada [valor = "S"] - tecla: S (83)
    input [value = "S"] - keydown: u (117)
    entrada [valor = "S"] - pressionamento de tecla: u (117)
    entrada [valor = "Su"] - entrada
      "S {CURSOR}" -> "Su {CURSOR}"
    entrada [valor = "Su"] - tecla: u (117)
    input [value = "Su"] - keydown: p (112)
    entrada [valor = "Su"] - pressionamento de tecla: p (112)
    entrada [valor = "Sup"] - entrada
      "Su {CURSOR}" -> "Su {CURSOR}"
    input [value = "Sup"] - keyup: p (112)
  ` )
} )

test ( 'digita texto em textarea' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setup ( '<textarea> </textarea>' )
  userEvent . tipo ( elemento ,  'Sup' )
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: textarea [value = "Sup"]
    textarea [value = ""] - ponteiro
    textarea [value = ""] - pointerenter
    textarea [value = ""] - mouseover: Left (0)
    textarea [value = ""] - mouseenter: Esquerda (0)
    textarea [value = ""] - pointermove
    textarea [value = ""] - mousemove: Esquerda (0)
    textarea [value = ""] - ponteiro para baixo
    textarea [value = ""] - mousedown: Left (0)
    textarea [value = ""] - foco
    textarea [value = ""] - focusin
    textarea [value = ""] - pointerup
    textarea [value = ""] - mouseup: Left (0)
    textarea [value = ""] - clique: Esquerda (0)
    textarea [value = ""] - keydown: S (83)
    textarea [valor = ""] - pressionamento de tecla: S (83)
    textarea [value = "S"] - entrada
      "{CURSOR}" -> "S {CURSOR}"
    textarea [value = "S"] - keyup: S (83)
    textarea [value = "S"] - keydown: u (117)
    textarea [valor = "S"] - pressionamento de tecla: u (117)
    textarea [value = "Su"] - entrada
      "S {CURSOR}" -> "Su {CURSOR}"
    textarea [value = "Su"] - keyup: u (117)
    textarea [value = "Su"] - keydown: p (112)
    textarea [value = "Su"] - pressionamento de tecla: p (112)
    textarea [value = "Sup"] - entrada
      "Su {CURSOR}" -> "Su {CURSOR}"
    textarea [value = "Sup"] - keyup: p (112)
  ` )
} )

test ( 'não dispara evento de entrada quando chamadas de pressionamento de tecla impedem padrão' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setup ( '<input />' ,  {
    eventHandlers : { keyPress : e  =>  e . preventDefault ( ) } ,
  } )

  userEvent . tipo ( elemento ,  'a' )
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: input [value = ""]
    input [value = ""] - ponteiro
    input [value = ""] - pointerenter
    input [value = ""] - mouseover: Left (0)
    input [value = ""] - mouseenter: Esquerda (0)
    input [value = ""] - ponteiromove
    entrada [valor = ""] - mousemove: Esquerda (0)
    entrada [valor = ""] - ponteiro para baixo
    input [value = ""] - mouseedown: Left (0)
    input [value = ""] - foco
    input [value = ""] - focusin
    entrada [valor = ""] - ponteiroup
    input [value = ""] - mouseup: Left (0)
    entrada [valor = ""] - clique: Esquerda (0)
    input [value = ""] - keydown: a (97)
    entrada [valor = ""] - pressionamento de tecla: a (97)
    input [value = ""] - keyup: a (97)
  ` )
} )

test ( 'não dispara eventos de pressionamento de tecla ou entrada quando chamadas de teclas impedem padrão' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setup ( '<input />' ,  {
    eventHandlers : { keyDown : e  =>  e . preventDefault ( ) } ,
  } )

  userEvent . tipo ( elemento ,  'a' )
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: input [value = ""]
    input [value = ""] - ponteiro
    input [value = ""] - pointerenter
    input [value = ""] - mouseover: Left (0)
    input [value = ""] - mouseenter: Esquerda (0)
    input [value = ""] - ponteiromove
    entrada [valor = ""] - mousemove: Esquerda (0)
    entrada [valor = ""] - ponteiro para baixo
    input [value = ""] - mouseedown: Left (0)
    input [value = ""] - foco
    input [value = ""] - focusin
    entrada [valor = ""] - ponteiroup
    input [value = ""] - mouseup: Left (0)
    entrada [valor = ""] - clique: Esquerda (0)
    input [value = ""] - keydown: a (97)
    input [value = ""] - keyup: a (97)
  ` )
} )

test ( 'não dispara eventos quando desabilitado' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setup ( '<input disabled />' )

  userEvent . tipo ( elemento ,  'a' )
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot (
    `Nenhum evento foi disparado em: input [value =" "]` ,
  )
} )

test ( 'não dispara entrada quando somente leitura' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setup ( '<input somente leitura />' )

  userEvent . tipo ( elemento ,  'a' )
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: input [value = ""]
    input [value = ""] - ponteiro
    input [value = ""] - pointerenter
    input [value = ""] - mouseover: Left (0)
    input [value = ""] - mouseenter: Esquerda (0)
    input [value = ""] - ponteiromove
    entrada [valor = ""] - mousemove: Esquerda (0)
    entrada [valor = ""] - ponteiro para baixo
    input [value = ""] - mouseedown: Left (0)
    input [value = ""] - foco
    input [value = ""] - focusin
    entrada [valor = ""] - ponteiroup
    input [value = ""] - mouseup: Left (0)
    entrada [valor = ""] - clique: Esquerda (0)
    input [value = ""] - keydown: a (97)
    entrada [valor = ""] - pressionamento de tecla: a (97)
    input [value = ""] - keyup: a (97)
  ` )
} )

test ( 'deve atrasar a digitação quando opts.delay não for 0' ,  async  ( )  =>  {
  const  inputValues  =  [ { timestamp : Date . agora ( ) ,  valor : '' } ]
  const  onInput  =  jest . fn ( evento  =>  {
    inputValues . push ( { timestamp : Date . now ( ) ,  value : event . target . value } )
  } )

  const  { element }  =  setup ( '<input />' ,  { eventHandlers : { input : onInput } } )

  const  text  =  'Olá, mundo!'
   atraso  const =  10
  aguarde  userEvent . tipo ( elemento ,  texto ,  { atraso } )

  esperar ( onInput ) . toHaveBeenCalledTimes ( texto . comprimento )
  for  ( let  index  =  1 ;  index  <  inputValues . length ;  index ++ )  {
    const  { timestamp , value }  =  inputValues [ index ]
    esperar ( timestamp  -  inputValues [ index  -  1 ] . timestamp ) . toBeGreaterThanOrEqual (
      demora ,
    )
    esperar ( valor ) . toBe ( texto . fatia ( 0 ,  índice ) )
  }
} )

test ( 'honors maxlength' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setup ( '<input maxlength = "2" />' )
  userEvent . tipo ( elemento ,  '123' )

  // NOTA: nenhum evento de entrada ao digitar "3"
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: input [value = "12"]
    input [value = ""] - ponteiro
    input [value = ""] - pointerenter
    input [value = ""] - mouseover: Left (0)
    input [value = ""] - mouseenter: Esquerda (0)
    input [value = ""] - ponteiromove
    entrada [valor = ""] - mousemove: Esquerda (0)
    entrada [valor = ""] - ponteiro para baixo
    input [value = ""] - mouseedown: Left (0)
    input [value = ""] - foco
    input [value = ""] - focusin
    entrada [valor = ""] - ponteiroup
    input [value = ""] - mouseup: Left (0)
    entrada [valor = ""] - clique: Esquerda (0)
    input [value = ""] - keydown: 1 (49)
    entrada [valor = ""] - pressionamento de tecla: 1 (49)
    entrada [valor = "1"] - entrada
      "{CURSOR}" -> "1 {CURSOR}"
    input [value = "1"] - keyup: 1 (49)
    input [value = "1"] - keydown: 2 (50)
    entrada [valor = "1"] - pressionamento de tecla: 2 (50)
    entrada [valor = "12"] - entrada
      "1 {CURSOR}" -> "12 {CURSOR}"
    entrada [valor = "12"] - keyup: 2 (50)
    entrada [valor = "12"] - keydown: 3 (51)
    entrada [valor = "12"] - pressionamento de tecla: 3 (51)
    entrada [valor = "12"] - tecla: 3 (51)
  ` )
} )

test ( 'honra maxlength com texto existente' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setup (
    '<input value = "12" maxlength = "2" />' ,
  )
  userEvent . tipo ( elemento ,  '3' )

  // NOTA: nenhum evento de entrada ao digitar "3"
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: input [value = "12"]
    input [value = "12"] - ponteiro
    entrada [valor = "12"] - ponteiroenter
    input [value = "12"] - mouseover: Left (0)
    input [value = "12"] - mouseenter: Left (0)
    entrada [valor = "12"] - movimento do ponteiro
    entrada [valor = "12"] - movimento do mouse: Esquerda (0)
    entrada [valor = "12"] - ponteiro para baixo
    input [value = "12"] - mouseedown: Left (0)
    entrada [valor = "12"] - foco
    entrada [valor = "12"] - foco em
    entrada [valor = "12"] - ponteiro para cima
    input [value = "12"] - mouseup: Left (0)
    entrada [valor = "12"] - clique: Esquerda (0)
    entrada [valor = "12"] - selecione
    entrada [valor = "12"] - keydown: 3 (51)
    entrada [valor = "12"] - pressionamento de tecla: 3 (51)
    entrada [valor = "12"] - tecla: 3 (51)
  ` )
} )

test ( 'deve disparar eventos no elemento atualmente em foco' ,  ( )  =>  {
  const  { element }  =  setup ( `<div> <input /> <input /> </div>` ,  {
    eventHandlers : { keyDown : handleKeyDown } ,
  } )

  const  input1  =  elemento . filhos [ 0 ]
  const  input2  =  elemento . filhos [ 1 ]

  const  text  =  'Olá, mundo!'
  const  changeFocusLimit  =  7
  function  handleKeyDown ( )  {
    if  ( input1 . value . length  ===  7 )  {
      input2 . foco ( )
    }
  }

  userEvent . tipo ( input1 ,  texto )

  esperar ( entrada1 ) . toHaveValue ( text . slice ( 0 ,  changeFocusLimit ) )
  esperar ( entrada2 ) . toHaveValue ( text . slice ( changeFocusLimit ) )
  esperar ( entrada2 ) . toHaveFocus ( )
} )

test ( 'deve substituir o texto selecionado' ,  ( )  =>  {
  const  { element }  =  setup ( '<input value = "hello world" />' )
  const  selectionStart  =  'hello world' . pesquisa ( 'mundo' )
  const  selectionEnd  =  selectionStart  +  'mundo' . comprimento
  elemento . setSelectionRange ( selectionStart ,  selectionEnd )
  userEvent . tipo ( elemento ,  'amigo' )
  esperar ( elemento ) . toHaveValue ( 'olá amigo' )
} )

test ( 'não continua disparando eventos quando desabilitado durante a digitação' ,  ( )  =>  {
  const  { element }  =  setup ( '<input />' ,  {
    eventHandlers : { input : e  =>  ( e . target . disabled  =  true ) } ,
  } )
  userEvent . tipo ( elemento ,  'hi' )
  esperar ( elemento ) . toHaveValue ( 'h' )
} )

function  setupDollarInput ( { initialValue =  '' }  =  { } )  {
  const  returnValue  =  setup ( `<input value =" $ { initialValue } "type =" text "/>` ,  {
    eventHandlers : { input : handleInput } ,
  } )
  deixe  previousValue  =  returnValue . elemento . valor
  function  handleInput ( event )  {
    const  val  =  evento . alvo . valor
    const  withoutDollar  =  val . substituir ( / \ $ / g ,  '' )
    const  num  =  Number (sem dólar )
    if  ( Número . isNaN ( num ) )  {
      evento . alvo . value  =  previousValue
    }  else  {
      evento . alvo . valor  =  `$ $ {sem dólar } `
    }
    previousValue  =  evento . alvo . valor
  }
  return  returnValue
}

test ( 'digitar em uma entrada controlada funciona' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setupDollarInput ( )

  userEvent . tipo ( elemento ,  '23' )

  esperar ( elemento . valor ) . toBe ( '$ 23' )
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: input [value = "$ 23"]
    input [value = ""] - ponteiro
    input [value = ""] - pointerenter
    input [value = ""] - mouseover: Left (0)
    input [value = ""] - mouseenter: Esquerda (0)
    input [value = ""] - ponteiromove
    entrada [valor = ""] - mousemove: Esquerda (0)
    entrada [valor = ""] - ponteiro para baixo
    input [value = ""] - mouseedown: Left (0)
    input [value = ""] - foco
    input [value = ""] - focusin
    entrada [valor = ""] - ponteiroup
    input [value = ""] - mouseup: Left (0)
    entrada [valor = ""] - clique: Esquerda (0)
    input [value = ""] - keydown: 2 (50)
    entrada [valor = ""] - pressionamento de tecla: 2 (50)
    entrada [valor = "2"] - entrada
      "{CURSOR}" -> "$ 2 {CURSOR}"
    input [value = "$ 2"] - keyup: 2 (50)
    input [value = "$ 2"] - keydown: 3 (51)
    entrada [valor = "$ 2"] - pressionamento de tecla: 3 (51)
    entrada [valor = "$ 23"] - entrada
      "$ 2 {CURSOR}" -> "$ 23 {CURSOR}"
    input [value = "$ 23"] - keyup: 3 (51)
  ` )
} )

test ( 'digitar no meio de uma entrada controlada funciona' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setupDollarInput ( { initialValue : '$ 23' } )
  elemento . setSelectionRange ( 2 ,  2 )

  userEvent . tipo ( elemento ,  '1' )

  esperar ( elemento . valor ) . toBe ( '$ 213' )
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: input [value = "$ 213"]
    entrada [valor = "$ 23"] - selecione
    input [value = "$ 23"] - ponteiro
    input [value = "$ 23"] - ponteiroenter
    input [value = "$ 23"] - mouseover: Left (0)
    input [value = "$ 23"] - mouseenter: Left (0)
    entrada [valor = "$ 23"] - movimento do ponteiro
    entrada [valor = "$ 23"] - mousemove: Esquerda (0)
    input [value = "$ 23"] - ponteiro para baixo
    input [value = "$ 23"] - mouseedown: Left (0)
    input [value = "$ 23"] - foco
    input [value = "$ 23"] - focusin
    input [value = "$ 23"] - ponteiroup
    input [value = "$ 23"] - mouseup: Left (0)
    entrada [valor = "$ 23"] - clique: Esquerda (0)
    input [value = "$ 23"] - keydown: 1 (49)
    entrada [valor = "$ 23"] - pressionamento de tecla: 1 (49)
    entrada [valor = "$ 213"] - entrada
      "$ 2 {CURSOR} 3" -> "$ 213 {CURSOR}"
    entrada [valor = "$ 213"] - selecione
    input [value = "$ 213"] - keyup: 1 (49)
  ` )
} )

test ( 'ignorado {backspace} na entrada controlada' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setupDollarInput ( { initialValue : '$ 23' } )
  elemento . setSelectionRange ( 1 ,  1 )

  userEvent . tipo ( elemento ,  '{backspace}' )
  // este é o mesmo comportamento no navegador.
  // em nosso caso, quando você tenta retroceder o "$", nosso manipulador de eventos
  // irá ignorar essa mudança e React redefinirá o valor para o que era
  // antes. Quando o valor é definido programaticamente para algo diferente
  // do que era esperado com base no evento de entrada, o navegador define
  // a seleção começa e termina no final da entrada
  esperar ( elemento . selectionStart ) . toBe ( elemento . valor . comprimento )
  esperar ( elemento . selectionEnd ) . toBe ( elemento . valor . comprimento )
  userEvent . tipo ( elemento ,  '4' )

  esperar ( elemento . valor ) . toBe ( '$ 234' )
  // a barra invertida no instantâneo embutido deve escapar do $ antes de {CURSOR}
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: input [value = "$ 234"]
    entrada [valor = "$ 23"] - selecione
    input [value = "$ 23"] - ponteiro
    input [value = "$ 23"] - ponteiroenter
    input [value = "$ 23"] - mouseover: Left (0)
    input [value = "$ 23"] - mouseenter: Left (0)
    entrada [valor = "$ 23"] - movimento do ponteiro
    entrada [valor = "$ 23"] - mousemove: Esquerda (0)
    input [value = "$ 23"] - ponteiro para baixo
    input [value = "$ 23"] - mouseedown: Left (0)
    input [value = "$ 23"] - foco
    input [value = "$ 23"] - focusin
    input [value = "$ 23"] - ponteiroup
    input [value = "$ 23"] - mouseup: Left (0)
    entrada [valor = "$ 23"] - clique: Esquerda (0)
    input [value = "$ 23"] - keydown: Backspace (8)
    entrada [valor = "23"] - entrada
      "\ $ {CURSOR} 23" -> "$ 23 {CURSOR}"
    entrada [valor = "$ 23"] - tecla: Backspace (8)
    input [value = "$ 23"] - ponteiro
    input [value = "$ 23"] - ponteiroenter
    input [value = "$ 23"] - mouseover: Left (0)
    input [value = "$ 23"] - mouseenter: Left (0)
    entrada [valor = "$ 23"] - movimento do ponteiro
    entrada [valor = "$ 23"] - mousemove: Esquerda (0)
    input [value = "$ 23"] - ponteiro para baixo
    input [value = "$ 23"] - mouseedown: Left (0)
    input [value = "$ 23"] - ponteiroup
    input [value = "$ 23"] - mouseup: Left (0)
    entrada [valor = "$ 23"] - clique: Esquerda (0)
    input [value = "$ 23"] - keydown: 4 (52)
    entrada [valor = "$ 23"] - pressionamento de tecla: 4 (52)
    entrada [valor = "$ 234"] - entrada
      "$ 23 {CURSOR}" -> "$ 234 {CURSOR}"
    input [value = "$ 234"] - keyup: 4 (52)
  ` )
} )

// https://github.com/testing-library/user-event/issues/346
test ( 'digitando em uma área de texto vazia' ,  ( )  =>  {
  const  { element }  =  setup ( '<textarea> </textarea>' )

  userEvent . tipo ( elemento ,  '1234' )
  esperar ( elemento ) . toHaveValue ( '1234' )
} )

// https://github.com/testing-library/user-event/issues/321
test ( 'digitando em uma área de texto com texto existente' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setup ( '<textarea> Olá, </textarea>' )

  userEvent . tipo ( elemento ,  '12' )
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: textarea [value = "Hello, 12"]
    textarea [value = "Hello,"] - ponteiro
    textarea [value = "Hello,"] - pointerenter
    textarea [value = "Hello,"] - mouseover: Left (0)
    textarea [value = "Hello,"] - mouseenter: Left (0)
    textarea [value = "Olá,"] - pointermove
    textarea [value = "Hello,"] - mousemove: Left (0)
    textarea [value = "Hello,"] - pointerdown
    textarea [value = "Hello,"] - mousedown: Left (0)
    textarea [value = "Hello,"] - foco
    textarea [value = "Hello,"] - focusin
    textarea [value = "Olá,"] - pointerup
    textarea [value = "Hello,"] - mouseup: Left (0)
    textarea [value = "Hello,"] - clique: Esquerda (0)
    textarea [value = "Hello,"] - selecione
    textarea [value = "Hello,"] - keydown: 1 (49)
    textarea [value = "Hello,"] - keypress: 1 (49)
    textarea [value = "Hello, 1"] - entrada
      "Olá, {CURSOR}" -> "Olá, 1 {CURSOR}"
    textarea [value = "Hello, 1"] - keyup: 1 (49)
    textarea [value = "Hello, 1"] - keydown: 2 (50)
    textarea [value = "Hello, 1"] - keypress: 2 (50)
    textarea [value = "Hello, 12"] - entrada
      "Olá, 1 {CURSOR}" -> "Olá, 12 {CURSOR}"
    textarea [value = "Hello, 12"] - keyup: 2 (50)
  ` )
  esperar ( elemento ) . toHaveValue ( 'Olá, 12' )
} )

// https://github.com/testing-library/user-event/issues/321
test ( 'aceita um initialSelectionStart e initialSelectionEnd' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setup ( '<textarea> Olá, </textarea>' )
  elemento . setSelectionRange ( 0 ,  0 )

  userEvent . tipo ( elemento ,  '12' ,  {
    initialSelectionStart : elemento . selectionStart ,
    initialSelectionEnd : elemento . selectionEnd ,
  } )
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: textarea [value = "12Hello,"]
    textarea [value = "Hello,"] - selecione
    textarea [value = "Hello,"] - ponteiro
    textarea [value = "Hello,"] - pointerenter
    textarea [value = "Hello,"] - mouseover: Left (0)
    textarea [value = "Hello,"] - mouseenter: Left (0)
    textarea [value = "Olá,"] - pointermove
    textarea [value = "Hello,"] - mousemove: Left (0)
    textarea [value = "Hello,"] - pointerdown
    textarea [value = "Hello,"] - mousedown: Left (0)
    textarea [value = "Hello,"] - foco
    textarea [value = "Hello,"] - focusin
    textarea [value = "Olá,"] - pointerup
    textarea [value = "Hello,"] - mouseup: Left (0)
    textarea [value = "Hello,"] - clique: Esquerda (0)
    textarea [value = "Hello,"] - keydown: 1 (49)
    textarea [value = "Hello,"] - keypress: 1 (49)
    textarea [value = "1Hello,"] - entrada
      "{CURSOR} Olá," -> "1Olá, {CURSOR}"
    textarea [value = "1Hello,"] - selecione
    textarea [value = "1Hello,"] - keyup: 1 (49)
    textarea [value = "1Hello,"] - keydown: 2 (50)
    textarea [value = "1Hello,"] - keypress: 2 (50)
    textarea [value = "12Olá,"] - entrada
      "1 {CURSOR} Olá," -> "12Olá, {CURSOR}"
    textarea [valor = "12Olá,"] - selecione
    textarea [value = "12Hello,"] - keyup: 2 (50)
  ` )
  esperar ( elemento ) . toHaveValue ( '12Hello,' )
} )

// https://github.com/testing-library/user-event/issues/316#issuecomment-640199908
test ( 'pode digitar em uma entrada com o tipo `email`' ,  ( )  =>  {
  const  { element }  =  setup ( '<input type = "email" />' )
  const  email  =  'yo@example.com'
  userEvent . tipo ( elemento ,  e-mail )
  esperar ( elemento ) . toHaveValue ( email )
} )

// https://github.com/testing-library/user-event/issues/336
test ( 'pode digitar "-" nas entradas de número' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setup ( '<input type = "number" />' )
  const  negativeNumber  =  '-3'
  userEvent . tipo ( elemento , número  negativo )
  esperar ( elemento ) . toHaveValue ( - 3 )

  // NOTA: o evento de entrada aqui não muda realmente o valor graças a
  // estranheza com navegadores. Então, o segundo evento de entrada insere tanto o
  // - e o 3. / me revira os olhos
  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: input [value = "- 3"]
    input [value = ""] - ponteiro
    input [value = ""] - pointerenter
    input [value = ""] - mouseover: Left (0)
    input [value = ""] - mouseenter: Esquerda (0)
    input [value = ""] - ponteiromove
    entrada [valor = ""] - mousemove: Esquerda (0)
    entrada [valor = ""] - ponteiro para baixo
    input [value = ""] - mouseedown: Left (0)
    input [value = ""] - foco
    input [value = ""] - focusin
    entrada [valor = ""] - ponteiroup
    input [value = ""] - mouseup: Left (0)
    entrada [valor = ""] - clique: Esquerda (0)
    input [value = ""] - keydown: - (45)
    entrada [valor = ""] - pressionamento de tecla: - (45)
    entrada [valor = ""] - entrada
    entrada [valor = ""] - tecla: - (45)
    input [value = ""] - keydown: 3 (51)
    entrada [valor = ""] - pressionamento de tecla: 3 (51)
    entrada [valor = "- 3"] - entrada
      "{CURSOR}" -> "{CURSOR} -3"
    entrada [valor = "- 3"] - keyup: 3 (51)
  ` )
} )

// https://github.com/testing-library/user-event/issues/336
test ( 'pode digitar "." em entradas de número' ,  ( )  =>  {
  const  { element , getEventSnapshot }  =  setup ( '<input type = "number" />' )
  userEvent . tipo ( elemento ,  '3,3' )
  esperar ( elemento ) . toHaveValue ( 3.3 )

  esperar ( getEventSnapshot ( ) ) . toMatchInlineSnapshot ( `
    Eventos disparados em: input [value = "3,3"]
    input [value = ""] - ponteiro
    input [value = ""] - pointerenter
    input [value = ""] - mouseover: Left (0)
    input [value = ""] - mouseenter: Esquerda (0)
    input [value = ""] - ponteiromove
    entrada [valor = ""] - mousemove: Esquerda (0)
    entrada [valor = ""] - ponteiro para baixo
    input [value = ""] - mouseedown: Left (0)
    input [value = ""] - foco
    input [value = ""] - focusin
    entrada [valor = ""] - ponteiroup
    input [value = ""] - mouseup: Left (0)
    entrada [valor = ""] - clique: Esquerda (0)
    input [value = ""] - keydown: 3 (51)
    entrada [valor = ""] - pressionamento de tecla: 3 (51)
    entrada [valor = "3"] - entrada
      "{CURSOR}" -> "{CURSOR} 3"
    entrada [valor = "3"] - tecla: 3 (51)
    input [value = "3"] - keydown:. (46)
    entrada [valor = "3"] - pressionamento de tecla:. (46)
    entrada [valor = ""] - entrada
      "{CURSOR} 3" -> "{CURSOR}"
    input [value = ""] - keyup:. (46)
    input [value = ""] - keydown: 3 (51)
    entrada [valor = ""] - pressionamento de tecla: 3 (51)
    entrada [valor = "3,3"] - entrada
      "{CURSOR}" -> "{CURSOR} 3,3"
    entrada [valor = "3,3"] - tecla: 3 (51)
  ` )
} )

test ( '- {backspace} 3' ,  ( )  =>  {
  const  { element }  =  setup ( '<input type = "number" />' )
  const  negativeNumber  =  '- {backspace} 3'
  userEvent . tipo ( elemento , número  negativo )
  esperar ( elemento ) . toHaveValue ( 3 )
} )

teste ( '-a3' ,  ( )  =>  {
  const  { element }  =  setup ( '<input type = "number" />' )
  const  negativeNumber  =  '-a3'
  userEvent . tipo ( elemento , número  negativo )
  esperar ( elemento ) . toHaveValue ( - 3 )
} )

test ( 'digitando um valor de entrada inválido' ,  ( )  =>  {
  const  { element }  =  setup ( '<input type = "number" />' )
  userEvent . tipo ( elemento ,  '3-3' )

  // TODO: conserte este bug
  // ISTO É UM BUG! Deve ser esperado (element.value) .toBe ('')
  esperar ( elemento ) . toHaveValue ( - 3 )

  // ESTA É UMA LIMITAÇÃO DO NAVEGADOR
  // É impossível definir programaticamente uma entrada
  // valor para um valor inválido. Não tenho certeza de como contornar isso
  // mas o badInput deve ser realmente "verdadeiro" se o usuário digitar "3-3"
  esperar ( elemento . validade . badInput ) . toBe ( falso )
} )

test ( 'deve dar erro se estivermos tentando chamar o tipo em um elemento inválido' ,  async  ( )  =>  {
  const  { element }  =  setup ( '<div />' )
  espera  espera ( ( )  =>
    userEvent . type ( element ,  "I'm only a div :(" ) ,
  ) . rejeita . toThrowErrorMatchingInlineSnapshot (
    `" o elemento atual é do tipo BODY e não tem um valor válido "` ,
  )
} )
