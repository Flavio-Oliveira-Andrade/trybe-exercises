const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
oddsAndEvens.sort((a, b) => b - a)
console.log(oddsAndEvens)

const factorial = number => {
  let result = 1

  for (let index = 2; index <= number; index += 1) {
      result *= i
  }

  return result
}
console.log(factorial(5))


const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(3))

// qual a maior palavra d a string
//longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'

const longestWord = text => {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length
          result = word
      }
  }

  return result
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))


const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))