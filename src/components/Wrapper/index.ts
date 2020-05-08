import { IComponentMethods } from "../../types";
import Buttons from "./buttons";

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
  const render = async () => {
    const childs = [];

    for (const Button of Buttons) {
      childs.push(await Button.Element.render(Button.props));
    }

    const html = `
      <div id="wrapper">
        <div class="wrapper__display">a</div>
        <div class="wrapper__buttons">
          ${childs.join("")}
        </div>
      </div>
    `;

    return html;
  };

  const afterRender = async () => {
    for (const Button of Buttons) {
      await Button.Element.afterRender();
    }
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
