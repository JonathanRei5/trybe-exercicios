function ehTriangulo(angulo1, angulo2, angulo3) {
    if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
        console.log("Erro | O ângulo precisa ser maior que zero.");
        return undefined;
    }
    else if ((angulo1 + angulo2 + angulo3) == 180)
        return true;
    else
        return false;
}

const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

console.log(ehTriangulo(angulo1, angulo2, angulo3));