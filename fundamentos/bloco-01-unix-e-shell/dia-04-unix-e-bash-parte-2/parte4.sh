esperar=2
esperar_mais=10

# Exercício 1.
echo "Em $esperar_mais segundos o comando \"cmatrix\" será executado, quando estiver se sentindo como o Neo, aperte Ctrl+C para voltar ao terminal"
sleep $esperar_mais
cmatrix

# Exercício 2.
echo -e "\nExecutando o comando \"fortune\" e colocando o resultado em um arquivo chamado \"fortune.txt\""
fortune > fortune.txt
sleep $esperar

# Exercício 3.
echo -e "\nContando quantas palavras tem a frase da sorte do dia"
wc -w fortune.txt
sleep $esperar
