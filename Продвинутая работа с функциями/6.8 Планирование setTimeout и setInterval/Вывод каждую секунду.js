const printNumbers = (from, to) => {
  let current = from;
  const print = () => {
    console.log(current);
    if (current === to) {
      clearInterval(timerId);
    }
    current += 1;
  };
  let timerId = setInterval(print, 1000);
};
