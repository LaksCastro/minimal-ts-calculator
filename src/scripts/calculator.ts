import ApplicationState, { State } from "./state";

interface ICalculatorMethods {
  getResult: () => void;
  clear: () => void;
  addText: (char: string) => void;
  del: () => void;
}

type CalculatorFactory = () => Readonly<ICalculatorMethods>;

const Calculator: CalculatorFactory = () => {
  const normalizeExpression = (text: string): string => {
    return text.replace(/×/g, "*").replace(/÷/g, "/");
  };

  const validOperations = ["+", "-", "×", "÷"];

  const lastIsOp = (text) => validOperations.includes(text[text.length - 1]);

  const removeFirstLetter = (text: string): string =>
    text.substr(1, text.length - 1);

  const normalizeDisplay = (text: string): string => {
    let operations: Array<string> = [];

    let numbers: Array<string> = text.split(/[+]|[-]|[×]|[÷]/g);

    operations = text
      .split("")
      .filter((char) => validOperations.includes(char));

    numbers = numbers.map((num) => {
      let valid = num;

      if (/^0./g.test(num) && !/^0\./g.test(num)) {
        valid = removeFirstLetter(num);
      }

      return valid;
    });

    const normalized = [];

    numbers.forEach((num, i) => normalized.push(num, operations[i] || ""));

    return normalized.join("") || "0";
  };

  const calculate = (expression: string): number =>
    eval(normalizeExpression(expression));

  const getResult = () => {
    const result: number = calculate(ApplicationState.getState().display);

    ApplicationState.setState((currentState) => ({
      ...currentState,
      display: result.toFixed(2),
      value: result,
    }));
  };
  const clear = () => {
    ApplicationState.setState((currentState) => ({
      ...currentState,
      display: "0",
      value: 0,
    }));
  };

  const addText = (char: string) => {
    const isOp = validOperations.includes(char);
    if (isOp && lastIsOp(ApplicationState.getState().display)) return;

    ApplicationState.setState((currentState) => ({
      ...currentState,
      display: normalizeDisplay(currentState.display + char),
    }));
  };

  const del = () => {
    ApplicationState.setState((currentState) => ({
      ...currentState,
      display: normalizeDisplay(
        currentState.display.substr(0, currentState.display.length - 1)
      ),
    }));
  };
  const self = {
    getResult,
    clear,
    addText,
    del,
  };

  return Object.freeze(self);
};

const ApplicationCalculator = Calculator();

export default ApplicationCalculator;
