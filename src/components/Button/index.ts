import { IComponentMethods } from "../../types";
import { toCssCase } from "../../utils";

// =============================================================================
// Define render props types
// =============================================================================
export interface IButtonProps {
  text: string;
  id: string;
  styles?: {
    gridRow?: string;
    gridColumn?: string;
    color?: string;
  };
  onClick: () => any;
}
const defaultButtonProps: IButtonProps = {
  text: "",
  id: "",
  onClick: () => {},
  styles: {
    gridRow: "span 1",
    gridColumn: "span 2",
    color: "var(--color)",
  },
};
// =============================================================================
// To override the render method to set props interface
// =============================================================================
export interface IButtonMethods extends IComponentMethods {
  render: (props: IButtonProps) => Promise<string>;
}
// =============================================================================
// Create a Button Factory type to use IButtonMethods especialized interface
// =============================================================================
type ButtonFactory = () => Readonly<IButtonMethods>;

// =============================================================================
// Create component with factory especialized type for this component
// =============================================================================
const Button: ButtonFactory = () => {
  let localProps: IButtonProps;

  const getNodeElement: () => HTMLElement = () =>
    document.getElementById(localProps.id);

  const render = async (props: IButtonProps) => {
    localProps = Object.assign({}, defaultButtonProps, props);

    const styles = Object.keys(localProps.styles)
      .map((key) => `${toCssCase(key)}: span ${localProps.styles[key]}`)
      .join(";");

    const { text, id } = localProps;

    const html = `<button style="${styles}" id="${id}" class="wrapper__button" type="button">${text}</button>`;

    return html;
  };

  const afterRender = async () => {
    const { onClick } = localProps;

    const ButtonNode = getNodeElement();

    ButtonNode.addEventListener("click", onClick);
  };

  const destroy = async () => {
    const { onClick } = localProps;

    const ButtonNode = getNodeElement();

    ButtonNode.removeEventListener("click", onClick);
  };

  const self = {
    render,
    afterRender,
    destroy,
  };

  return Object.freeze(self);
};

export default Button;
