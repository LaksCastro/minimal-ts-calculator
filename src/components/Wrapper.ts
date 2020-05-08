import { ComponentFactory } from "../types";

const Wrapper: ComponentFactory = () => {
  const render = async () => {
    const html = ``;

    return html;
  };
  const afterRender = async () => {
    const html = ``;

    return html;
  };
  const destroy = async () => {
    const html = ``;

    return html;
  };

  const self = {
    render,
    afterRender,
    destroy,
  };

  return Object.freeze(self);
};

export default Wrapper;
