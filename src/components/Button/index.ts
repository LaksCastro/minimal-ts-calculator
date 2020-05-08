import { IComponentMethods } from "../../types";

// =============================================================================
// Define render props types
// =============================================================================
export interface IButtonProps {
  text: string;
  id: string;
  variant?: "especial" | "normal" | "colorful" | "inative";
  gridRow?: string;
  gridColumn?: string;
  onClick: () => any;
}
const defaultButtonProps: IButtonProps = {
  text: "",
  id: "",
  onClick: () => {},
  variant: "normal",
  gridRow: "span 1",
  gridColumn: "span 1",
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

    const { text, id, variant, gridColumn, gridRow } = localProps;

    const html = `
      <button 
        style="grid-row: ${gridRow}; grid-column: ${gridColumn}"
        id="${id}" 
        class="wrapper__button wrapper__button--${variant}" 
        type="button"
      >
          ${text}
      </button> 
    `;

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
