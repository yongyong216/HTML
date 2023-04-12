console.log('Hello Javascript!');

// 한줄 주석
/* 부분 주석 */

// 변수 선언 방법 //
// 1.변수의 타입이 존재하지 않음
// (;을 안찍어두 되지만 찍어주는게 좋음)
var variable_name;
var variable_name = '변수 값';
console.log(variable_name.trim());
variable_name = 10;   
//console.log(variable_name.trim());

// 2. 변수 선언 키워드
//  var,let,const
// 동일한 이름으로 선언해도 매번 선언이 됨
var variable_name;
if (10 == 10){
    var variable_name2 = '변수';
}
console.log(variable_name2);

//블록변수 키워드 
// 동일한 블럭내에서 동일한 이름으로 지을 수 없고 그 블럭내에서만 사용가능!
let let_variable_1;  
// let let_variable_1; 
if(10==10){
    let let_variable_2='블럭 변수';
}
// console.log(let_variable_2);

// const는 상수로 선언한다. 
// 변경을 할 수없음을 뜻함.
// 선언할 때 초기화를 해줘야한다.
const const_variable_1 = '상수';
// const_variable_1 = '변경 상수';

// 3. 데이터의 타입
//    문자열 string : '',"" 둘다 문자열로 인식한다. 객체가 아니기 때문에 소문자사용
let stringVariable1 ='문자열';
let stringVariable2 ="문자열";
console.log(typeof(stringVariable1,  stringVariable2));

//    숫자 number : 정수, 실수
let numberVariable1 = 10;
let numberVariable2 = 1.5;
console.log(typeof(numberVariable1, numberVariable2));

//    논리 boolean : true, false
let booleanVariable = true;
console.log(typeof(booleanVariable));

//    null
let nullVariable = null;
console.log(typeof(nullVariable));

//   배열 : []
let arrayVariable = [1, 'A', false];
arrayVariable[0];

//   객체 : {}
// 아래의 구조를 제이슨이라고 부른다.
let objectVariable = {
    "key": "value",
    "name": "John",
    "age": 20,
    "object": {
        "key1" : 1
    }
};

// 연산자 //
// 1. 나눗셈 연산자 //
let number1 = 10 / 3;
console.log(number1);

// 2. 제곱 연산자(**) //
let number2 = 10 ** 3;
console.log(number2);

// 3. 비교연산 ==, ===
let numberValue10 = 10;
let stringValue10 ='10';
console.log(numberValue10 == stringValue10);
console.log(numberValue10 === stringValue10); //타입까지 비교해서 출력해준다.

// if 조건
// 논리연산의 항에 대한 이야기
let tmpValue = null; 
if (tmpValue) console.log('true');
else console.log('false');

// class //
class Human {
    name;
    age;
    address;
    constructor(name){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    /* constructor(age){   
        this.agee = age;
    }*/

     //constructor를 두개를 실행할 수 없다.
}

let humanObject = new Human('John', 30, '부산');
console.log(humanObject.name);   //  객체 접근하는 방법, 오타가 났을 때 컴파일이 되지 않기 때문에 실행하면 undefined가 나온다.  
// console.log(humanObject.name.trim());  // 오류를 잡아낸다.

// 비구조화 할당 //
// const { name, age, address } = humanObject;  //객체에 있는 것들을 그대로 분해 할 수 있다.
let { name, ...others} = humanObject;  // ...스페드? 스퀘드? 연산자

console.log(name);
console.log(others);

name = 'Micle';
humanObject = { ...humanObject, name };
// { name, age, address };로 분해시켜준다.  , ...을 사용할 경우 { name, age, address, name }; 객체가 중복되면 뒤에오는 녀석으로 덮어씌우고 앞에꺼는 날림
console.log(humanObject);

const tmpArray = [ 1, 'A', true];
const [number, ...otherArray] = tmpArray;
console.log(number);
console.log(otherArray);

// 함수 //
// 반환타입이 없다.
function function1(arg, arg2){

}

function1(1, 2);

const function2 = (arg1, arg2) => {
    
} 
function2(1, 2);

