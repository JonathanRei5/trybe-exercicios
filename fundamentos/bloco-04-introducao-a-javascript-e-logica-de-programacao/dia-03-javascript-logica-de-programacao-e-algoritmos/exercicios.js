const linha = "------------------------------------------------------------------";

let n = 7;

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

// Exercício 4
console.log("Exercício 4:");
if (n <= 2 || (n % 2) === 0)
    console.log("\"n\" precisa ser maior que 2 e ímpar");
else {
    for (let i = 1; i <= n; i += 2) {
        let l = "";
        for (let j = 0; j < ((n - i) / 2); j += 1)
            l += " ";
        for (let k = 0; k < i; k += 1)
            l += "*";
        for (let m = 0; m < ((n - i) / 2); m += 1)
            l += " ";
        console.log(l);
    }
}
console.log(linha);

// Bônus

// Exercício bônus 5
console.log("Exercício bônus 5:");
if (n <= 2 || (n % 2) === 0)
    console.log("\"n\" precisa ser maior que 2 e ímpar");
else {
    for (let i = 1; i <= n; i += 2) {
        let l = "";
        for (let j = 0; j < ((n - i) / 2); j += 1)
            l += " ";
        for (let k = 0; k < i; k += 1) {
            if (k === 0 || k === (i - 1) || i === n)
                l += "*";
            else
                l += " ";
        }
        for (let m = 0; m < ((n - i) / 2); m += 1)
            l += " ";
        console.log(l);
    }
}
console.log(linha);

// Exercício bônus 6
console.log("Exercício bônus 6:");
if (n < 1)
    console.log("\"n\" precisa ser maior que 0");
else if (n === 1)
    console.log("O número 1 não é primo.");
else {
    let primo = true;
    for (let i = 2; (i * i) <= n; i += 1) {
        if ((n % i) === 0) {
            primo = false;
            break;
        }
    }
    if (primo)
        console.log("O número " + n + " é primo.");
    else
        console.log("O número " + n + " não é primo.");
}
console.log(linha);
