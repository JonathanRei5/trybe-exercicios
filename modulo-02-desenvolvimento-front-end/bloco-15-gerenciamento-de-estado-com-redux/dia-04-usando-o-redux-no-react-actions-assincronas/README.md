# Exercícios

## Exercícios Redux Thunk

### Exercício 1

Nesse exercício, utilizaremos [essa API](https://aws.random.cat/meow) para realizarmos nossas requisições. Vamos focar apenas no desenvolvimento de uma **action assíncrona** e na implementação do `thunk` na `store`. O `reducer`, 
assim como os componentes da aplicação, já estão prontos. Desse modo, realizaremos modificações apenas nos arquivos `actions/index.js` e 
`store/index.js`.

Nessa aplicação, temos dois componentes: 
 1. `Gallery.js`, o qual renderiza uma imagem a partir de uma _URL_ armazenada no estado global da aplicação.
 2. `Button.js`, o qual renderiza um botão que, ao ser clicado, faz a requisição de uma imagem e armazena a URL no estado global por 
 meio de uma `action` assíncrona.

Como a aplicação está quase pronta, já temos o `reducer` e os componentes concluídos, nos falta somente a implementação do `thunk` e da action assíncrona. Para isso:
 1. Caso ainda não tenha feito, execute o comando `npm install` para instalar as dependecias
 necessárias para a aplicação: `redux`, `react-redux`, `redux-thunk`.
 2. Faça as implementações necessárias na **store**. (arquivo `store/index.js`)
 3. No arquivo `actions/index.js`, desenvolva a action assíncrona necessária para a
 aplicação rodar adequadamente. Essa _action_ assíncrona deverá fazer o uso de outras duas actions:
    1. Da `requestAPI`: para informar ao usuário que a informação solicitada está carregando
    2. Da `getPicture`: para salvar no estado global da aplicação a _URL_ da imagem solicitada da API.
 
_Observação: Para essa aplicação, é necessário que o nome da action assíncrona seja
 **fetchAPI**._

---

## Exercício Game of Thrones Characters

### Exercício 1

Vamos fazer uma pequena aplicação que nos permitirá buscar informações sobre os personagens da famosa série de livros "As Crônicas de Gelo e Fogo", que gerou a famosa série _Game of Thrones_.

Para este exercício você encontrará alguns componentes React prontos. Além do próprio `App`, você terá o componente `SearchForm` - que se trata de um componente de classe que armazena o valor de `inputText` na medida que se digita algo no campo de busca e, quando se clica no botão da página, leva o texto digitado como valor de `characterSearched`.

Já o componente `characterInfo` exibe na tela informações obtidas através da API (que já está disponível para uso na pasta `services`) - tais como o nome completo, os apelidos, o gênero e os livros em que o personagem aparece. Se ficou sem entender alguma parte, estude a aplicação e coloque um `console.log()` na propriedade que estiver com dúvidas.

Então, a API está pronta, os componentes estão prontos, mas precisamos obter as informações da API e passar suas informações para a tela. Para tanto:

1- Execute o comando `npm install` e instale os pacotes `redux`, `react-redux` e `redux-thunk`. Crie o `thunk` que fará a requisição para a API e as `actions` referentes ao retorno com sucesso ou falha na dita requisição (não se esqueça de importar a função `charAPI.js` no seu arquivo `actions.js`).

2- Crie o `Reducer` que tratará as `actions` criadas no passo 1 e insira-o no `combineReducers`. ***Importante:*** a API retorna uma array com um único objeto, logo você precisa acessar a posição correta do array para, em seguida, se utilizar do objeto.

3- Conecte a `action` a ser despachada no seu componente `SearchForm` e os `states` oriundos do reducer no componente `CharacterInfo`, bem como prepare o componente para exibir uma mensagem em caso de erro da API.

4- Utilize a `Prop` importada do seu `reducer` para renderizar as informações na tela.

---

### Esses exercícios foram feitos por [min](https://www.linkedin.com/in/jonathanrei5/) na [Trybe](https://www.betrybe.com/)
