function converterNota(nota) {
    if (nota < 0 || nota > 100) {
        return "Nota inválida. Informe um valor entre 0 e 100."
    }

    if (nota >= 90)
        return "A";
    if (nota >= 80)
        return "B";
    if (nota >= 70)
        return "C";
    if (nota >= 60)
        return "D";
    if (nota >= 50)
        return "E";
    else
        return "F";
}

console.log(converterNota(95));