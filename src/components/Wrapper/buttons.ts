import Button, { IButtonProps, IButtonMethods } from "../Button";

// =============================================================================
// Use Button Component Factory to create nine buttons [0-9] and special keys
// =============================================================================

type ButtonKey = {
  props: IButtonProps;
  Element: IButtonMethods;
};

const Buttons: Array<ButtonKey> = [
  {
    props: {
      text: "×",
      onClick: () => {},
      id: "key__mult",
      variant: "colorful",
    },
    Element: Button(),
  },
  {
    props: {
      text: "7",
      onClick: () => {},
      id: "key__7",
    },
    Element: Button(),
  },
  {
    props: {
      text: "8",
      onClick: () => {},
      id: "key__8",
    },
    Element: Button(),
  },
  {
    props: {
      text: "9",
      onClick: () => {},
      id: "key__9",
    },
    Element: Button(),
  },
  {
    props: {
      text: "+",
      onClick: () => {},
      id: "key__sum",
      variant: "colorful",
    },
    Element: Button(),
  },
  {
    props: {
      text: "÷",
      onClick: () => {},
      id: "key__div",
      variant: "colorful",
    },
    Element: Button(),
  },
  {
    props: {
      text: "4",
      onClick: () => {},
      id: "key__4",
    },
    Element: Button(),
  },
  {
    props: {
      text: "5",
      onClick: () => {},
      id: "key__5",
    },
    Element: Button(),
  },
  {
    props: {
      text: "6",
      onClick: () => {},
      id: "key__6",
    },
    Element: Button(),
  },
  {
    props: {
      text: "-",
      onClick: () => {},
      id: "key__minus",
      variant: "colorful",
    },
    Element: Button(),
  },
  {
    props: {
      text: "=",
      onClick: () => {},
      id: "key__equal",
      variant: "especial",
      gridRow: "span 2",
    },
    Element: Button(),
  },
  {
    props: {
      text: "1",
      onClick: () => {},
      id: "key__1",
    },
    Element: Button(),
  },
  {
    props: {
      text: "2",
      onClick: () => {},
      id: "key__2",
    },
    Element: Button(),
  },
  {
    props: {
      text: "3",
      onClick: () => {},
      id: "key__3",
    },
    Element: Button(),
  },
  {
    props: {
      text: "C",
      onClick: () => {},
      id: "key__clear",
      variant: "inative",
    },
    Element: Button(),
  },
  {
    props: {
      text: "0",
      onClick: () => {},
      id: "key__0",
      gridColumn: "span 2",
    },
    Element: Button(),
  },
  {
    props: {
      text: ".",
      onClick: () => {},
      id: "key__decimal",
      variant: "inative",
    },
    Element: Button(),
  },
  {
    props: {
      text: "DEL",
      onClick: () => {},
      id: "key__del",
    },
    Element: Button(),
  },
];

export default Buttons;
