// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código

function fibonacci(numero){
    const sequence = [0, 1];
    let x;

    for (let i = 2; i < numero; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    console.log(sequence);
    return checkValues(sequence, numero);

}

function checkValues(sequence, numero) {
    for (let i = 0; i < sequence.length; i++) {
      if (sequence[i] === numero) {
        return "O valor foi encontrado no array";
      }
    }
    return "O valor não está no array";
  }

const numero = 10;
console.log(fibonacci(numero));

