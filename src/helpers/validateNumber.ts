const validateNumber = (number: number) => {
  let value = '';
  number
    .toString()
    .split('')
    .forEach((el, i) =>
      i === 2 || i === 5 ? (value += `${[el]} `) : (value += [el])
    );
  return value;
};

export default validateNumber;
