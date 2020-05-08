import { IComponentMethods } from "../../types";
import Buttons from "./buttons";
import DisplayComponent, { DisplayAPI, IDisplayMethods } from "../Display";
import State from "../../scripts/state";

// =============================================================================
// To override the render method to set props interface
// =============================================================================
interface IWrapperMethods extends IComponentMethods {
  render: () => Promise<string>;
}

// =============================================================================
// Create a Wrapper Factory type to use IWrapperMethods especialized interface
// =============================================================================
type WrapperFactory = () => Readonly<IWrapperMethods>;

// =============================================================================
// Create component with factory especialized type for this component
// =============================================================================
const Wrapper: WrapperFactory = () => {
  type DisplayManager = {
    Element: IDisplayMethods;
    API?: DisplayAPI;
    setAPI: (API: DisplayAPI) => void;
  };
  const DisplayManager: DisplayManager = {
    Element: DisplayComponent(),
    setAPI: function (API) {
      this.API = API;
    },
  };

  const render = async () => {
    const allButtons = [];

    for (const Button of Buttons) {
      allButtons.push(await Button.Element.render(Button.props));
    }

    const html = `
      <div id="wrapper">
        <div class="wrapper__display">
          ${await DisplayManager.Element.render({
            text: State.getState().display,
          })}
        </div>
        <div class="wrapper__buttons">
          ${allButtons.join("")}
        </div>
      </div>
    `;

    return html;
  };

  const afterRender = async () => {
    for (const Button of Buttons) {
      await Button.Element.afterRender();
    }

    DisplayManager.setAPI(await DisplayManager.Element.afterRender());

    State.onStateChange((state) =>
      DisplayManager.API.setDisplayText(state.display)
    );
  };

  const destroy = async () => {
    for (const Button of Buttons) {
      await Button.Element.destroy();
    }
  };

  const self = {
    render,
    afterRender,
    destroy,
  };

  return Object.freeze(self);
};

export default Wrapper;
