function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    return a / b;
}
function modulo(a, b) {
    return a % b;
}

const a = 5;
const b = 2;

console.log(a + " + " + b + " = " + soma(a, b));
console.log(a + " - " + b + " = " + subtracao(a, b));
console.log(a + " * " + b + " = " + multiplicacao(a, b));
console.log(a + " / " + b + " = " + divisao(a, b));
console.log(a + " % " + b + " = " + modulo(a, b));