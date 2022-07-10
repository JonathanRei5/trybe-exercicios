# Exercícios

__Instruções para a realização dos exercícios__

Neste exercício vamos criar uma API simples, onde será possível criar um livro ou listar todos os livros da base de dados. Vamos utilizar MySQL como banco de dados e Sequelize como nosso ORM.

Detalhes do projeto

1. Crie uma nova pasta e inicie um projeto com Express:

```
npm init -y

npm install express
```

2. Crie o arquivo index.js;

3. Instale o pacote sequelize e o mysql2:

```
npm install sequelize mysql2
```

4. Instale o pacote sequelize-cli como uma dependência de desenvolvimento:

```
npm install --save-dev sequelize-cli
```

5. Use o Sequelize-CLI para iniciar a configuração do ORM:

```
npx sequelize-cli init
```
Esse comando vai gerar as pastas models, seeder, config e migration dentro do seu projeto.

6. Garanta que tem um servidor MySQL rodando e coloque todas as configurações de acesso dentro do arquivo config/config.js.

7. Crie o arquivo index.js com a estrutra básica de uma API com Express.

```
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
```

---

__Exercício 1:__ Crie uma migration para criar uma tabela books com as seguintes colunas:
   * id: dever ser do tipo integer, não pode ser nula e ser a chave primária da tabela com auto incremento;
   * title: deve ser do tipo string e não pode ser nulo;
   * author: deve ser do tipo string e não pode ser nulo;
   * pageQuantity: deve ser do tipo integer e pode ser nulo;
   * createdAt: deve ser do tipo date e não pode ser nulo;
   * updatedAt: deve ser do tipo date e não pode ser nulo;

Obs: o método down da migration deve ser capaz de remover a tabela.

Obs 2: Execute o comando npx sequelize db:migrate e verifique se a tabela foi criada antes de continuar para os próximos exercícios.

__Exercício 2:__ Crie o model Book utilizando a API do Sequelize.
Nos próximos exercícios você vai desenvolver uma API utilizando as camadas de service e controller.

__Listando os livros__

__Exercício 3:__ Crie um service BooksService com o método getAll para retornar uma lista de livros por meio do model Book.

__Exercício 4:__ Crie um controller BooksController com o método getAll sendo um middleware para retornar a lista de livros por meio do método getAll de BookService.

__Exercício 5:__ Vincule a rota GET /books para acessar seu controller.

__Buscando um livro pelo id__

__Exercício 6:__ No service BooksService crie um método getById que recebe um id como parâmetro e use o model Book para buscar esse livro. Retorne o objeto encontrado pelo model.

__Exercício 7:__ No controller BooksController crie o método getById sendo um middleware que recebe o id como parâmetro de rota e buscar o livro por meio do service. Se o livro não existir a resposta da requisição deve ter o status 404 e o json { "message": "Book not found" }.

__Exercício 8:__ Vincule a rota GET /books/:id para acessar seu controller.

__Cadastrando um livro__

__Exercício 9:__ No service BooksService crie um método create que recebe um objeto com os atributos title, author, pageQuantity e salve um novo livro utilizando o model Book.

__Exercício 10:__ No controller BooksController crie o método create sendo um middleware que recebe os atributos title, author, pageQuantity do body da requisição e salve os dados por meio do service.

__Exercício 11:__ Vincule a rota POST /books para acessar seu controller.

__Editando um livro__

__Exercício 12:__ No service BooksService crie um método update que recebe dois parâmetros: o id do livro a ser alterado e um objeto com os atributos title, author, pageQuantity e atualize o livro utilizando o model Book.

__Exercício 13:__ No controller BooksController crie o método update sendo um middleware que recebe o id como parâmetro de rota e os atributos title, author, pageQuantity do body da requisição e salve os dados por meio do service. A requisição deve retornar o status 200 e a mensagem 'Book updated!'. Se o livro não for encontrado retornar a mensagem 'Book not found!'.

__Exercício 14:__ Vincule a rota PUT /books/:id para acessar seu controller.

__Removendo um livro__

__Exercício 15:__ No service BooksService crie um método remove que recebe o id do livro a ser removido e remova o mesmo utilizando o model Book.

__Exercício 16:__ No controller BooksController crie o método remove sendo um middleware que recebe o id como parâmetro de rota e remova o livro por meio do service.

__Exercício 17:__ Vincule a rota DELETE /books/:id para acessar seu controller.
Faça um teste no insomnia para ver se o endpoint está funcional.
Em caso de erro, os endpoints devem retornar status code 500 com a mensagem: 'Algo deu errado'.

Dica: Para testar suas requisições você pode utilizar o [Postman](https://www.postman.com/) ou o [Insomnia](https://insomnia.rest/).

# Bônus

* Crie um seeder usando o Sequelize-CLI, populando a sua base com pelo menos um livro;

* Crie um método getByAuthor em BooksService para buscar uma lista de livros por author.

* Refatore o método getAll de forma que ser for enviado uma query string author ele seja capaz de pegar a lista usando o método getByAuthor de BooksService.

* Refatore os métodos getAll e getByAuthor para que a lista de livros seja ordenada pelo título em ordem alfabética.

* Crie uma migration para adicionar a coluna publisher (editora) na tabela Books. Modifique as camadas de serviço para que esse campo seja utilizado no cadastro e na edição.

* Escreva testes unitários para o model;

* Escreva testes unitários para o service criado, isolando a camada de models;

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
