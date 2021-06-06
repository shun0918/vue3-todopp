type Sum = (num1: number, num2: number, num3?: number) => number;

export const sum: Sum = (num1, num2, num3 = null) => {
  if (num3) {
    return num1 + num2 + num3;
  } else {
    return num1 + num2;
  }
};
