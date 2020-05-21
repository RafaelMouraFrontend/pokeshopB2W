<h1 align="center">
  <br>
  <a href="http://somos.b2wdigital.com/bit/"><img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo.png" alt="Pokemon Shop" width="400"></a>
  <br>
  Pokemon Shop
  <br>
  <br>
</h1>

<h4 align="center">Desafio Técnico desenvolvido para a <a href="http://somos.b2wdigital.com/bit/" target="_blank">B2W</a>.</h4>


<p align="center">
  <a href="#Introdução">Introdução</a> •
  <a href="#Pré-requisitos">Pré requisitos</a> •
  <a href="#Rodando-o-projeto">Rodando o Projeto</a> •
  <a href="#Deployment">Deployment</a> •
  <a href="#Built-With">Built With</a> •
  <a href="#Autor">Autor</a> •
</p>



## Introdução

Esse é um desafio foi criada uma loja pokemon categorizada por habilidades

### Pré requisitos

Será necessário a instação do Node e Github em sua maquina.

- [Node](https://nodejs.org/en/) 

- [Github](https://help.github.com/en/desktop/getting-started-with-github-desktop/installing-github-desktop) 

### Rodando o projeto

Esse tópico é para caso queira rodar o game na sua maquina e ter acesso ao core do projeto;

Após a instação do node e github vamos precisar rodar alguns comandos no seu terminal de comando:

```
git clone git@github.com:RafaelMouraFrontend/pokeshopB2W.git
```
ou

```
git clone https://github.com/RafaelMouraFrontend/pokeshopB2W.git
```

Pronto agora com esse comando acima você clonou a pasta e tem todo acesso ao código do projeto, agora vamos rodar no terminal mais alguns comandos para fazer o game funcionar na sua maquina:
```
cd TesteB2w
```
```
yarn install
```
```
yarn start
```

Acesse no seu navegador de preferencia
```
http://localhost:3000/
```

Ou se preferir entre no link online: https://pokeshopb2w.netlify.app/

## Built With

* [React](hhttps://reactjs.org/) 
* [Styled Components](https://www.styled-components.com/) 
* [React Router](https://www.npmjs.com/package/react-router) 
* Context Api
* ReactHooks 
* Linter Airbnb


## Autor

* **Rafael Moura** - [Linkedin](https://www.linkedin.com/in/rafaelmouradev/)

## Considerações finais

A proposta foi apresetar os meus conhecimentos como dev Frontend Junior, foi interessante também como forma de reforçar e aprender alguns conceitos como context api, busquei criar uma arquitetura que seja facilmente escalavel.

Cheguei pensar em usar redux e redux-saga que venho estudando ultimamente, mas como pensei não ser uma aplicação muito grande resolvi fazer com context api que era um conceito que ainda não conhecia.

Foi muito legal fazer esse teste, espero que gostem! wink

OBS: Pode se futuramente ampliar e escalar amplicando as habilidades em categorias através de rotas e um persist em localStorage.
