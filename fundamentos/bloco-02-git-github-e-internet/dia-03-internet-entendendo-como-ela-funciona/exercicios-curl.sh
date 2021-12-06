esperar=0

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