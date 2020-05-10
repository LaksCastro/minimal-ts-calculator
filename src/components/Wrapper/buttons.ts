import Button, { IButtonProps, IButtonMethods } from "../Button";
import ApplicationCalculator from "../../scripts/calculator";

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
      text: "DEL",
      onClick: () => ApplicationCalculator.del(),
      id: "key__del",
      gridColumn: "span 2",
    },
    Element: Button(),
  },
  {
    props: {
      text: "C",
      onClick: () => ApplicationCalculator.clear(),
      id: "key__clear",
      variant: "inative",
    },
    Element: Button(),
  },
  {
    props: {
      text: "÷",
      onClick: () => ApplicationCalculator.addText("÷"),
      id: "key__div",
      variant: "colorful",
    },
    Element: Button(),
  },
  {
    props: {
      text: "7",
      onClick: () => ApplicationCalculator.addText("7"),
      id: "key__7",
    },
    Element: Button(),
  },
  {
    props: {
      text: "8",
      onClick: () => ApplicationCalculator.addText("8"),
      id: "key__8",
    },
    Element: Button(),
  },
  {
    props: {
      text: "9",
      onClick: () => ApplicationCalculator.addText("9"),
      id: "key__9",
    },
    Element: Button(),
  },
  {
    props: {
      text: "×",
      onClick: () => ApplicationCalculator.addText("×"),
      id: "key__mult",
      variant: "colorful",
    },
    Element: Button(),
  },
  {
    props: {
      text: "4",
      onClick: () => ApplicationCalculator.addText("4"),
      id: "key__4",
    },
    Element: Button(),
  },
  {
    props: {
      text: "5",
      onClick: () => ApplicationCalculator.addText("5"),
      id: "key__5",
    },
    Element: Button(),
  },
  {
    props: {
      text: "6",
      onClick: () => ApplicationCalculator.addText("6"),
      id: "key__6",
    },
    Element: Button(),
  },
  {
    props: {
      text: "-",
      onClick: () => ApplicationCalculator.addText("-"),
      id: "key__minus",
      variant: "colorful",
    },
    Element: Button(),
  },
  {
    props: {
      text: "1",
      onClick: () => ApplicationCalculator.addText("1"),
      id: "key__1",
    },
    Element: Button(),
  },
  {
    props: {
      text: "2",
      onClick: () => ApplicationCalculator.addText("2"),
      id: "key__2",
    },
    Element: Button(),
  },
  {
    props: {
      text: "3",
      onClick: () => ApplicationCalculator.addText("3"),
      id: "key__3",
    },
    Element: Button(),
  },
  {
    props: {
      text: "+",
      onClick: () => ApplicationCalculator.addText("+"),
      id: "key__sum",
      variant: "colorful",
    },
    Element: Button(),
  },
  {
    props: {
      text: "0",
      onClick: () => ApplicationCalculator.addText("0"),
      id: "key__0",
      gridColumn: "span 2",
    },
    Element: Button(),
  },
  {
    props: {
      text: ".",
      onClick: () => ApplicationCalculator.addText("."),
      id: "key__decimal",
      variant: "inative",
    },
    Element: Button(),
  },
  {
    props: {
      text: "=",
      onClick: () => ApplicationCalculator.getResult(),
      id: "key__equal",
      variant: "especial",
    },
    Element: Button(),
  },
];

export default Buttons;
