const sumTo = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const sumToRecursive = (n) => {
  if (n === 1) return 1;
  return n + sumToRecursive(n - 1);
};
