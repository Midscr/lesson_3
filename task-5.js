var arr = [1, 2, -4, 3, -9, -1, 7];
var arrLength = arr.length;
var newArr = [];
function isPositive(num) {
  if (typeof num !== 'number') {
    throw new Error('parameter type is not a Number');
  } else if (num < 0) {
    return false
  } else if (num >= 0) {
    return true
  }
}
for (let i = 0; i < arrLength; i++) {
  const val = arr[i];
  if (isPositive(val)) {
    newArr.push(val);
  }
}