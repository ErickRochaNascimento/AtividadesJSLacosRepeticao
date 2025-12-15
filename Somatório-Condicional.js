let soma = 0;
let numero = 1;
let contador = 0;

while (soma < 150) {
  soma += numero;
  numero++;
  contador++;
}

console.log(`Soma final: ${soma}`);
console.log(`Quantidade de números somados: ${contador}`);

