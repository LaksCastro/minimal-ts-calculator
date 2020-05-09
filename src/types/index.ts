export interface IComponentMethods {
  render: (props?: object) => Promise<string>;
  afterRender: () => Promise<any>;
}

declare global {
  interface Window {
    __setPreferredTheme: (newTheme: string) => void;
    __setPreferredView: (newView: string) => void;
    __onThemeChange: () => any;
    __onViewChange: () => any;
    __theme: string;
    __view: string;
  }
}
