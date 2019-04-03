const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const numArr3 = [2, 0, 3, 4, 1];
const objArr = [
    { id: 2, name: 'Leo' }, 
    { id: 0, name: 'Daniel' }, 
    { id: 3, name: 'Asher' },
    { id: 4, name: 'Chloe' },
    { id: 1, name: 'Chloe' } 
];
// 비교값 > 0 : a가 b보다 작은 인덱스를 가짐
numArr1.sort(function(a, b) { 
  console.log(`arr: ${numArr1} ///// a:${a}, b:${b}, a-b(작은게 앞): ${a-b}, b-a(큰게 앞):${b-a}`);
 });
numArr1.sort(function() { return 1; });
// 비교값 < 0 : a가 b보다 큰 인덱스를 가짐
numArr2.sort(function(a, b) { return -1; });
// 비교값 = 0 : a와 b가 같아 sorting 되지 않음
numArr3.sort(function(a, b) { return 0; });
objArr.sort(function(a, b) {
    if (a.name > b.name) return 1;
    else if (b.name > a.name) return -1;
    else return 0;
})

console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(`그대로 : ${numArr3}`);
console.log(objArr);