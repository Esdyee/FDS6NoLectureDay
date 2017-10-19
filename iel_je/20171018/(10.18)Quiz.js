// # 16. 두 정수 사이의 합

// adder함수는 정수 x, y를 매개변수로 입력받는다.
// 두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하라.

// x와 y가 같은 경우는 둘 중 아무 수나 리턴한다.
// x, y는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않다.

// 예를들어 x가 3, y가 5이면 12를 리턴한다.

function adder(x, y) {
  var sum = 0;
  for (var i = x; i <= y; i++) {
    sum += i;
  }
  return sum;
}

console.log(adder(3, 5)); // 12


// # 17. 배열의 첫 요소와 마지막 요소로 배열 만들기
// 배열의 첫 요소와 마지막 요소를 나타내는 정수를 인자로 받아 정수의 배열을 반환하는 함수를 완성하라.
// 예를 들어 인수가 [10, 15]인 경우, [ 10, 11, 12, 13, 14, 15 ]를 반환한다.


function generateRange(from, to) {
  const res = [];
  for (var i = from; i <= to; i++) {
    res.push(i);
  }
  return res;
}
console.log(generateRange(5, 10)); // [ 10, 11, 12, 13, 14, 15 ]


// 18. 배열의 인접한 요소곱 중 가장 큰 값 구하기
// 정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라.
// 예를 들어 인수가[3, 6, -2, -5, 7, 3] 인 경우, 21 을 반환한다.

function adjacentElementsProduct(arr) {
  var arrMultiple = [];
  for (var i = 0; i < arr.length - 1; i++) {
    arrMultiple.push(arr[i] * arr[i + 1]);
  }
  console.log(arrMultiple);
  return Math.max.apply(null, arrMultiple);
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21


// 19. 배열에서 특정 값만을 구하기
// 배열 arr에서 짝수이고 3 보다 큰 수만을 구하여 이를 배열로 반환하는 함수를 작성하라

function getArray(arr) {
  var even = [];
  even = arr.filter(function(item, index, array) {
    return !(item % 2);
  })
  var result = [];
  for (var i = 0; i < even.length; i++) {
    if (even[i] > 3) {
      result.push(even[i]);
    }
  }
  return result;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(getArray(arr)); // [ 4, 6 ]



// 20. 평균구하기
// 배열을 인자로 전달받아 각 요소의 평균을 구하는 함수를 완성하라.

function average(array) {
  var sumFunc = function(p_value, c_value, cIndex, array) {
    return p_value + c_value;
  }
  var sum = array.reduce(sumFunc);
  return sum / array.length;
}
var testArray = [5, 3, 4];
console.log(average(testArray)); // 4



// 21. 최단 거리 1 차원 점의 쌍 구하기(DAUM)
// 1 차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들) 의 쌍을 배열로 반환하는 함수를 작성하라.
//   (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 예를들어[1, 3, 4, 8, 13, 17, 20, 23, 24] 이 주어졌다면,
//   결과값은[[3, 4], [23, 24]] 가 될 것이다.

function findMinDistance(array) {
  var distance = [];
  for (var i = 0; i < array.length - 1; i++) {
    distance.push(array[i + 1] - array[i]);
  }
  // console.log(distance);
  var minValue = Math.min.apply(null, distance);
  // console.log(minValue);
  var minValueIndex = [];
  for (var i = 0; i < distance.length; i++) {
    if (distance[i] === minValue) {
      minValueIndex.push(i);
    }
  }
  // console.log(minValueIndex);
  var result = [];
  for (var i = 0; i < minValueIndex.length; i++) {
    result.push([array[minValueIndex[i]], array[minValueIndex[i] + 1]]);
  }
  return result;
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]


// 22. 특별한 정렬

// n개의 정수를 가진 배열이 있다.이 배열은 양의 정수와 음의 정수를 모두 가지고 있다.
// 이 배열을 좀 특별한 방법으로 정렬해야 한다.
// 음의 정수는 앞쪽에 내림차순으로, 양의 정수는 뒷쪽에 있어야 한다.
// 단, 인수로 주어진 원본 배열은 변경되지 않아야 한다.
// 예를 들어, [-1, 1, 3, -2, 2, 0] 이 주어졌을 때, [-1, -2, 0, 1, 2, 3] 를 반환한다.


function specialSort(array) {
  var plusArray = array.filter(function(item) { return parseInt(item) >= 0 })
  var minusArray = array.filter(function(item) { return parseInt(item) < 0 })

  var sortNumberFunc = function(a, b) { return a - b }
  var sortPlusArray = plusArray.sort(sortNumberFunc)
  var revMinusArray = minusArray.sort(sortNumberFunc).reverse();

  var result = revMinusArray.concat(sortPlusArray);
  return result;
}

var testArray = [-1, 1, 3, -2, 2, 0];

console.log(testArray); // [ -1, 1, 3, -2, 2, 0 ]
console.log(specialSort(testArray)); // [ -1, -2, 0, 1, 2, 3 ]

var tArray = [-23, 3, 0, 5, 7, -27, -10, -8]

console.log(specialSort(tArray))