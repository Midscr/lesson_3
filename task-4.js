function f(num) {
  var day = ''
  if (typeof num !== 'number' ) {
    throw new Error('parameter type is not a Number');
  } else if (num % 1 !== 0 || num < 1 || num > 7 ) {
    throw new Error('parameter should be in the range of 1 to 7');
  } else {
    switch (num) {
      case 1:
        day = 'Воскресенье'
        break;
      case 2:
        day = 'Понедельник'
        break;
      case 3:
        day = 'Вторник'
        break;
      case 4:
        day = 'Среда'
        break;
      case 5:
        day = 'Четверг'
        break;
      case 6:
        day = 'Пятница'
        break;
      case 7:
        day = 'Суббота'
        break;
    }
  }
  return day
}