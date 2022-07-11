# Exercícios

### Antes de começar os exercícios

Nesse exercício vamos criar uma API que será responsável pela gestão de um sistema de saúde. Nesse sistema terão pacientes, cada um com seu plano. Cada paciente pode ter realizado várias cirurgias, que por sua vez, devem ser listadas e categorizadas. O diagrama abaixo demonstra como o banco de dados se comportará:

![Diagrama](images/diagrama.png)

O exercício já vem com a estrutura básica do Sequelize configurada, **não será necessário inicializar ou criar migrations ou seeders para as tabelas**, pois elas já estão feitas.

Será necessário configurar o arquivo `config/config.js` com os dados de seu servidor. Para isso, crie um arquivo .env para configurar suas variáveis de ambiente.

Após, utilize os comandos abaixo:

```bash
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

Esses comandos vão criar respectivamente, a `database`, as `tables` e após, inserir dados exemplos nas tabelas.

As tabelas criadas são:

- Patients
- Patients_surgeries
- Plans
- Surgeries

Feito isso, ja podem ser realizados os exercícios abaixo.

---

#### Exercício 1

Crie o model de `Plans`.

#### Exercício 2

Crie o model de `Patients`.

#### Exercício 3

Crie o model de `Surgeries`.

#### Exercício 4

Crie o model de `Patient_surgeries`.

#### Exercício 5

Crie um endpoint que liste todos os pacientes e seus respectivos planos.

#### Exercício 6

Crie um endpoint que liste todos os pacientes e suas respectivas cirurgias realizadas.

#### Exercício 7

Crie um endpoint que de acordo com o id de um plano, que deve ser recebido via requisição, liste os pacientes que o possuem.

# Bônus

#### Exercício 1 

Crie um endpoint capaz de adicionar um novo paciente.

#### Exercício 2

Crie um endpoint que liste todos os pacientes e suas cirurgias realizadas, mas oculte o nome do médico responsável.

#### Exercício 3

Crie um endpoint que de acordo com o nome do médico, que deve ser recebido via requisição, liste todas as cirurgias realizadas pelo mesmo, um get na url `http://localhost:3000/surgeries/Rey%20Dos%20Santos`deve retornar as cirurgias realizadas pelo médico `Rey Dos Santos`.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
