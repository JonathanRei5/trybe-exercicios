esperar=0
esperar_mais=5

echo "Listando todos os processos\n"
ps
sleep $esperar

echo -e "\nUsando o comando \"sleep 30 &\""
sleep 30 &
sleep $esperar

echo -e "\nEncontrando o PID do comando \"sleep 30 &\" e terminando sua execução\n"
PID=$(jobs -pr "sleep 30")
kill -9 $PID
ps
sleep $esperar

echo -e "\nExecutando o comando \"sleep 30\" aperte \"ctrl+z\" para parar o processo\n"
sleep 30
ps
sleep $esperar
