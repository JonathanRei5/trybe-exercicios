# Exercícios

1. Faça uma requisição para https://httpbin.org

2. Faça uma requisição para https://httpbin.org/anything

"httpbin.org/anything" irá analisar a requisição que você fez e retornar o que foi requisitado. O padrão do curl é fazer uma requisição GET.

3. Faça uma requisição POST para https://httpbin.org/anything

4. Faça uma requisição GET para https://httpbin.org/anything, mas desta vez adicione alguns parâmetros de consulta (defina ```value=panda```).

5. Requisite o arquivo robots.txt do google (www.google.com/robots.txt).

6. Faça uma requisição GET para https://httpbin.org/anything e defina o cabeçalho ```User-Agent: elephant```.

7. Faça uma requisição DELETE para https://httpbin.org/anything

8. Requisite https://httpbin.org/anything e também obtenha os cabeçalhos de resposta.

9. Faça uma requisição POST para https://httpbin.org/anything com o corpo JSON

```json
{"value": "panda"}
```

10. Faça a mesma requisição POST do exercício anterior, mas defina o cabeçalho Content-Type como ```application/json``` (porque as requisições POST precisam ter um tipo de conteúdo que corresponda ao seu corpo). Observe o campo ```json``` na resposta para ver a diferença em relação ao anterior.

11. Faça uma requisição GET para https://httpbin.org/anything e defina o cabeçalho ```Accept-Encoding: gzip``` (o que acontece? Por quê?).

12. Coloque vários JSON em um arquivo e, em seguida, faça uma requisição POST para https://httpbin.org/anything com o JSON nesse arquivo como o corpo.

13. Faça uma requisição para https://httpbin.org/image e defina o cabeçalho ```Accept: image/png```. Salve a saída em um arquivo PNG e abra o arquivo em um visualizador de imagens. Tente a mesma coisa com diferentes cabeçalhos ```Accept:```.

14. Faça uma requisição PUT para https://httpbin.org/anything

15. Requisite https://httpbin.org/image/jpeg, salve-a em um arquivo e abra esse arquivo em seu editor de imagem.

16. Requisite https://www.twitter.com. Você obterá uma resposta vazia. Também faça o curl mostrar os cabeçalhos de resposta e tente descobrir por que a resposta estava vazia.

17. Faça qualquer requisição para https://httpbin.org/anything e apenas defina alguns cabeçalhos sem sentido (como ```panda: elephant```).

18. Requisite https://httpbin.org/status/404 e https://httpbin.org/status/200. Solicite-os novamente e faça o curl mostrar os cabeçalhos de resposta.

19. Requisite https://httpbin.org/anything e defina um nome de usuário e senha (com ```-u username:password```).

20. Baixe a página inicial do Twitter (https://twitter.com) em espanhol, definindo o cabeçalho ```Accept-Language: es-ES```.

21. Faça uma requisição para a API Stripe com o curl. (consulte https://stripe.com/docs/development para saber como, eles fornecem uma chave de API de teste). Tente fazer exatamente a mesma requisição para https://httpbin.org/anything.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) do site [jvns.ca](https://jvns.ca/blog/2019/08/27/curl-exercises/)
