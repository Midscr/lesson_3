function f() {
  var sum = 0;
  for (const val of arguments) {
    if (typeof val === 'number') {
      sum += val;
    } else {
      throw new Error('all parameters type should be a Number');
    }
  }
  return sum
}