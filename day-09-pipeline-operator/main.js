const capitalize = x => str[0].toUpperCase() + str.substring(1);
const doubleSay = x => str + ', ' + str;
const exclaim = x => str + '!';

function pipeline(...funcs) {
  return function (val) {
    let lastResult = val;
    for (func of funcs) {
      lastResult = func(lastResult);
    }

    return lastResult;
  }
}

const x = pipeline(doubleSay, capitalize, exclaim)('hello');
