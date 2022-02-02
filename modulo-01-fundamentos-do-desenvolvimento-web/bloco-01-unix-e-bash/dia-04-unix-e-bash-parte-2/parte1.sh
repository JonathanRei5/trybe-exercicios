esperar=2

# Exercício 1.
echo "Navegando até a pasta \"unix_tests\""
cd unix_tests
sleep $esperar

# Exercício 2.
echo -e "\nCriando um arquivo \"skills2.txt\" e adicionando os valores \"Internet\", \"Unix\" e \"Bash\", um em cada linha"
echo -e "Internet\nUnix\nBash" > skills2.txt
sleep $esperar

# Exercício 3.
echo -e "\nAdicionado mais 5 itens no arquivo \"skills2.txt\" e imprimindo a lista em ordem\n"
echo -e "HTML\nCSS\nJavaScript\nReact\nSQL" >> skills2.txt
sort skills2.txt
sleep $esperar

# Exercício 4.
echo -e "\nContando as linhas do arquivo \"skills2.txt\""
wc -l skills2.txt
sleep $esperar

# Exercício 5.
echo -e "\nCriando um arquivo \"top_skills.txt\" usando o \"skills2.txt\", contendo as 3 primeiras skills em ordem alfabética"
sort skills2.txt | head -3 > top_skills.txt
sleep $esperar

# Exercício 6.
echo -e "\nCriando um arquivo \"phrases2.txt\" e adicionando algumas frases"
echo -e "Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.\nNão permito que nenhuma reflexão filosófica me tire a alegria das coisas simples da vida.\nA amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.\nTudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado." > phrases2.txt
sleep $esperar

# Exercício 7.
echo -e "\nContando o número de linhas que contem \"br\" no arquivo \"phrases2.txt\""
grep -c br phrases2.txt
sleep $esperar

# Exercício 8.
echo -e "\nContando o número de linhas que NÃO contem \"br\" no arquivo \"phrases2.txt\""
grep -vc br phrases2.txt
sleep $esperar

# Exercício 9.
echo -e "\nAdicionando dois nomes de países ao final do arquivo \"phrases2.txt\""
echo -e "Brasil\nEstados Unidos" >> phrases2.txt
sleep $esperar

# Exercício 10.
echo -e "\nCriando um arquivo \"bunch_of_things.txt\" com os conteúdos dos arquivos \"phrases2.txt\" e \"countries.txt\""
cat phrases2.txt countries.txt > bunch_of_things.txt
sleep $esperar

# Exercício 11.
echo -e "\nOrdenando o arquivo \"bunch_of_things.txt\""
sort -o bunch_of_things.txt bunch_of_things.txt
sleep $esperar
