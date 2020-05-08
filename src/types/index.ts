export type Factory = () => Readonly<object>;

export interface IComponentMethods {
  render: (props: object) => Promise<string>;
  afterRender: () => Promise<any>;
  destroy: () => Promise<any>;
}
