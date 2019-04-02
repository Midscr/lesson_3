function f(a,b,c) {
  for (const val of arguments) {
    if (typeof val !== 'number') {
      throw new Error('all parameters type should be a Number');
    }
  }
  return (a - b)/c
}
