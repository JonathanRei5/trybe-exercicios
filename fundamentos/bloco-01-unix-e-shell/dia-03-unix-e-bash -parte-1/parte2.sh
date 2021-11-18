esperar=2
esperar_mais=20

echo "Entrando na pasta unix_tests"
cd unix_tests
echo -e "\nBaixando o arquivo \"countries.txt\"\n"
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
sleep $esperar

echo -e "\nMostrando na tela todo o conteúdo do arquivo \"countries.txt\"\n"
sleep $esperar
cat countries.txt

echo -e "\n\nEm $esperar_mais segundos será mostrado na tela todo o conteúdo do arquivo \"countries.txt\" em páginas"
echo -e "Aperte \"espaço\" no teclado para navegar pelas páginas até encontrar o país Zambia"
echo -e "Para voltar para o terminal aperte \"Q\" no teclado\n"
sleep $esperar_mais
less countries.txt

echo -e "Novamente será mostrado na tela todo o conteúdo do arquivo \"countries.txt\" em páginas"
echo -e "Digite \"/Zambia\" sem aspas e aperte enter para encontrar o país"
echo -e "Para voltar para o terminal aperte \"Q\" no teclado"
sleep $esperar_mais
less countries.txt

echo -e "\nProcurando por \"Brazil\" no arquivo \"countries.txt\""
sleep $esperar
grep 'Brazil' countries.txt

echo -e "\nProcurando por \"brazil\" no arquivo \"countries.txt\""
sleep $esperar
grep 'brazil' countries.txt

echo -e "\nCriando um arquivo chamado \"phrases.txt\" e adicionando frases"
sleep $esperar
echo -e "Isso é uma frase, confia!\nEstou sem criatividade para criar frases.\nDo Rocky Balboa serve?\nNiguém baterá tão forte quanto a vida. Porém, não se trata de quão forte pode bater, se trata de quão forte pode ser atingido e continuar seguindo em frente. É assim que a vitória é conquistada." > phrases.txt

echo -e "\nBuscando pelas frases que não contenham a palavra \"fox\".\n"
sleep $esperar
grep -v isso phrases.txt

echo -e "\nContando o número de palavras do arquivo \"phrases.txt\""
sleep $esperar
wc -w phrases.txt

echo -e "\nContando o número de linhas do arquivo \"phrases.txt\""
sleep $esperar
wc -l phrases.txt

echo -e "\nCriando os arquivos \"empty.tbt\" e \"empty.pdf\"."
sleep $esperar
touch empty.tbt empty.pdf

echo -e "\nListando todos os arquivos do diretório \"unix_tests\".\n"
sleep $esperar
ls

echo -e "\nListando todos os arquivos que terminam com \"txt\"\n"
sleep $esperar
find -name "*.txt"

echo -e "\nListando todos os arquivos que terminam com \"tbt\" ou \"txt\"\n"
sleep $esperar
find -name "*.t?t"

echo -e "\nAcessando o manual do comando \"ls\""
echo -e "Aperte \"espaço\" no teclado para navegar pelas páginas"
echo -e "Para voltar para o terminal aperte \"Q\" no teclado\n"
sleep $esperar_mais
man ls
