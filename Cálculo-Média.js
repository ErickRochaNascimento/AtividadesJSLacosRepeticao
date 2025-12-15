let notas = [8.5, 7.0, 9.2, 6.8, 10.0];
let soma = 0;

for (let nota of notas) {
  soma += nota;
}

let media = soma / notas.length;
console.log(`Média: ${media}`);
