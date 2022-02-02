function lucro(valorCompra, valorVenda) {
    if (valorCompra < 0 || valorVenda < 0) {
        console.log("Valores inválidos. Os valores não podem ser menor que ZERO.")
        return undefined;
    }

    custoTotal = valorCompra * 1.2;
    const lucro = valorVenda - custoTotal;

    return lucro;
}

const valorCompra = 1100;
const valorVenda = 1500;

console.log(lucro(valorCompra, valorVenda));