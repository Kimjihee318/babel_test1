"use strict";

var numArr1 = [2, 0, 3, 4, 1];
var numArr2 = [2, 0, 3, 4, 1];
var numArr3 = [2, 0, 3, 4, 1];
var objArr = [{
  id: 2,
  name: 'Leo'
}, {
  id: 0,
  name: 'Daniel'
}, {
  id: 3,
  name: 'Asher'
}, {
  id: 4,
  name: 'Chloe'
}, {
  id: 1,
  name: 'Chloe'
}]; // 비교값 > 0 : a가 b보다 작은 인덱스를 가짐

numArr1.sort(function (a, b) {
  console.log("arr: ".concat(numArr1, " ///// a:").concat(a, ", b:").concat(b, ", a-b(\uC791\uC740\uAC8C \uC55E): ").concat(a - b, ", b-a(\uD070\uAC8C \uC55E):").concat(b - a));
});
numArr1.sort(function () {
  return 1;
}); // 비교값 < 0 : a가 b보다 큰 인덱스를 가짐

numArr2.sort(function (a, b) {
  return -1;
}); // 비교값 = 0 : a와 b가 같아 sorting 되지 않음

numArr3.sort(function (a, b) {
  return 0;
});
objArr.sort(function (a, b) {
  if (a.name > b.name) return 1;else if (b.name > a.name) return -1;else return 0;
});
console.log("\uC624\uB984\uCC28\uC21C : ".concat(numArr1));
console.log("\uB0B4\uB9BC\uCC28\uC21C : ".concat(numArr2));
console.log("\uADF8\uB300\uB85C : ".concat(numArr3));
console.log(objArr);