wait=2

# Exercício 1
echo "Link da Imagem da Distribuição Linux Debian: https://hub.docker.com/_/debian"
sleep $wait

# Exercício 2
echo "\nBaixando a imagem localmente"
docker pull debian
sleep $wait

# Exercício 3
echo "\nBaixando a versão reduzida da imagem"
docker pull debian:stable-slim
sleep $wait

# Exercícios 4, 5 e 6
echo "\nCriando e executando um contêiner no modo interativo"
echo "O comando \"cat /etc/*-release\" retorna os dados da distribuição Debian"
echo "O comando \"exit\" encerra a execução da distribuição Debian"
docker container run -it debian:stable-slim
sleep $wait

# Exercício 7
echo "\nVerificando a lista de contêiners"
docker container ls -a
sleep $wait
