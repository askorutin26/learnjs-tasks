const multipleBumeric = (obj) => {
  for (let key in obj) {
    const keyValue = obj[key];
    if (typeof keyValue === "number") {
      obj[key] = keyValue * 2;
    }
  }
};
