import { IComponentMethods } from "../types";
import Button, { IButtonProps, IButtonMethods } from "./Button";

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
  // =============================================================================
  // Use Button Component Factory to create nine buttons [0-9]
  // =============================================================================
  type ButtonKey = {
    props: IButtonProps;
    Element: IButtonMethods;
  };
  const Buttons: Array<ButtonKey> = Array.from({ length: 9 }).map(
    (_, i: number) => {
      const Element = Button();

      const props = {
        text: (i + 1).toString(),
        onClick: () => {},
        id: `key__${i + 1}`,
      };

      return {
        props,
        Element,
      };
    }
  );

  const render = async () => {
    const childs = [];

    for (const Button of Buttons) {
      childs.push(await Button.Element.render(Button.props));
    }

    const html = `<div id="wrapper">${childs.join("")}</div>`;

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
