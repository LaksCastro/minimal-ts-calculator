import hotkeys from 'hotkeys-js';

import ApplicationCalculator from "./calculator";

interface IKeyboardMethods {
  initialize: () => void;
} 

type Keyboard = () => Readonly<IKeyboardMethods>

const Keyboard : Keyboard = () => {
  
  const initialize = () => {
    for(let i = 0; i <= 9; i++){
      hotkeys(i.toString(), () => ApplicationCalculator.addText(i.toString()));
    }
    hotkeys('-', () => ApplicationCalculator.addText("-"));
    hotkeys('+', () => ApplicationCalculator.addText("+"));
    hotkeys('*', () => ApplicationCalculator.addText("×"));
    hotkeys('/', () => ApplicationCalculator.addText("÷"));
    hotkeys(',', () => ApplicationCalculator.addText("."));
    hotkeys('.', () => ApplicationCalculator.addText("."));
    hotkeys('backspace', () => ApplicationCalculator.del());
  }
  
  const self = {
    initialize
  }
  
  return Object.freeze(self);
}
