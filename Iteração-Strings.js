let texto = "Programação Web";
let vogais = "aeiouAEIOU";

for (let letra of texto) {
    if (vogais.includes(letra)) {
        console.log(letra);
    }
}