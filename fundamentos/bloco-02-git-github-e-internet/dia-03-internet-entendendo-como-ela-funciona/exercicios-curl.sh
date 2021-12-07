esperar=2

# Exercício 1
echo -e "Exercício 1: ------------------------------------------------------\n"
curl https://httpbin.org/
sleep $esperar

# Exercício 2
echo -e "\n\nExercício 2: ------------------------------------------------------\n"
curl https://httpbin.org/anything
sleep $esperar

# Exercício 3
echo -e "\n\nExercício 3: ------------------------------------------------------\n"
curl -X POST https://httpbin.org/anything
sleep $esperar

# Exercício 4
echo -e "\n\nExercício 4: ------------------------------------------------------\n"
curl https://httpbin.org/anything?value=panda
sleep $esperar

# Exercício 5
echo -e "\n\nExercício 5: ------------------------------------------------------\n"
curl -o robots.txt www.google.com/robots.txt
sleep $esperar

# Exercício 6
echo -e "\n\nExercício 6: ------------------------------------------------------\n"
curl https://httpbin.org/anything -H "User-Agent: elephant"
sleep $esperar

# Exercício 7
echo -e "\n\nExercício 7: ------------------------------------------------------\n"
curl -X DELETE https://httpbin.org/anything
sleep $esperar

# Exercício 8
echo -e "\n\nExercício 8: ------------------------------------------------------\n"
curl https://httpbin.org/anything -i
sleep $esperar

# Exercício 9
echo -e "\n\nExercício 9: ------------------------------------------------------\n"
curl -X POST -d '{"value": "panda"}' https://httpbin.org/anything
sleep $esperar

# Exercício 10
echo -e "\n\nExercício 10: ------------------------------------------------------\n"
curl -X POST -H "Content-Type: application/json" -d '{"value": "panda"}' https://httpbin.org/anything
sleep $esperar

# Exercício 11
echo -e "\n\nExercício 11: ------------------------------------------------------\n"
curl -H "Accept-Encoding: gzip" https://httpbin.org/anything
sleep $esperar
# Aconteceu nada porque o servidor não aceita esse formato de compressão

# Exercício 12
echo -e "\n\nExercício 12: ------------------------------------------------------\n"
curl -X POST -H 'Content-Type: application/json' -d @JSONs.json https://httpbin.org/anything
sleep $esperar

# Exercício 13
echo -e "\n\nExercício 13: ------------------------------------------------------\n"
curl -H 'Accept: image/png' -o img/imagem-png.png https://httpbin.org/image
curl -H 'Accept: image/jpeg' -o img/imagem-jpeg.jpeg https://httpbin.org/image
curl -H 'Accept: image/webp' -o img/imagem-webp.webp https://httpbin.org/image
curl -H 'Accept: image/svg+xml' -o img/imagem-svg-xml.xml https://httpbin.org/image
curl -H 'Accept: image/svg+xml' -o img/imagem-svg-xml.svg https://httpbin.org/image
curl -H 'Accept: image/*' -o img/imagem-all https://httpbin.org/image
sleep $esperar

# Exercício 14
echo -e "\n\nExercício 14: ------------------------------------------------------\n"
curl -X PUT https://httpbin.org/anything
sleep $esperar

# Exercício 15
echo -e "\n\nExercício 15: ------------------------------------------------------\n"
curl -o img/imagem-jpeg2.jpeg https://httpbin.org/image/jpeg
sleep $esperar

# Exercício 16
echo -e "\n\nExercício 16: ------------------------------------------------------\n"
curl -i https://www.twitter.com
sleep $esperar
# A resposta estava vazia porque o twitter mudou de domínio
# de www.twitter.com para twitter.com. O servidor retornou erro 301
# avisando sobre a mudança.

# Exercício 17
echo -e "\n\nExercício 17: ------------------------------------------------------\n"
curl -H 'chihuahua: dinossauro' -H 'ornitorrinco: tardigrado' -H 'panda: elefante' https://httpbin.org/anything
sleep $esperar

# Exercício 18
echo -e "\n\nExercício 18: ------------------------------------------------------\n"
curl https://httpbin.org/status/404 https://httpbin.org/status/200
curl -i https://httpbin.org/status/404 https://httpbin.org/status/200
sleep $esperar

# Exercício 19
echo -e "\n\nExercício 19: ------------------------------------------------------\n"
curl -u 'usuario123:senhasegura123' https://httpbin.org/anything
sleep $esperar

# Exercício 20
echo -e "\n\nExercício 20: ------------------------------------------------------\n"
curl -H 'Accept-Language: es-ES' https://twitter.com
sleep $esperar

# Exercício 21
echo -e "\n\nExercício 21: ------------------------------------------------------\n"
curl -o "stripe.json" -u 'sk_test_4eC39HqLyjWDarjtT1zdp7dc:' https://api.stripe.com/v1/charges
curl -o "httpbin.json" -u 'sk_test_4eC39HqLyjWDarjtT1zdp7dc:' https://httpbin.org/anything
sleep $esperar
