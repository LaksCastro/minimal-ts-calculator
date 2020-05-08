import { IComponentMethods } from "../../types";

export type DisplayProps = {
  text: string;
};

export interface IDisplayAPI {
  setDisplayText: (newText: string) => void;
}

// =============================================================================
// To override the render method to set props interface
// =============================================================================
export interface IDisplayMethods extends IComponentMethods {
  render: (props: DisplayProps) => Promise<string>;
  afterRender: () => Promise<IDisplayAPI>;
}
// =============================================================================
// Create a Button Factory type to use IButtonMethods especialized interface
// =============================================================================
type DisplayFactory = () => Readonly<IDisplayMethods>;

// =============================================================================
// Create component with factory especialized type for this component
// =============================================================================
const Display: DisplayFactory = () => {
  let localProps: DisplayProps;

  const getNodeElement: () => HTMLElement = () =>
    document.getElementById("display__text");

  const setDisplayText = (newText) => {
    const DisplayNode = getNodeElement();

    DisplayNode.textContent = newText;
  };

  const render = async (props: DisplayProps) => {
    localProps = props;

    const { text } = localProps;

    const html = `
        <div id="display__text" class="wrapper__display__text">${text}</div>
    `;

    return html;
  };

  const afterRender = async () => {
    const API = {
      setDisplayText,
    };
    return API;
  };

  const destroy = async () => {};

  const self = {
    render,
    afterRender,
    destroy,
  };

  return Object.freeze(self);
};

export default Display;
