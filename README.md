<h1 align="center" id="introducao">Landing Pages Generator</h1>

<div align="center">
 <img src="/github/logo.png" width="500px"/>
</div>

<h3 align="center">É um gerador de landing pages que monta uma página à escolha do usuário.</h3>

#### O projeto é constituído de duas páginas: O gerador (o repositório em que você está) e a página <a href="https://github.com/MatheusAndrade23/Landing_Pages">(clique para ver o código)</a>. O gerador (NodeJS) envia um arquivo JSON que contem todas as informações da página a ser montada para o Front-End (ReactJS), que, por sua vez, as interpreta e renderiza a página.

<br>

---

<br>

<h2>Menu de Navegação</h2>

- <a href="#introducao">Introdução</a>
- <a href="#funcionamento">Como Funciona?</a>
- <a href="#demo">Demonstração</a>
  - <a href="#tour">Um pequeno tour pelo Projeto</a>
  - <a href="#trocando">Trocando Páginas</a>
  - <a href="#mensagens">Mensagens</a>
- <a href="#tecnologias">Tecnologias Utilizadas</a>
- <a href="#storybook">Storybook</a>
- <a href="#testes">Testes com Jest</a>
- <a href="#detalhes">Alguns Detalhes do Funcionamento do Projeto</a>
  - <a href="#front">FrontEnd</a>
  - <a href="#back">BackEnd</a>
  - <a href="#json">Resposta JSON</a>
- <a href="#footer">Rodapé</a>

<br>

---

<h2 id="funcionamento">Como Funciona? ❓</h2>

<h3>O usuário escolhe a página que será gerada no gerador, que fica salva no banco de dados. Depois, abre o FrontEnd e faz o login com seu usuário e, como uma truque de mágica, a página escolhida é renderizada. Veja melhor no próximo tópico!</h3>

<br>

---

<h2 id="demo">Demonstração 🎥</h2>

_<h3 id="tour">Um pequeno tour pelo Projeto! 🚀</h3>_

<img src="/github/tour.gif">

_<h3 id="trocando">Trocando Páginas! 🚀</h3>_

<img src="/github/trocando.gif">

_<h3 id="mensagens">Mensagens! 🚀</h3>_

<img src="/github/mensagens.gif">

<br>

---

<h2 id="tecnologias">Tecnologias Utilizadas ⚙️</h2>

#### FrontEnd: `ReactJS!`

- React-Dom
- React-Router-Dom
- Styled Components
- Jest Styled Components
- Proptypes
- Storybook
- React Hooks

#### BackEnd: `NodeJS!`

- Express
- Express-Handlebars
- Express-Session
- Mongoose
- Nodemon
- DotEnv
- Cors

#### Banco de Dados: `MongoDB-Atlas!`

 <div style="display: inline_block"><br>
  <img align="center" alt="HTML" height="35" width="45" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="CSS" height="35" width="45" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Sass" height="35" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg">
  <img align="center" alt="Js" height="35" width="45" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="MongoDB" height="35" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg">
  <img align="center" alt="ReactJS" height="35" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">
  <img align="center" alt="Storybook" height="35" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg">
  <img align="center" alt="Jest" height="35" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg">
  <img align="center" alt="NodeJS" height="35" width="45" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg">
  <img align="center" alt="Express" height="35" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg">
  <img align="center" alt="Handlebars" height="35" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg">
 </div>

 <br>

---

<h2 id="storybook">Storybook 📚</h2>

#### O <a href="https://storybook.js.org/">Storybook</a> é uma biblioteca React que ajuda muito no processo de desenvolvimento de uma página. Ele te permite visualizar e manipular totalmente um componente qualquer de seu interesse apenas com a execução de um comando: `npm run storybook`. Veja uma demonstração de como foi utilizado nesse projeto!

<br>

<img src="/github/storybook.gif">

<br>

---

<h2 id="testes">Testes com Jest 🧪</h2>

#### <a href="https://jestjs.io/pt-BR/">Jest</a> é um poderoso Framework que te permite testar totalmente seus projetos JavaScript. Para isso, escreva testes automatizados e execute-os com o comand: `npm test`. Assim, é mostrado no terminal o relatório dos testes, e quando algum deles falha, é exibido exatamente o que deu errado e o porquê. Foi mais uma das coisas que eu aprendi com o desenvolvimento do LP Generator!

<br>

<img src="/github/testes.gif">

#### Você também pode gerar um relatório de como está a cobertura do seus testes com o comando: `npm test -- --watchAll="false" --coverage`. Acredite, é muito satisfário ver uma cobertura de 100%!

<br>

<img src="/github/coverage.png">

<br>

---

<h2 id="detalhes">Alguns Detalhes do Funcionamento do Projeto 🔎</h2>

_<h3 id="front">FrontEnd <img align="center" alt="ReactJS" height="35" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></h3>_

#### O FrontEnd foi desenvolvido com Storybook, Jest e Styled Components. Pela primeira vez fiz arquivos separados para temas, configurações e funções.

#### Os avisos que está página pode apresentar são muito interessantes. Eles são divididos por códigos, em que cada um deles pode represetar uma mensagem de sucesso ou de erro. Segue uma tabela que mostra todos os códigos possíveis.

<table>
  <thead>
    <th>Código:</th>
    <th>Mensagem:</th>
  </thead>
  <tbody>
    <tr>
      <td>WHP1</td>
      <td>Without User or Password</td>
    </tr>
    <tr>
      <td>ISE1</td>
      <td>Internal Server Error</td>
    </tr>
    <tr>
      <td>WPU1</td>
      <td>Wrong Password</td>
    </tr>
    <tr>
      <td>UNF1</td>
      <td>User not Found</td>
    </tr>
  </tbody>
</table>

##

_<h3 id="back">BackEnd <img align="center" alt="NodeJS" height="35" width="45" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg"></h3>_

#### O BackEnd foi desenvolvido utilizando a arquitetura MVC (Models, Views e Controllers) com o Handlebars para template engine e Mongoose para bancos de dados. Esta arquitetura ajuda deixar o código mais limpo e organizado.

<br>

<img src="/github/mvc.gif">

<br>

##

_<h3 id="json">Resposta JSON <img align="center" alt="NodeJS"  width="45" src="https://www.free-emoticons.com/files/halloween-emoticons/8579.png"></h3>_

#### O JSON que configura uma página é estruturado em seções. Algumas estão por padrão em todas as páginas, como as que configuram o menu e o rodapé, já outras variam de acordo com a página a ser montada. Assim, para renderizar a página, as funções da pasta "Api" (FrontEnd) desestruturam o JSON e passam as informações necessárias para os componentes certos.

#### Os tipos de seções são: `section-two-columns`, `section-grid-text`, `section-grid-image`, `section-content`.

#### Cada uma das seções devem conter as informações necessárias para sua construção, como títulos, descrições, imagens e etc.

<br>

<img src="/github/json.gif">

<br>

---

<div id="footer" align="center"><a href="https://www.linkedin.com/in/matheus-andrade23/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href = "mailto:matheusandrade.ma2003@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a></div>
