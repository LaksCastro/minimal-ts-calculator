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
      text: "X",
      onClick: () => {},
      id: "key__mult",
      styles: {
        color: "#BEA1A3",
      },
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
      styles: {
        color: "#6E918A",
      },
    },
    Element: Button(),
  },
  {
    props: {
      text: "/",
      onClick: () => {},
      id: "key__div",
      styles: {
        color: "#81A9B7",
      },
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
      styles: {
        color: "#92ACA5",
      },
    },
    Element: Button(),
  },
  {
    props: {
      text: "=",
      onClick: () => {},
      id: "key__equal",
      styles: {
        color: "#fff",
        background: "#7B71EB",
        gridRow: "span 2",
      },
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
      styles: {
        color: "var(--color-dark)",
      },
    },
    Element: Button(),
  },
  {
    props: {
      text: "0",
      onClick: () => {},
      id: "key__0",
      styles: {
        gridColumn: "span 2",
      },
    },
    Element: Button(),
  },
  {
    props: {
      text: ".",
      onClick: () => {},
      id: "key__decimal",
      styles: {
        color: "var(--color-dark)",
      },
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
