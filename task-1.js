function f(num) {
  if (typeof num === 'number') {
    return num ** 3
  } else {
    throw new Error('parameter type is not a Number');
  }
}