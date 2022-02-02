esperar=2
esperar_mais=10

# Para executar esse script é necessário os seguintes pacotes
# cmatrix
# fortune
# wc
# sl
# cowsay
# factor
# rev
# telnet

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

# Exercício 4.
echo -e "\nExecutando o comando \"sl\""
sleep $esperar
sl -F

# Exercício 5.
echo -e "\nExecutando o comando \"cowsay\""
sleep $esperar
cowsay "Olá Mundo!"
cowsay < fortune.txt

# Exercício 6.
echo -e "\nDescobrindo os fatores primos do número 42 usando o comando \"factor\""
factor 42
sleep $esperar

# Exercício 7.
echo -e "\nSorte do dia ao contrário"
rev < fortune.txt
sleep $esperar

# Exercício 8.
echo -e "\nExecutando o comando \"telnet towel.blinkenlights.nl\""
sleep $esperar
telnet towel.blinkenlights.nl
