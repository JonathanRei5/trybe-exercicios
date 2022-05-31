__Restaure o banco de dados abaixo antes de continuar:__

Para realizar os exercícios propostos para o dia, __faremos uso da tabela `employees`__ do banco de dados `hr`. O banco de dados pode ser gerado e restaurado usando [este arquivo SQL](https://assets.app.betrybe.com/back-end/sql/hr-cebf8bc2a5bb252bc470ae28943604c6.sql).

__Instruções de como restaurar o banco de dados__

1. Baixe o conteúdo do arquivo `.sql` linkado acima;
2. Copie todo o código SQL;
3. Abra o MySQL Workbench e abra uma nova janela de query;
4. Copie todo o código para dentro dessa janela;
5. Selecione todo o código usando Ctrl + a;
6. Execute o código teclando Ctrl + ENTER.

# Exercícios

1. Escreva uma query que exiba o maior salário da tabela.

   __*Resposta:*__
   ```SQL
   SELECT MAX(`salary`) FROM `hr`.`employees`;
   ```

2. Escreva uma query que exiba a diferença entre o maior e o menor salário.

   __*Resposta:*__
   ```SQL
   SELECT MAX(`salary`)-MIN(`salary`) AS `DIFFERENCE` FROM `hr`.`employees`;
   ```

3. Escreva uma query que exiba a média salarial de cada `JOB_ID`, ordenando pela média salarial em ordem decrescente.

   __*Resposta:*__
   ```SQL
   SELECT AVG(`SALARY`) AS `AVG`
   FROM `hr`.`employees`
   GROUP BY `JOB_ID`
   ORDER BY `AVG` DESC;
   ```

4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

   __*Resposta:*__
   ```SQL
   SELECT SUM(`SALARY`) FROM `hr`.`employees`;
   ```

5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

   __*Resposta:*__
   ```SQL
   SELECT ROUND(MAX(`SALARY`),2), ROUND(MIN(`SALARY`),2), ROUND(SUM(`SALARY`),2), ROUND(AVG(`SALARY`), 2)
   FROM `hr`.`employees`;
   ```

6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (`IT_PROG`).

   __*Resposta:*__
   ```SQL
   SELECT COUNT(*) FROM `hr`.`employees`
   WHERE `JOB_ID` = 'IT_PROG';
   ```

7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (`JOB_ID`).

   __*Resposta:*__
   ```SQL
   SELECT `JOB_ID`, SUM(`SALARY`) FROM `hr`.`employees`
   GROUP BY `JOB_ID`;
   ```

8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (`IT_PROG`).

   __*Resposta:*__
   ```SQL
   SELECT `JOB_ID`, SUM(`SALARY`) FROM `hr`.`employees`
   GROUP BY `JOB_ID`
   HAVING `JOB_ID` = 'IT_PROG';
   ```

9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (`IT_PROG`).

   __*Resposta:*__
   ```SQL
   SELECT `JOB_ID`, AVG(`SALARY`) AS `AVG` FROM `hr`.`employees`
   GROUP BY `JOB_ID`
   HAVING `JOB_ID` <> 'IT_PROG'
   ORDER BY `AVG` DESC;
   ```

10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo `DEPARTMENT_ID`.

   __*Resposta:*__
   ```SQL
   SELECT AVG(`SALARY`) AS `AVG SALARY`, COUNT(`EMPLOYEE_ID`) AS `TOTAL EMPLOYEES`
   FROM `hr`.`employees`
   GROUP BY `DEPARTMENT_ID`
   HAVING `TOTAL EMPLOYEES` > 10;
   ```

11. Escreva uma query que atualize a coluna `PHONE_NUMBER`, de modo que todos os telefones iniciados por `515` agora devem iniciar com `777`.

12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

13. Escreva uma query que exiba as seguintes informações de cada funcionário: `id`, `primeiro nome` e `ano no qual foi contratado` (exiba somente o ano).

14. Escreva uma query que exiba as seguintes informações de cada funcionário: `id`, `primeiro nome` e `dia do mês no qual foi contratado` (exiba somente o dia).

15. Escreva uma query que exiba as seguintes informações de cada funcionário: `id`, `primeiro nome` e `mês no qual foi contratado` (exiba somente o mês).

16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

17. Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

18. Escreva uma query que exiba as seguintes informações de cada funcionário: `nome`, `sobrenome`, `tempo que trabalha na empresa (em dias)`.

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
