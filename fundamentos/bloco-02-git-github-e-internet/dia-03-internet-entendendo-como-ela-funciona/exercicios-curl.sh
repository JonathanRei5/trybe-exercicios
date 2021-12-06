esperar=0

# Exercício 1
echo -e "Exercício 1:\n"
curl https://httpbin.org/
sleep $esperar

# Exercício 2
echo -e "\n\nExercício 2:\n"
curl https://httpbin.org/anything
sleep $esperar

# Exercício 3
echo -e "\n\nExercício 3:\n"
curl -X POST https://httpbin.org/anything
sleep $esperar