import "./styles/app.scss";
import { register } from "./serviceWorker";
import Wrapper from "./components/Wrapper";

(async () => {
  const root: HTMLElement = document.getElementById("root");

  const WrapperElement = Wrapper();

  root.innerHTML += await WrapperElement.render();
  WrapperElement.afterRender();

  register();
})();
