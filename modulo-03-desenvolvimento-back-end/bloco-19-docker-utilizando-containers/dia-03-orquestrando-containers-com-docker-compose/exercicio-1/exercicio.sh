# !/bin/bash

WAIT=2

echo "Criando um arquivo HTML"
cat missao_trybe_antes.html > htdocs/missao_trybe.html
sleep $WAIT

if [[ $(docker container ls -a | grep server_missao_trybe) ]]; then
  echo -e "\nRemovendo o container server_missao_trybe"
  docker container rm -f server_missao_trybe
fi
echo -e "\nCriando container para manter um servidor httpd:2.4 Apache"
docker container run --name server_missao_trybe -itd -p 4545:80 -v "$PWD"/htdocs:/usr/local/apache2/htdocs/ httpd:2.4
sleep $WAIT

echo -e "\nLink da página HTML"
echo "http://localhost:4545/missao_trybe.html"
if [[ ! $(which xdg-open | grep 'not found') ]]; then
    xdg-open http://localhost:4545/missao_trybe.html
fi
sleep $WAIT

echo -e "\nAlterando o arquivo HTML"
cat missao_trybe_depois.html > htdocs/missao_trybe.html
sleep $WAIT

echo -e "\nListando os containers para obtendo o id do container httpd:2.4"
docker container ls
sleep $WAIT

echo -e "\nVerificando o volume do container no Docker Host"
docker container inspect server_missao_trybe | egrep Source
sleep $WAIT

echo -e "\nParando o container"
docker container stop server_missao_trybe
sleep $WAIT

echo -e "\nExcluindo o container"
docker container rm server_missao_trybe
sleep $WAIT

echo -e "\nVerificando se a pasta permanece no mesmo lugar"
if [ -d htdocs ]; then
  echo "A pasta permanece no mesmo lugar"
  echo "$PWD"/htdocs
else 
  echo "A pasta não permanece no mesmo lugar"
fi
sleep $WAIT

echo -e "\nObtendo o IMAGE ID do servidor"
docker images -q httpd:2.4
sleep $WAIT

echo -e "\nExcluindo a imagem"
docker image rm -f $(docker images -q httpd:2.4)
sleep $WAIT
