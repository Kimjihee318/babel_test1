let obj = {};

obj.title = 'IDOL';
obj = Object.freeze(obj);
obj.title = 'Euphoria';

console.log(obj);

const changeUntilNum = (obj, num) => {
    'use strict';

    while(true) {
        console.log(obj);

        if (obj.age >= num) {
            obj = Object.freeze(obj);
        }
        obj.age += 1; // use strict 이후에 객체를 수정하게 되면, 에러가 발생합니다.
    }
}

let profile = { name: '지연', age: 25 };
changeUntilNum(profile, 30);