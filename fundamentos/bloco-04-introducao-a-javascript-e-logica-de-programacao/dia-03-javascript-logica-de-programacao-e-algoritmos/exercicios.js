const linha = "------------------------------------------------------------------";

let n = 5;

// Exercício 1
console.log(linha);
console.log("Exercício 1:");
if (n <= 1)
    console.log("\"n\" precisa ser maior que 1");
else {
    for (let i = 0; i < n; i += 1) {
        let l = "";
        for (let j = 0; j < n; j += 1) {
            l += "*";
        }
        console.log(l);
    }
}
console.log(linha);

// Exercício 2
console.log("Exercício 2:");
if (n <= 1)
    console.log("\"n\" precisa ser maior que 1");
else {
    for (let i = 1; i <= n; i += 1) {
        let l = "";
        for (let j = 0; j < i; j += 1) {
            l += "*";
        }
        console.log(l);
    }
}
console.log(linha);

// Exercício 3
console.log("Exercício 3:");
if (n <= 1)
    console.log("\"n\" precisa ser maior que 1");
else {
    for (let i = 1; i <= n; i += 1) {
        let l = "";
        for (let j = 0; j < (n - i); j += 1)
            l += " ";
        for (let k = 0; k < i; k += 1)
            l += "*";
        console.log(l);
    }
}
console.log(linha);
