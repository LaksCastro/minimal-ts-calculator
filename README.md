<p align="center">
  <img src="./public/favicon.png" width="150" alt="Project Logo">
  <p align="center">⭐⭐⭐⭐⭐</p> 
  <h1 align="center">Minimal Typescript Calculator</h1>
  <p align="center">Learning Typescript and Github Actions with this project :D</p>
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
  <img src="./src/assets/pt-br.png" alt="Portuguese" height="16" />
  <a href="https://github.com/LaksCastro/minimal-ts-calculator/blob/master/README-ptbr.md">Ler em português</a>
</p>

## But what is this?
It's a very simple [web application](https://lakscastro.github.io/minimal-ts-calculator), created for to be a simple calculator, work as PWA, then is possible to install and use as Desktop or Mobile app normally

## Features
- Demonstration Mode
  - Description: Show the calculator with a mobile status bar and in small size
  - Why: To work with multiple stylesheets in the same page
- Functional Mode:
  - Description: Show the calculator in FullScreen, without unnecessary UI, like the StatusBar
  - Why: To work with UI and UX for improve the calculator usability
- Light/Dark Mode:
  - Description: Allow to switch a dark or light theme
  - Why: Nowadays, most user-focused applications must have at least these two themes

## How to clone
### Requeriments
- Node installed
- Npm or Yarn installed

### Installing
1. Clone the repository
```
git clone https://github.com/LaksCastro/minimal-ts-calculator.git
```

2. Navigate to the project folder
```
cd minimal-ts-calculator
```

4. Install dependencies
```
yarn install
or
npm install
```

5. Run development server
```
yarn dev
```

6. To create build (pre-deploy)
```
yarn pre-deploy
```

7. To create a build and push to gh-pages
```
yarn deploy
```

> *_Note: If you want create a github workflow to deploy automatically on push in master branch, [see this repository](https://github.com/peaceiris/actions-hugo)_*

## License
This project is licensed under the MIT license - see the LICENSE archive for more details.
