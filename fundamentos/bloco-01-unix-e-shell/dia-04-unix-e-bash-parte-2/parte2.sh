esperar=2

# Exercício 1.
echo "Navegando até a pasta \"unix_tests\""
cd unix_tests
sleep $esperar

# Exercício 2.
echo -e "\nVendo as permissões dos arquivos\n"
ls -l
sleep $esperar

# Exercício 3.
echo -e "\nMudando a permissão do arquivo \"bunch_of_things.txt\" para que todos os usuários possam ter acesso à leitura e escrita\ne verificando com o comando \"ls -l\"\n"
chmod a=rw bunch_of_things.txt
ls -l
sleep $esperar

# Exercício 4.
echo -e "\nTirando a permissão de escrita do arquivo \"bunch_of_things.txt\" para todos os usuários e verificando com o comando \"ls -l\"\n"
chmod a-w bunch_of_things.txt
ls -l
sleep $esperar

# Exercício 5.
echo -e "\nVoltando para as permissões listadas inicialmente\n"
chmod 644 bunch_of_things.txt
ls -l
sleep $esperar
