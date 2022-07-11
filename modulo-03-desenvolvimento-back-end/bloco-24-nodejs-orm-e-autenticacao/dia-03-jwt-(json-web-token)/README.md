# Exercícios

Antes de começar, crie um novo projeto chamado hello-jwt utilizando o comando npm init @tryber/backend hello-jwt, aceitando as opções padrão.

1. Crie um endpoint POST /login.
   * O endpoint deve receber os seguintes dados no corpo da requisição:

    ```json
      {
        "username": "algumNomeDeUsuario",
        "password": "algumaSenha"
      }
    ```

- Caso `username` e `password` sejam válidos, retorne um _token_ que atenda às seguintes especificações:
  - Expira em uma hora;
  - Contém, no _payload_, o nome de usuário informado na _request_;
  - Contém, no _payload_, uma propriedade `admin`, com o valor `false`.
- Para retornar o _token_, utilize o seguinte formato no corpo da resposta:

```json
  {
    "token": "<JWT aqui>"
  }
```

- Para que `username` seja válido, seu valor precisa ser uma _string_ alfanumérica de, pelo menos, 5 caracteres.
- Para que `password` seja válido, seu valor precisa ser uma _string_ de, pelo menos, 5 caracteres.

2. Altere o endpoint POST /login:
   * Caso username seja admin e password seja s3nh4S3gur4???, a chave admin no payload do token gerado deve ter o valor true.

3. Crie o endpoint /GET /users/me:
   1. O endpoint só pode ser acessado por pessoas autenticadas.
   2. Para realizar a autenticação, a requisição deve conter o header Authorization, cujo valor deve ser um token válido.
   3. Caso o token não exista, retorne o status 401 Unauthorized, com o seguinte corpo da resposta:

      ```json
        {
          "error": {
            "message": "Token not found"
          }
        }
      ```

   4. Caso aconteça um erro ao validar o _token_, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:

      ```json
        {
          "error": {
            "message": "<mensagem de erro da biblioteca>"
          }
        }
      ```

   5. Caso o _token_ seja válido, retorne o status `200 OK` e, no corpo da resposta, o nome de usuário ao qual aquele _token_ pertence e o valor da propriedade `admin`, no seguinte formato:

      ```javascript
        {
          "username": "nome de usuário do token",
          "admin": true || false
        }
      ```

   6. Utilize um _middleware_ exclusivo para a autenticação. Armazene-o no arquivo `middlewares/auth.js`.

4. Crie o endpoint /GET /top-secret.
   * O endpoint só pode ser acessado por pessoas autenticadas.
   * Apenas tokens contendo, no payload, a propriedade admin com o valor true têm autorização para acessar esse endpoint.
   * Caso o token não exista, retorne o status 401 Unauthorized, com o seguinte corpo da resposta:

    ```json
      {
        "error": {
          "message": "Token not found"
        }
      }
    ```

- Caso aconteça um erro ao validar o _token_, retorne o status `401 Unauthorized` com o seguinte conteúdo no corpo:

```json
  {
    "error": {
      "message": "<mensagem de erro da biblioteca>"
    }
  }
```

- Caso o _token_ seja válido, mas a propriedade `admin` do _payload_ não seja `true`, retorne o status `403 Forbidden` e o seguinte JSON:

```json
  {
    "error": {
      "message": "Restricted access"
    }
  }
```

- Caso o _token_ seja válido e o _payload_ contenha `admin` com o valor `true`, retorne o seguinte JSON:

```json
  {
    "secretInfo": "Peter Parker é o Homem-Arannha"
  }
```

- Para validar se a pessoa é admin, crie um novo _middleware_ no arquivo `middlewares/admin.js`.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
