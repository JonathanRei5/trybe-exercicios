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
        for (let i = 0; i < n; i += 1) {
            l += "*";
        }
        console.log(l);
    }
}
console.log(linha);
