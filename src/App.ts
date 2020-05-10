import "./styles/app.scss";
import Wrapper from "./components/Wrapper";

(async () => {
  const root: HTMLElement = document.getElementById("root");

  const WrapperElement = Wrapper();

  root.innerHTML += await WrapperElement.render();
  WrapperElement.afterRender();
})();
