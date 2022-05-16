wait=2
waitMore=10

# Exercício 1
echo "Link da Imagem da Distribuição Linux Debian: https://hub.docker.com/_/debian"
sleep $wait

# Exercício 2
echo -e "\nBaixando a imagem localmente"
docker pull debian
sleep $wait

# Exercício 3
echo -e "\nBaixando a versão reduzida da imagem"
docker pull debian:stable-slim
sleep $wait

Exercícios 4, 5 e 6
echo -e "\nCriando e executando um contêiner no modo interativo"
echo "O comando \"cat /etc/*-release\" retorna os dados da distribuição Debian"
echo "O comando \"exit\" encerra a execução da distribuição Debian"
docker container run -it --name debian -it debian:stable-slim
sleep $wait

# Exercício 7
echo -e "\nVerificando a lista de contêiners"
docker container ls -a
sleep $wait

# Exercício 8
echo -e "\nIniciando o mesmo contêiner"
docker container start debian
echo "Verificando se ele está ativo na lista de contêiners"
docker container ls -a
sleep $wait

# Exercícios 9, 10 e 11
echo -e "\nRetomando o contêiner"
echo "O comando \"cat /etc/debian_version\" retorna a versão atual do sistema do contêiner"
echo "O comando \"exit\" encerra o terminal"
docker container exec -it debian bash
sleep $wait

# Exercício 12
echo -e "\nParando o contêiner para remove-lo"
docker container stop debian
echo "Removendo o contêiner"
docker container rm debian
sleep $wait

# Exercícios 13 e 14
echo -e "\nCriando e rodando a imagem andrius/ascii-patrol"
echo "Os botões \"Ctrl + C\" encerra o contêiner"
echo "Iniciando..."
sleep $waitMore
docker container run -it --rm andrius/ascii-patrol
reset
