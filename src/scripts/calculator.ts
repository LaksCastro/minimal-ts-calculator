import ApplicationState from "./state";

// =============================================================================
// Define all Calculator Methods that allow manage sheself
// =============================================================================
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

  const operations = ["+", "-", "×", "÷"];

  const lastCaracterIsOperation = (text: string): boolean =>
    operations.includes(text[text.length - 1]);

  const lastCaracterIsDot = (text: string): boolean => /\,$/g.test(text);

  const haveDot: (text: string) => boolean = (text) => !!text.match(/\./g);

  const removeFirstLetter = (text: string): string =>
    text.substr(1, text.length - 1);

  const removeLastLetter = (text: string): string =>
    text.substr(0, text.length - 1);

  const normalizeDisplay = (text: string): string => {
    let expressionOperations: Array<string>;

    let expressionValues: Array<string> = text.split(/[+]|[-]|[×]|[÷]/g);

    expressionOperations = text
      .split("")
      .filter((char: string): boolean => operations.includes(char));

    expressionValues = expressionValues.map((value) => {
      let valid = value;

      if (/^0./g.test(value) && !/^0\./g.test(value))
        valid = removeFirstLetter(value);

      valid = valid.replace(/\.\.+/g, ".");

      const dots = valid.match(/\./g);

      if (dots && dots.length > 1) {
        valid = removeLastLetter(valid);
      }

      return valid;
    });

    const expressionNormalized = [];

    expressionValues.forEach((value, i) =>
      expressionNormalized.push(value, expressionOperations[i] || "")
    );

    return expressionNormalized.join("") || "0";
  };

  const calculate = (expression: string): number | string => {
    try {
      const result: number = eval(normalizeExpression(expression));

      // If the result is infinity or is NaN, then the expression is invalid
      if (!Number.isFinite(result) || Number.isNaN(result)) throw new Error();

      return result;
    } catch (error) {
      return expression;
    }
  };

  const getResult = () => {
    const result = calculate(ApplicationState.getState().display);

    if (typeof result !== "number") return;

    ApplicationState.setState((currentState) => ({
      ...currentState,
      display:
        /\./g.test(result.toString()) && result > 0
          ? result.toFixed(1)
          : result.toString(),
    }));
  };

  const clear = () => {
    ApplicationState.setState((currentState) => ({
      ...currentState,
      display: "0",
    }));
  };

  const addText = (char: string) => {
    const tryingAddOperation = operations.includes(char);
    const tryingAddDot = char === ".";

    const { display } = ApplicationState.getState();
    const lastIsDot = display[display.length - 1] === ".";

    // To prevent 1+2+3+.
    if (tryingAddDot && lastCaracterIsOperation(display)) return;

    // To prevent 1+3.+
    if (tryingAddOperation && lastIsDot) return;

    // To prevent 1+1++
    if (tryingAddOperation && lastCaracterIsOperation(display)) return;

    // To prevent 1+1+1..
    if (tryingAddDot && lastIsDot) return;

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
