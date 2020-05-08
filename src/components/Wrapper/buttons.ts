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
        color: "red",
      },
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
      text: "8",
      onClick: () => {},
      id: "key__8",
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
      text: "+",
      onClick: () => {},
      id: "key__sum",
      styles: {
        color: "green",
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
        color: "deepskyblue",
      },
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
      text: "5",
      onClick: () => {},
      id: "key__5",
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
      text: "-",
      onClick: () => {},
      id: "key__minus",
      styles: {
        color: "gold",
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
        color: "#d1d1d1",
        gridRow: "2",
      },
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
      text: "2",
      onClick: () => {},
      id: "key__2",
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
      text: "C",
      onClick: () => {},
      id: "key__clear",
      styles: {
        color: "#d1d1d1",
      },
    },
    Element: Button(),
  },
  {
    props: {
      text: ".",
      onClick: () => {},
      id: "key__decimal",
    },
    Element: Button(),
  },
  {
    props: {
      text: "0",
      onClick: () => {},
      id: "key__0",
      styles: {
        gridColumn: "2",
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
console.log("ekaoeka");
console.log(Buttons.length);
export default Buttons;
