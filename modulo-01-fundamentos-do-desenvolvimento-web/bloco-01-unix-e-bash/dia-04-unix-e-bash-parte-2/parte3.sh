esperar=2

# Exercício 1.
echo "Listando todos os processos"
ps
sleep $esperar

# Exercício 2.
echo -e "\nUsando o comando \"sleep 30 &\""
sleep 30 &
sleep $esperar

# Exercício 3.
echo -e "\nEncontrando o PID do comando \"sleep 30 &\" e terminando sua execução"
kill -KILL $(jobs -pr "sleep 30")
sleep $esperar

# Exercício 4.
# Executando o "sleep 30" em segundo plano para não interromper o processo do script
# Para parar o sleep em primeiro plano tem que apertar "Ctrl+Z" e depois
# usar o comando "bg" para colocar em segundo plano
echo -e "\nExecutando o comando \"sleep 30\" em background"
sleep 30 &
sleep $esperar

# Exercício 5.
echo -e "\nCriando um processo em background que rode o comando sleep por 300 segundos"
sleep 300 &
sleep $esperar

# Exercício 6.
echo -e "\nCriando mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente. E suspendendo esses processos."
sleep 200 &
sleep 100 &
kill -STOP $(jobs -p "sleep 200")
kill -STOP $(jobs -p "sleep 100")
sleep $esperar

# Exercício 7.
# Todos os processos aparecem como executando porque foram executados pelo script,
# mas os processos "sleep 200" e "sleep 100" estão parados
echo -e "\nVerificando a execução dos processos e suspendendo o \"sleep 300\"\n"
jobs
kill -STOP $(jobs -p "sleep 300")
sleep $esperar

# Exercício 8.
echo -e "\nRetornando a execução do processo sleep 100 em background com o comando bg"
bg %?"sleep 100"
sleep $esperar

# Exercício 9.
echo -e "\nTerminando a execução de todos os processos sleep"
killall -KILL sleep
sleep $esperar
