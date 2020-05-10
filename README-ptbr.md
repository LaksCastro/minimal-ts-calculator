<p align="center">
  <img src="./public/favicon.png" width="150" alt="Project Logo">
  <p align="center">⭐⭐⭐⭐⭐</p> 
  <h1 align="center">Minimal Typescript Calculator</h1>
  <p align="center">Aprendendo Typescript e Github Actions com este projeto :D</p>
  <p align="center">
    <img src="https://img.shields.io/badge/PWA-installable-success" alt="PWA installable" />
    <img src="https://img.shields.io/badge/type-project-orange" alt="Repo Type" />
    <img src="https://img.shields.io/badge/language-typescript-blue" alt="Repo Main Language" />
    <img src="https://img.shields.io/badge/platform-web-yellow" alt="Project Platform" />
  </p>
  <p align="center">
    <a href="https://twitter.com/lakscastro" target="_blank">
      <img src="https://img.shields.io/twitter/url?label=Follow%20%40LakCastro&logo=twitter&url=https%3A%2F%2Fwww.twitter.com%2Flakscastro%2F" alt="Follow" />
    </a>
  </p>
</p>
<p align="center">
  <img src="/src/assets/calculator-gif.gif" alt="Demo Image" height="200" />
</p>

<p>
  <img src="./src/assets/en.png" alt="Portuguese" height="16" />
  <a href="https://github.com/LaksCastro/minimal-ts-calculator/blob/master/README-ptbr.md">Read in English</a>
</p>

## Mas o que é isso aqui?
Este é um [aplicativo web](https://lakscastro.github.io/minimal-ts-calculator) bem simples, criado para ser uma calculadora de funções básicas, trabalha como uma PWA, então é possível instalar e usar como se fosse um aplicativo Desktop/Mobile normalmente

## Features
- Modo de demonstração
  - Descrição: Mostra a calculatora com uma barra de status mobile e em um tamanho pequeno
  - Razão: Para trabalhar com múltiplos estilos css na mesma página
- Modo Funcional:
  - Descrição: Mostra a calculadora em FullScreen, sem qualquer UI desnecessária, como a barra de status
  - Razão: Para trabalhar e estudar sobre como usar UI e UX para melhorar a usabilidade da calculadora
- Modo Claro/Escuro:
  - Descrição: Permite escolher entre os temas escuro e claro
  - Razão: Hoje em dia, a maioria dos aplicativos focados no usuário devem ter no mínimo esses dois temas

## Como clonar
### Requerimentos
- Node instalado
- Npm ou Yarn instalado

### Instalando
1. Clone este repositório
```
git clone https://github.com/LaksCastro/minimal-ts-calculator.git
```

2. Navegue até a pasta do projeto
```
cd minimal-ts-calculator
```

4. Instale as dependências
```
yarn install
or
npm install
```

5. Inicie o servidor de desenvolvimento
```
yarn dev
```

6. Criar a To create build (pre-deploy)
```
yarn pre-deploy
```

7. To create a build and push to gh-pages
```
yarn deploy
```

> *_Nota: se você quiser criar um Workflow no Github para automatizar seu trabalho de criar a build e dar deploy toda vez que houver alteração na master branch, leia mais sobre [neste repositório](https://github.com/peaceiris/actions-hugo)_*

## Construído com
- Parcel - como Module Bundler
- Typescript - Linguagem
- Github Actions - Permite criar um fluxo de trabalho automático

## License
Este projeto está sob uma licença MIT - veja o arquivo LICENSE para mais detalhes 
