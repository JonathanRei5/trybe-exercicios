function temPar(n1, n2, n3) {
    if ((n1 % 2) === 0 || (n2 % 2) === 0 || (n3 % 2) === 0)
        return true;
    else
        return false;
}

const a = 3;
const b = 5;
const c = 6;

console.log(temPar(a, b, c));