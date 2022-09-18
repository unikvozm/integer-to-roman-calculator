export const integerToRomanConverter = (integer: number): string => {
  if (typeof integer !== 'number' || Number.isNaN(integer))
    throw new Error('The input should be a number');
  if (integer < 1 || integer > 1000)
    throw Error(
      'The input can accept only numbers from 1 to 1000 inclusively.'
    );
  if (integer % 1 !== 0) throw Error('The input has to be an integer');

  // Map was chosen here because it preserves the order of its keys
  const romanMap = new Map<number, string>([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]);
  // to get the output if it's already known
  if (romanMap.has(integer)) return romanMap.get(integer)!;

  let output = '';
  romanMap.forEach((roman, int) => {
    if (integer >= int) {
      output += roman.repeat(Math.floor(integer / int));
      integer %= int;
    }
  });
  return output;
};
