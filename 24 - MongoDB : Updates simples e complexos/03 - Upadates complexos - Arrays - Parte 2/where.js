/*
Operador $where
O operador $where pode ser utilizado para passar
 uma string contendo uma expressão ou função JavaScript
 . Esse operador é muito flexível, mas requer que o
 banco de dados processe a expressão ou função passada
  para cada documento na coleção. O documento é
  referenciado na expressão ou função
  usando this ou obj .
O operador $where não será explorado porque,
 na versão 3.6 do MongoDB , um outro operador, $expr ,
 que será visto a seguir, passou a suportar expressões
 de agregação. O operador $expr é mais rápido do que o $where
  porque não executa JavaScript .
  Recomendamo utilizar o $expr utilizá-lo
   sempre que possível, mas trazemos o $where para mostrar
    que ele existe 😄!
    */

    db.players.find( { $where: function() {
      return (hex_md5(this.name) == "9b53e667f30cd329dca1ec9e6a83e994")
   } } );

   db.players.find( {$expr: { $function: {
    body: function(name) { return hex_md5(name) == "9b53e667f30cd329dca1ec9e6a83e994"; },
    args: [ "$name" ],
    lang: "js"
} } } )