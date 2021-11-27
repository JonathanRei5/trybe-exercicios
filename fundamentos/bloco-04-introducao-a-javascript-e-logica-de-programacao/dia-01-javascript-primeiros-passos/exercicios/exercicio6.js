function movimentoPecaXadrez(nomePeca) {
    nomePeca = nomePeca.toLowerCase();

    switch (nomePeca) {
        case "rei":
            return "O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.";
        case "rainha":
            return "A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.";
        case "bispo":
            return "O bispo move-se ao longo da diagonal. Não pode pular outras peças.";
        case "cavalo":
            return "É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.";
        case "torre":
            return "A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.";
        case "peão":
            return "O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.";
        default:
            return "Nome de peça inválido.";
    }
}

console.log(movimentoPecaXadrez("rei"));