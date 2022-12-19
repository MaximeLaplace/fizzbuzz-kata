const isMultipleOf = (divider: number) => (n: number) => n % divider === 0;

export const replaceNumber = (n: number): string => {
  let output = "";

  if (isMultipleOf(3)(n)) {
    output += "fizz";
  }
  if (isMultipleOf(5)(n)) {
    output += "buzz";
  }

  return output || `${n}`;
};

const range = (n: number): number[] => Array.from({ length: n }, (_, i) => i + 1);

// export const fizzBuzz = (n: number): string[] => {
//   if (n === 1) {
//     return ["1"];
//   }
//   return [...fizzBuzz(n - 1), replaceNumber(n)];
// };

export const fizzBuzz = (n: number): string[] => range(n).map(replaceNumber);
