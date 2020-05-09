import "boxicons";
import "./styles.scss";

import MenuHamburger from "menu-hamburger";

import { IComponentMethods } from "../../types";

export interface IMenuAPI {
  toggle: () => void;
}

export interface IMenuMethods extends IComponentMethods {
  afterRender: () => Promise<IMenuAPI>;
}

type Menu = () => Readonly<IMenuMethods>;

const Menu: Menu = () => {
  const getMenuElement: () => HTMLElement = () =>
    document.getElementById("menu-wrapper");

  const render = async () => {
    const html = `
        <div id="menu-container"></div>
        <nav id="menu-wrapper" class="closed">
            <h1 class="menu-wrapper__title">Calculator</h1>
            <div data-menu-action="change-to-functional" class="menu-wrapper__item">
                <box-icon size="12px" name="carousel"></box-icon>
                <p>Functional Mode</p>
            </div>
            <div data-menu-action="change-to-demo" class="menu-wrapper__item">
                <box-icon size="12px" name="landscape"></box-icon>
                <p>Demonstration Mode</p>
            </div>

            <h1 class="menu-wrapper__title">Theme</h1>
            <div data-menu-action="change-to-dark" class="menu-wrapper__item">
                <box-icon size="12px" name="moon"></box-icon>
                <p>Dark</p>
            </div>
            <div data-menu-action="change-to-light" class="menu-wrapper__item">
                <box-icon size="12px" name="sun"></box-icon>
                <p>Light</p>
            </div>

            <h1 class="menu-wrapper__title">About</h1>
            <a 
              href="https://github.com/LaksCastro" 
              rel="noopener noreferrer external" 
              target="_blank"
              class="menu-wrapper__item"
            >
                <box-icon size="12px" name="game"></box-icon>
                <p>Author</p>
            </a>
            <a 
              href="https://github.com/LaksCastro/minimal-ts-calculator" 
              rel="noopener noreferrer external" 
              target="_blank" 
              class="menu-wrapper__item"
            >
                <box-icon size="12px" name="code-alt"></box-icon>    
                <p>Code</p>
            </a>
        </nav>
    `;

    return html;
  };
  const afterRender = async () => {
    const { toggle, on } = MenuHamburger.initialize({
      rootElement: document.getElementById("menu-container"),
      size: 35,
      backgroundColor: "transparent",
      iconColor: "var(--color)",
      lineWidth: 1,
    });

    on("open", () => {
      getMenuElement().classList.add("opened");
      getMenuElement().classList.remove("closed");
    });

    on("close", () => {
      getMenuElement().classList.add("closed");
      getMenuElement().classList.remove("opened");
    });

    const buttonToDark: HTMLDivElement = document.querySelector(
      ".menu-wrapper__item[data-menu-action='change-to-dark']"
    );

    const buttonToLight: HTMLDivElement = document.querySelector(
      ".menu-wrapper__item[data-menu-action='change-to-light']"
    );

    const buttonToFunctional: HTMLDivElement = document.querySelector(
      ".menu-wrapper__item[data-menu-action='change-to-functional']"
    );

    const buttonToDemo: HTMLDivElement = document.querySelector(
      ".menu-wrapper__item[data-menu-action='change-to-demo']"
    );

    const setActiveThemeButton = () => {
      if (window.__theme === "dark") {
        buttonToDark.classList.add("active");
        buttonToLight.classList.remove("active");
      } else {
        buttonToDark.classList.remove("active");
        buttonToLight.classList.add("active");
      }
      return setActiveThemeButton;
    };
    const setActiveViewButton = () => {
      if (window.__view === "demo") {
        buttonToDemo.classList.add("active");
        buttonToFunctional.classList.remove("active");
      } else {
        buttonToDemo.classList.remove("active");
        buttonToFunctional.classList.add("active");
      }
      for (const icon of document.querySelectorAll("box-icon")) {
        icon.setAttribute("size", window.__view === "demo" ? "12px" : "1em");
      }

      return setActiveViewButton;
    };

    window.__onThemeChange = setActiveThemeButton();

    window.__onViewChange = setActiveViewButton();

    buttonToDark.addEventListener("click", () =>
      window.__setPreferredTheme("dark")
    );

    buttonToLight.addEventListener("click", () =>
      window.__setPreferredTheme("light")
    );

    buttonToFunctional.addEventListener("click", () =>
      window.__setPreferredView("functional")
    );

    buttonToDemo.addEventListener("click", () =>
      window.__setPreferredView("demo")
    );

    const API: IMenuAPI = {
      toggle,
    };

    return API;
  };

  const self = {
    render,
    afterRender,
  };

  return Object.freeze(self);
};

export default Menu;
