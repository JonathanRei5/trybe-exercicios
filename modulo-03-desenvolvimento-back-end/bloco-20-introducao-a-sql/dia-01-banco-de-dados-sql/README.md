# Exercícios

Agora vamos abrir o Workbench e fazer uma análise prática do banco de dados sakila, que já deve estar instalado, caso você tenha feito a instalação do MySql Workbench de forma padrão. Caso o banco sakila não esteja disponível, volte até a seção Restaurando o banco de dados de prática sakila e siga as instruções listadas. Com esse banco disponível na sua instalação do Workbench, sua missão agora é tentar finalizar os exercícios a seguir!

1. Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench.

   __*Resposta:*__
   ![Exercício 1](./imagens/exercicio-1.gif)

2. Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.

   __*Resposta:*__
   ![Exercício 2](./imagens/exercicio-2.gif)

3. Feito isso, crie uma tabela com as seguintes restrições:<br/>
Nome da tabela: Filme:<br/>
Colunas:
   * FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
   * Descricao - não permite nulos, tipo texto (varchar(100));
   * AnoLancamento - não permite nulos, tipo int;
   * Nota - permite nulos, tipo int;

   __*Resposta:*__
   ![Exercício 3](./imagens/exercicio-3.gif)

4. Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.

   __*Resposta:*__
   Faz referência à tabela country
   ![Exercício 4](./imagens/exercicio-4.gif)

5. Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?

   __*Resposta:*__
   Muitos para um (N:1) porque muitas cidades podem pertencer a um mesmo país.
   ![Exercício 5](./imagens/exercicio-5.png)

6. Qual tipo de relacionamento a tabela country faz com a tabela city?

   __*Resposta:*__
   Um para muitos (1:N) porque um país pode ter muitas cidades.
   ![Exercício 6](./imagens/exercicio-6.png)

7. Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

   __*Resposta:*__

   Tabela inventory tem relação de muitos para um (N:1) com a tabela film.
   ![Exercício 7](./imagens/exercicio-7-inventory.png)
   Tabela payment tem relação de muitos para um (N:1) com a tabela customer.
   ![Exercício 7](./imagens/exercicio-7-payment.png)
   Tabela rental tem relação de muitos para um (N:1) com a tabela customer.
   ![Exercício 7](./imagens/exercicio-7-rental.png)

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
