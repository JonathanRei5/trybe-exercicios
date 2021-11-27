function verificarNumero(valor) {
    if (valor > 0)
        return "positive";
    else if (valor < 0)
        return "negative";
    else
        return "zero";
}

const valor = 1;

console.log(verificarNumero(valor));