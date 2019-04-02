function f(arr) {
  if (typeof arr !== 'object') {
    throw new Error('parameter type should be an array');
  } else if (arr.length === 0) {
    throw new Error('parameter can\'t be an empty');
  } else {
    var arrLength = arr.length;
    if (arrLength === 1) {
      console.log(arr[0]);
    } else {
      console.log(arr[0]);
      return f(arr.splice(1, arrLength - 1));
    }
  }
}
