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

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) do site [jvns.ca](https://jvns.ca/blog/2019/08/27/curl-exercises/)
