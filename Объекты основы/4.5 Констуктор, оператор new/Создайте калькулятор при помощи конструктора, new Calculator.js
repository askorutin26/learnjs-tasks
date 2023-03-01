function Calculator() {
  this.read = function () {
    this.a = alert("a", 0);
    this.b = alert("b", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
