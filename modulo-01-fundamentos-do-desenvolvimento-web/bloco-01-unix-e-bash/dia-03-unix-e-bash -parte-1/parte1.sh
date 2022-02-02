esperar=2

echo "Criando um diretório \"unix_tests\" e navegando até ele."
mkdir unix_tests
cd unix_tests
sleep $esperar

echo -e "\nCriando um arquivo de texto \"trybe.txt\""
touch trybe.txt
sleep $esperar

echo -e "\nCriando uma cópia do arquivo de texto \"trybe.txt\" para \"trybe_backup.txt\""
cp trybe.txt trybe_backup.txt
sleep $esperar

echo -e "\nRenomeando o arquivo \"trybe.txt\" para \"trybe-2.txt\""
mv trybe.txt trybe-2.txt
sleep $esperar

echo -e "\nCriando um diretório \"backup\""
mkdir backup
sleep $esperar

echo -e "\nMovendo o arquivo \"trybe_backup.txt\" para o diretório \"backup\""
mv trybe_backup.txt backup/trybe_backup.txt
sleep $esperar

echo -e "\nCriando um diretório \"backup2\""
mkdir backup2
sleep $esperar

echo -e "\nMovendo o arquivo \"trybe_backup.txt\" de \"backup/\" para \"backup2/\""
mv backup/trybe_backup.txt backup2/trybe_backup.txt
sleep $esperar

echo -e "\nRemovendo a pasta \"backup\""
rmdir backup
sleep $esperar

echo -e "\nRenomeando a pasta \"backup2\" para \"backup\""
mv backup2/ backup/
sleep $esperar

echo -e "\nMostrando o path completo do diretório atual e os arquivos dendro dele\n"
pwd
ls -a
sleep $esperar

echo ""

for((i = 5; i > 0; i--))
do
echo "Tudo ficara limpo em $i segundos!"
sleep 1
done

clear

echo -e "\nCriando um arquivo chamado \"skills.txt\""
echo -e "Internet\nUnix\nBash\nHTML\nCSS\nJavaScript\nReact\nSQL" > skills.txt
sleep $esperar

echo -e "\nMostrando as 5 primeiras skills do arquivo \"skills.txt\""
head -5 skills.txt
sleep $esperar

echo -e "\nMostrando as 5 últimas skills do arquivo \"skills.txt\""
tail -5 skills.txt
sleep $esperar

echo -e "\nApagando todos os arquivos com o final \".txt\""
rm -rf *.txt
sleep $esperar
