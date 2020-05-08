const toCssCase = (str: string): string =>
  str
    .replace(/\.?([A-Z])/g, function (x, y) {
      return "-" + y.toLowerCase();
    })
    .replace(/^-/, "");

export { toCssCase };
