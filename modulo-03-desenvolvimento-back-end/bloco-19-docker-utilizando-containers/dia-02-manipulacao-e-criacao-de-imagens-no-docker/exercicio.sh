#!/bin/bash

wait=2

if [[ ! $(docker images | grep ^cowsay) ]]; then
  echo "Gerando uma imagem a partir do Dockerfile"
  docker image build -t cowsay .
  sleep $wait
  echo ""
fi

echo "Executando um contêiner baseado na imagem cowsay sem passar nenhum comando"
docker container run cowsay
sleep $wait

echo -e "\nExecutando um contêiner baseado na imagem cowsay passando uma mensagem"
docker container run cowsay "XABLAU"
sleep $wait

echo -e "\nExecutando um contêiner baseado na imagem cowsay passando uma mensagem"
docker container run cowsay -f dragon-and-cow "VQM TRYBE"
sleep $wait

echo -e "\nExecutando um contêiner baseado na imagem cowsay passando uma mensagem"
docker container run cowsay -f elephant-in-snake "Acho que comi demais!"
sleep $wait
