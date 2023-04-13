console.log('Hello Typescript!');
// 변수 //
var number;
number = 10;
// number = 'string';
// 컴파일을 돌리기 때문에 에러를 뱉어준다.
var string = 'string'; // 데이터타입을 지정하지  않았음 , 묵시적으로 형을 지정한다.
// string = 10;
// 함수 //
var funtion = function (arg) {
    return 'string';
};
// 객체 //
// 1. class를 이용 //
var Object1 = /** @class */ (function () {
    function Object1(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
    ;
    return Object1;
}());
;
var object1 = { prop1: 'prop1', prop2: 2 };
var object2 = { prop1: 'prop1', prop2: 2 };
// const object3: Object3 ={ prop1:'prop1', prop2: 2 };
// const object3: Object3 =null; //모두다 값을 넣어줘야한다.
var object3 = null; //선언할 때부터 null을 받겠다고 같이 지정해줘야한다.
var object4 = { prop1: 'prop1', prop2: 2, prop3: 'prop3', prop4: 2 }; // 두개의 속성을 동시에 가지고 있어야한다.
// 4.enum (열거형타입) -선택할 수  있는거 정할 수 있음//
var Fruits;
(function (Fruits) {
    Fruits["APPLE"] = "\uC0AC\uACFC";
    Fruits["BANANA"] = "\uBC14\uB098\uB098";
    Fruits["MELON"] = "\uBA54\uB860";
})(Fruits || (Fruits = {}));
//const fruit: Fruits = 'a';  // 여기에 해당하지 않는것들은 오류가 뜬다. 특정한 녀석을 넣겠다라고 정확히 해줘야함. 
//const fruit: Fruits = '사과';  
var fruit = Fruits.APPLE;
console.log(fruit);
