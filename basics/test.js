var obj = {
  value: 1,
  increment: function() {
    this.value += 1;
    return this.value;
  }
}
console.log (obj.increment() == 2);
console.log (obj.increment() == 3);
console.log (obj.increment() == 4);