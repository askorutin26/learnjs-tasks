const readNumber = () => {
  let num;
  while (!num) {
    num = Number(prompt("Введите число"));
  }
  return Number(num);
};
