const alertPrime = (n) => {
  const result = [];
  for (let i = 2; i <= n; i += 1) {
    let dividersCount = 0;
    for (let b = 1; b <= i; b += 1) {
      if (i % b === 0) {
        dividersCount += 1;
      }
    }
    if (dividersCount === 2) {
      result.push(i);
    }
  }
  return result;
};
