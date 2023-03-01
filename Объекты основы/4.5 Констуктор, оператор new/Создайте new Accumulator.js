function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    const addingValue = prompt("Новое число", 0);
    this.value += addingValue;
  };
}
