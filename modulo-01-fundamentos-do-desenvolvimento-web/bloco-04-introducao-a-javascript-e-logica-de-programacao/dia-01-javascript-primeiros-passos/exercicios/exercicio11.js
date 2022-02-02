function subtrairINSS(salario) {
    const faixaSalarial1 = 1556.94;
    const faixaSalarial2 = 2594.92;
    const faixaSalarial3 = 5189.82;

    const aliquotaFaixa1 = 0.08;
    const aliquotaFaixa2 = 0.09;
    const aliquotaFaixa3 = 0.11;
    const aliquotaMaxima = 570.88;

    if (salario <= faixaSalarial1)
        return salario - (salario * aliquotaFaixa1);
    else if (salario <= faixaSalarial2)
        return salario - (salario * aliquotaFaixa2);
    else if (salario <= faixaSalarial3)
        return salario - (salario * aliquotaFaixa3);
    else
        return salario - aliquotaMaxima;
}

function subtrairIR(salario) {
    const faixaSalarial1 = 1903.98;
    const faixaSalarial2 = 2826.65;
    const faixaSalarial3 = 3751.05;
    const faixaSalarial4 = 4664.68;

    const aliquotaFaixa2 = 0.075;
    const aliquotaFaixa3 = 0.15;
    const aliquotaFaixa4 = 0.225;
    const aliquotaFaixa5 = 0.275;

    const parcelaFaixa2 = 142.80;
    const parcelaFaixa3 = 354.80;
    const parcelaFaixa4 = 636.13;
    const parcelaFaixa5 = 869.36;

    if (salario <= faixaSalarial1)
        return salario;
    else if (salario <= faixaSalarial2)
        return salario - ((salario * aliquotaFaixa2) - parcelaFaixa2);
    else if (salario <= faixaSalarial3)
        return salario - ((salario * aliquotaFaixa3) - parcelaFaixa3);
    else if (salario <= faixaSalarial4)
        return salario - ((salario * aliquotaFaixa4) - parcelaFaixa4);
    else
        return salario - ((salario * aliquotaFaixa5) - parcelaFaixa5);
}

let salarioBruto = 3000;

let salarioLiquido = subtrairIR(subtrairINSS(salarioBruto));

console.log("Salário bruto = " + salarioBruto);
console.log("Salário líquido = " + salarioLiquido);