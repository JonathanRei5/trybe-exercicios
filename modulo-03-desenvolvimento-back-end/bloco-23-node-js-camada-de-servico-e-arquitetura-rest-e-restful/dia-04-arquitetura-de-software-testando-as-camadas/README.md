# Exercícios

Nos exercícios vamos implementar todas as camadas para adicionar um endpoint que recebe o ID de um filme específico e, então, retorna os detalhes desse filme.

Esse endpoint terá os seguintes cenários:
* Quando é encontrado um filme com o ID passado pela pessoa usuária, deverá retornar um objeto com todas as propriedades do filme e o código http 200 - OK no status da response.
* Quando não é encontrado nenhum filme com o ID passado pela pessoa usuária, deverá responder com código http 404 - Not Found no status da response, com a mensagem "Filme não encontrado."

👀 __De olho na dica:__ Lembre-se que durante a execução dos testes é importante isolar as dependências, por isso não se preocupe com a criação da tabela no banco. Foque no TDD (Test Driven Development).

__Exercício 1:__ Seguindo o TDD, implemente a camada de model necessária para o end-point, aplicando os comportamentos para atender aos requisitos:
   * Crie os testes da camada de model. Como essa camada é responsável por realizar as operações no BD, adicione as operações necessárias para que o endpoint funcione conforme esperado.
   * Implemente os métodos para atender aos cenários descritos nos testes.
   * Faça os ajustes necessários nos testes de acordo com sua implementação. Lembre-se de isolar qualquer operação de leitura e escrita.

__Exercício 2:__ Também seguindo o TDD, implemente a camada de service do endpoint, certifique-se de garantir que os cenários descritos nos requisitos serão atendidos.
   * Crie os testes da camada de service. Lembre-se que essa camada é responsável pelas regras de negócio, e deverá fazer os tratamentos necessários com o input recebido do controller e com o output recebido do model.
   * Implemente os métodos necessários para atender aos testes.
   * Faça os ajustes necessários nos testes de acordo com sua implementação. Lembre-se de isolar a camada das demais.

__Exercício 3:__ Também seguindo o TDD, implemente a camada de controller do endpoint. Certifique-se de garantir que os cenários descritos nos requisitos serão atendidos.
   * Crie os testes da camada de controller. Lembre-se que essa camada é responsável por toda a comunicação com a pessoa usuária, devendo tratar seu input e output. Outro ponto de atenção é que, diferente das outras camadas, os controllers são middlewares e será necessário criar asserções com os stubs para testar seus comportamentos.
   * Implemente o código necessário para atender os cenários descritos nos testes.
   * Faça os ajustes necessários nos testes de acordo com sua implementação. Lembre-se de isolar a camada das demais.

__Exercício 4:__ Faça os ajustes no index.js para finalizar o endpoint.

_Código fornecido pela Trybe eu desenvolvi o endpoint que recebe o ID de um filme e retorna os detalhes desse filme, também desenvolvi os testes para o mesmo_

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
