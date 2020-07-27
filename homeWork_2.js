// 1. Реализовать методы массива

// function map (arr, fn) {

// }

// map([1,2,3,4,5], function (elem) {
//    return elem * 2;
// }); // [2,4,6,8,10]

// 2. filter

// function filter (arr, fn) {

// }

// filter([1,2,3,4,6], function (elem) {
//     return elem % 2;
// }); // [1,3]

// 3. some https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// 4. every https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// 5. https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// 1. Реализовать методы массива
const map = (arr, callback, arg) => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(callback.call(arg, arr[i], i, arr));
  }
  return results;
};

const filter = (arr, callback, arg) => {
  let results = [];
  for (i = 0; i < arr.length; i++) {
    if (callback.call(arg, arr[i], i, arr)) {
      results.push(arr[i]);
    }
  }
  return results;
};

const some = (arr, callback, arg) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(arg, arr[i], i, arr)) {
      return true
    }
  }
  return false
};

const every = (arr, callback, arg) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback.call(arg, arr[i], i, arr)) {
      return false
    }
  }
  return true
};

const reduce = (arr, callback, start) => {
  let result = start;
  for (let i = 0; i < arr.length; i++) {
    result = callback.call(null, result, arr[i], i, arr);
  }
  return result;
};
