function maiorNumero(a, b, c) {
    let maior = a;

    if (b > maior)
        maior = b;
    if (c > maior)
        maior = c;

    return maior;
}

const a = 10;
const b = 100;
const c = 1000;

console.log(maiorNumero(a, b, c) + " é maior.");