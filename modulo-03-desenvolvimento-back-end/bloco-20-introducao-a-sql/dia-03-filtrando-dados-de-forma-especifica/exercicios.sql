-- Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras `GR`.
   SELECT * FROM PecasFornecedores.Pecas
   WHERE name LIKE 'GR%';

-- Agora, escreva uma query para mostrar todos os fornecimentos que contenham a peça com code `2`. Organize o resultado por ordem alfabética de fornecedor.
   SELECT * FROM PecasFornecedores.Fornecimentos
   WHERE peca=2
   ORDER BY Fornecedor;

-- Em seguida, faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra `N`.
   SELECT peca, preco, fornecedor FROM PecasFornecedores.Fornecimentos
   WHERE fornecedor LIKE '%N%';

-- Avante, falta pouco! Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.
   SELECT * FROM PecasFornecedores.Fornecedores
   WHERE name LIKE '%LTDA'
   ORDER BY name DESC;

-- Agora, faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra `F` no código.
   SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
   WHERE code LIKE '%F%';

-- Quase lá! Agora escreva uma query para exibir os fornecimentos onde as peças custam mais de `R$15,00` e menos de `R$40,00`. Ordene os resultados por ordem crescente.
   SELECT * FROM PecasFornecedores.Fornecimentos
   WHERE Preco>15 AND Preco<40
   ORDER BY Preco;

-- Ufa! Por fim, faça uma query para exibir o número de vendas feitas entre o dia `15/04/2018` e o dia `30/07/2019`.
   SELECT COUNT(*) FROM PecasFornecedores.Vendas
   WHERE order_date BETWEEN '2018/04/15' AND '2019/07/30';

   -- Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra `e` em seu nome.
   SELECT * FROM Scientists.Scientists
   WHERE Name LIKE '%e%';

-- Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra `A`. Ordene o resultado em ordem alfabética.
   SELECT Name FROM Scientists.Projects
   WHERE Code LIKE 'A%'
   ORDER BY Name;

-- Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número `3`. Ordene o resultado em ordem alfabética.
   SELECT Code, Name FROM Scientists.Projects
   WHERE Code LIKE '%3%'
   ORDER BY Name;

-- Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam `AeH3`, `Ast3` ou `Che1`.
   SELECT Scientist FROM Scientists.AssignedTo
   WHERE Project IN ('AeH3', 'Ast3', 'Che1');

-- Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
   SELECT * FROM Scientists.Projects
   WHERE Hours > 500;

-- Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
   SELECT * FROM Scientists.Projects
   WHERE Hours > 250 AND Hours < 800;

-- Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra `A`.
   SELECT Name, Code FROM Scientists.Projects
   WHERE Name NOT LIKE 'A%';

-- Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra `H`.
   SELECT Name FROM Scientists.Projects
   WHERE Code LIKE '%H%';
