# Exercícios do dia 25.1

Link para a aplicação de produção https://heroku-express-jra.herokuapp.com/

Link para a aplicação de homologação https://heroku-express-jra-homolog.herokuapp.com/

### Comandos utilizados:

Cria um _app_ Heroku
```bash
heroku create heroku-express-jra --remote heroku-express
```

Configura a variável de ambiente
```bash
heroku config:set RESPONSE_MESSAGE="Olá, esse é um ambiente de produção\!" --app heroku-express-jra
```

renomeia o _remote_ `heroku-express` para `prod`
```bash
git remote rename heroku-express prod
```

Cria outro _app_ Heroku
```bash
heroku create heroku-express-jra-homolog --remote homolog
```

Configura a variável de ambiente
```bash
heroku config:set RESPONSE_MESSAGE="Olá, esse é um ambiente de homologação\!" --app heroku-express-jra-homolog
```

Faz _deploy_ do _app_ de produção
```bash
git push prod heroku-express:master
```

Faz _deploy_ do _app_ de homologação
```bash
git push homolog heroku-express:master
```

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
