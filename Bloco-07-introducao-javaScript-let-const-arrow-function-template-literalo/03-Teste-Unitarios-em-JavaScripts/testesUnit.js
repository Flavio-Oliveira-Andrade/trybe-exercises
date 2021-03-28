const assert = require ('assert');

// assert.strictEqual()
// assert.deepStrictEqual()
// assert.notStrictEqual()
// assert.ok()
// assert.fail()

// assert.strictEqual(50, 50); // sem erros: 50 == 50;
// assert.strictEqual(50, 70, 'é diferente'); // assert error; 50 == 70;

// const div = ( x, y ) => {
//   return x / y;
// }
// const expected = div (9, 3);
// assert.strictEqual(expected, 3, 'nove dividido por 3 é igual a 3');

// const assert = require('assert');
const division =(num1, num2) => {
 if(num1 === 0){
    throw new Error( 'parameter num1 must not be 0');
 }
 return num1 / num2;
}

try {
  throw new Error('Oooops!');
} catch (e) {
  alert(e.name + ': ' + e.message);
}

assert.strictEqual(division(10,2), 5);
// assert.strictEqual(division(10, 0), 0);
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK

function UserException(message) {
  this.message = message;
  this.name = "UserException";
}
function getMonthName(mo) {
  mo = mo-1; // Ajusta o número do mês para index de array (1=Jan, 12=Dec)
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
     "Aug", "Sep", "Oct", "Nov", "Dec"];
  if (months[mo] !== undefined) {
     return months[mo];
  } else {
     throw new UserException("InvalidMonthNo");
  }
}

try {
  // statements to try
  var myMonth = 15; // 15 is out of bound to raise the exception
  monthName = getMonthName(myMonth);
} catch (e) {
  monthName = "unknown";
  logMyErrors(e.message, e.name); // pass exception object to err handler
}

/*
 * Cria um objeto ZipCode.
 *
 * Formatos aceitos para o CEP são:
 *    12345
 *    12345-6789
 *    123456789
 *    12345 6789
 *
 * Se o argumento passado para o construtor do ZipCode não atende
 * a um desses padrões uma exceção é lançada.
 */

function ZipCode(zip) {
  zip = new String(zip);
  pattern = /[0-9]{5}([- ]?[0-9]{4})?/;
  if (pattern.test(zip)) {
     // o valor do CEP será a primeira combinação na string
     this.value = zip.match(pattern)[0];
     this.valueOf = function() {
        return this.value
     };
     this.toString = function() {
        return String(this.value)
     };
  } else {
     throw new ZipCodeFormatException(zip);
  }
}

function ZipCodeFormatException(value) {
  this.value = value;
  this.message = "does not conform to the expected format for a zip code";
  this.toString = function() {
     return this.value + this.message;
  };
}

/*
* Isso poderia estar em um script que valida dados de endereços
* para os endereços dos Estados Unidos.
*/

const ZIPCODE_INVALID = -1;
const ZIPCODE_UNKNOWN_ERROR = -2;

function verifyZipCode(z) {
  try {
     z = new ZipCode(z);
  } catch (e) {
     if (e instanceof ZipCodeFormatException) {
        return ZIPCODE_INVALID;
     } else {
        return ZIPCODE_UNKNOWN_ERROR;
     }
  }
  return z;
}

a = verifyZipCode(95060);         // retorna 95060
b = verifyZipCode(9560);          // retorna -1
c = verifyZipCode("a");           // retorna -1
d = verifyZipCode("95060");       // retorna 95060
e = verifyZipCode("95060 1234");  // retorna 95060 1234

// Cria um novo objeto que herda o construtor de Error através do prototype.
function MeuErro(message) {
  this.name = 'MeuErro';
  this.message = message || 'Mensagem de erro padrão';
  this.stack = (new Error()).stack;
}
MeuErro.prototype = Object.create(MeuErro.prototype);
MeuErro.prototype.constructor = MeuErro;

try {
  throw new MeuErro();
} catch (e) {
  console.log(e.name);     // 'MeuErro'
  console.log(e.message);  // 'Mensagem de erro padrão'
}

try {
  throw new MeuErro('Mensagem customizada');
} catch (e) {
  console.log(e.name);     // 'MeuErro'
  console.log(e.message);  // 'Mensagem customizada'
}
