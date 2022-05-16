# Exercício

Vamos usar uma imagem disponível no DockerHub conhecida como "cowsay" (uma vaca falante no terminal 🐮)!

A ideia é deixarmos a mensagem para o cowsay parametrizável. Dessa forma, conseguiremos executar o comando:

```
docker container run cowsay Muuuuuuhhh
```

E ter a seguinte saída no terminal:

```
 ____________
< Muuuuuuhhh >
 ------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     ||
```

Para isso:

1. Crie um Dockerfile utilizando a imagem chuanwen/cowsay.
2. Agora defina um ENTRYPOINT para a execução do comando.
   * Lembre-se que com ele, diferente do CMD, o comando não poderá ser sobrescrito com o docker run. Porém, conseguiremos passar parâmetros ao binário. Exploraremos esse recurso para poder passar a mensagem.
3. Utilize o CMD para definir uma mensagem padrão.
4. Gere uma build e execute um contêiner baseado em sua imagem sem passar nenhum comando.
5. Agora execute um novo contêiner passando sua mensagem para testar. Além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQM TRYBE", para exibir um dragão junto com a vaquinha.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
