# Exercícios

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado! Para isso, vamos fazer o processo de deploy.

__Exercício 1:__ Crie uma API simples no node utilizando express. No arquivo `index.js`, crie uma rota do tipo get com o endereço raiz `/` que entregue como resposta o texto "Está vivo!!!". Faça o deploy no `Heroku` utilizando o CLI.

__Exercício 2:__ Agora, modifique a API para responder a uma nova mensagem:
   1. Crie uma nova variável de ambiente com um texto qualquer;
   2. Modifique o código da sua API para que ela responda na rota get `/` com o mesmo texto contido na variável criada no passo anterior.

__Exercício 3:__ Simule o deploy em multi-ambientes (produção e homologação). Para isso:
   1. Renomeie o remote do deploy dos exercícios anteriores para `homolog`;
   2. Crie um novo remote a partir do mesmo projeto. Dessa vez, o remote deverá se chamar `prod`;
   3. Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente.

__Exercício 4:__ Faça deploy de uma aplicação React.
   1. Crie uma aplicação React utilizando `create-react-app`;
   2. Crie um novo app utilizando o buildpack [mars/create-react-app](https://github.com/mars/create-react-app-buildpack#quick-start);
   3. Então, faça o deploy do app no Heroku.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
