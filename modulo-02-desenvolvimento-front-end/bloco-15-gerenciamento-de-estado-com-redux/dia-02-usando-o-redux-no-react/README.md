# Exercícios

Você irá desenvolver 3 exercícios para solidificar seus conhecimentos de Redux com React.
   * No primeiro exercício, desenvolveremos um semáforo simples.
   * No segundo trabalharemos com mais estados aplicando movimento em 3 carros.
   * E para finalizar iremos combinar ambos os exercícios em um só, utilizando o `combineReducers`.

---

## Exercício 1

Como primeira tarefa, você deve usar o **Redux** para gerenciar o estado do componente `TrafficSignal`. As funções `mapStateToProps` e `mapDispatchToProps` devem ser usadas para conectar o componente ao estado do **Redux**.

A função `renderSignal` retorna o src da imagem do sinal de trânsito e recebe como parâmetro uma string que deve vir da store.

O componente `TrafficSignal` tem três botões e ao clique de cada um deles, a sua respectiva luz deve acender.

---

## Exercício 2

Como segunda tarefa, você deve usar o **Redux** para gerenciar o estado do componente `Cars`. As funções `mapStateToProps` e `mapDispatchToProps` devem ser usadas para conectar o componente ao estado do **Redux**.

Seu reducer deve ter 3 estados, `redCar`, `blueCar` e `yellowCar` e os 3 devem ser booleanos. Ao clicar no botão `Move`, o estado de seu respectivo carro deve mudar para que o carro ande. Já fizemos todo o CSS para que você se preocupe apenas com a lógica do exercício, ele encontra-se no arquivo `App.css`.

---

## Exercício 3

Como terceira tarefa, você deve juntar seus 2 reducers anteriores em um único reducer, usando o `combineReducers`. Talvez haja uma mudança 
no estado de seu reduce, então certifique-se que ambos os componentes continuem funcionando após a união.

---

_O código para esses exercícios foi fornecido pela Trybe eu desenvolvi a parte do Redux conforme solicitado nos exercícios._

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
