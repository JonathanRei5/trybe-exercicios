# Exercícios

Você vai desenvolver uma aplicação de busca de CEP, chamada cep-lookup. A aplicação fornecerá um serviço de busca e cadastro de CEPs em um banco de dados. Como bônus, em vez de cadastrar novos CEPs manualmente, a aplicação consultará uma API externa para obter os dados do CEP desejado.

Utilize o banco de dados MySQL e execute a seguinte query para criar o banco e a tabela:

```sql
CREATE DATABASE IF NOT EXISTS cep_lookup;

USE cep_lookup;

CREATE TABLE IF NOT EXISTS ceps (
  cep VARCHAR(8) NOT NULL,
  logradouro VARCHAR(50) NOT NULL,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL,
  PRIMARY KEY (cep)
);
```

## Exercício 1

* Crie uma nova API utilizando o express
   * A aplicação deve ser um pacote Node.js;
   * Dê ao pacote o nome de cep-lookup;
   * Utilize o express para gerenciar os endpoints da sua aplicação;
   * A aplicação deve ter a rota GET /ping, que retorna o status 200 OK e o seguinte JSON:
   ```json
   { "message": "pong!" }
   ```
* A aplicação deve escutar na porta 3000;
* Deve ser possível iniciar a aplicação através do comando npm start.

## Exercício 2

* Crie o endpoint GET /cep/:cep
   * O endpoint deve receber, no parâmetro :cep, um número de CEP válido;
   * O CEP precisa conter 8 dígitos numéricos e pode ou não possuir traço;
     * 👀 De olho na dica: utilize o regex \d{5}-?\d{3} para validar o CEP;
   * Caso o CEP seja inválido, retorne o status 400 Bad Request e o seguinte JSON:
   ```json
   { "error": { "code": "invalidData", "message": "CEP inválido" } }
   ```
* Caso o CEP seja válido, realize uma busca no banco de dados;
   * Caso o CEP não exista no banco de dados, retorne o status 404 Not Found e o seguinte JSON:
   ```json
   { "error": { "code": "notFound", "message": "CEP não encontrado" } }
   ```
- Caso o CEP exista, retorne o status `200 OK` e os dados do CEP no seguinte formato:
   ```json
   {
     "cep": "01001-000",
     "logradouro": "Praça da Sé",
     "bairro": "Sé",
     "localidade": "São Paulo",
     "uf": "SP",
   }
   ```

## Exercício 3

* Crie o endpoint POST /cep
   * O endpoint deve receber a seguinte estrutura no corpo da requisição:
   ```json
   {
     "cep": "01001-000",
     "logradouro": "Praça da Sé",
     "bairro": "Sé",
     "localidade": "São Paulo",
     "uf": "SP",
   }
   ```
* Todos os campos são obrigatórios;
* Utilize o Joi para realizar a validação. Em caso de erro, retorne o status 400 Bad Request, com o seguinte JSON:
   ```json
   { "error": { "code": "invalidData", "message": "<mensagem do Joi>" } }
   ```
* O CEP deve ser composto por 9 dígitos com traço;
   * 👀 De olho na dica: utilize o seguinte regex para validar o CEP: \d{5}-\d{3}
* Se o CEP já existir, retorne o status 409 Conflict com o seguinte JSON:
   ```json
   {
     "error": { "code": "alreadyExists", "message": "CEP já existente" }
   }
   ```
* Se o CEP ainda não existir, armazene-o no banco de dados e retorne o status 201 Created com os dados do novo CEP no seguinte formato:
   ```json
   {
     "cep": "01001-000",
     "logradouro": "Praça da Sé",
     "bairro": "Sé",
     "localidade": "São Paulo",
     "uf": "SP",
   }
   ```

# Bônus

## Bônus 1
* Utilize uma API externa para buscar CEPs que não existem no banco de dados
   * Quando um CEP não existir no banco de dados, utilize a API https://viacep.com.br/ws/[numero-do-cep]/json/ para obter suas informações;
   * Caso o CEP não exista na API externa, você receberá o JSON { "erro": true }. Nesse caso, retorne status 404 Not Found com o seguinte JSON:

   ```json
   { "error": { "code": "notFound", "message": "CEP não encontrado" } }
   ```

* Caso o CEP exista na API externa, armazene-o no banco e devolva seus dados no seguinte formato:

```json
  {
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  }
```

* 👀 De olho na dica: na arquitetura MSC, os models são responsáveis por toda a comunicação externa de uma aplicação, o que inclui APIs externas. Logo, você precisará de um model para acessar a API.

## Bônus 2
* Cadastre simultaneamente CEPs e bairros utilizando uma API externa
   * Vamos utilizar um segundo banco de dados para esse exercício:

    ```sql
    CREATE DATABASE IF NOT EXISTS cep_lookup2;

    USE cep_lookup2;

    CREATE TABLE IF NOT EXISTS bairros (
      id INT NOT NULL AUTO_INCREMENT,
      bairro VARCHAR(20) NOT NULL,
      localidade VARCHAR(20) NOT NULL,
      uf VARCHAR(2) NOT NULL,
      PRIMARY KEY (id)
    );

    CREATE TABLE IF NOT EXISTS ceps (
      cep VARCHAR(8) NOT NULL,
      logradouro VARCHAR(50) NOT NULL,
      bairro_id INT NOT NULL,
      FOREIGN KEY (bairro_id) REFERENCES bairros(id),
      PRIMARY KEY (cep)
    );
    ```

* Note que, nessa nova tabela, em vez de trazermos as informações que são comuns aos CEPs associados a um mesmo bairro, temos agora uma segunda tabela bairros onde cadastraremos o nome, a localidade e a UF do mesmo;
* Quando um CEP não existir no banco de dados, utilize a API externa para obter suas informações;
* Utilize os dados provindos da API para cadastrar ou buscar os dados do bairro (caso este já esteja cadastrado);
* Com tudo armazenado corretamente, devolva os dados no seguinte formato:

```json
  {
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
  }
```

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
