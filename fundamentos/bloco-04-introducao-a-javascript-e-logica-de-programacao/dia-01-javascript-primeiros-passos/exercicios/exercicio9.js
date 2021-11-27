function temImpar(n1, n2, n3) {
    if (!((n1 % 2) === 0) || !((n2 % 2) === 0) || !((n3 % 2) === 0))
        return true;
    else
        return false;
}

const a = 10;
const b = 20;
const c = 31;

console.log(temImpar(a, b, c));