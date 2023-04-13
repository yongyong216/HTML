console.log('Hello Typescript!');

// 변수 //
var number: number;
number = 10;
// number = 'string';
// 컴파일을 돌리기 때문에 에러를 뱉어준다.
let string = 'string';  // 데이터타입을 지정하지  않았음 , 묵시적으로 형을 지정한다.
// string = 10;

// 함수 //
const funtion = (arg: number): string => {
    return 'string';
}

// 객체 //
// 1. class를 이용 //
class Object1{
    prop1: string;
    prop2: number;

    constructor(prop1: string, prop2: number){
        this.prop1 = prop1;
        this.prop2 = prop2;
    };
};

const object1:Object1 ={ prop1: 'prop1', prop2: 2};

// 2. type 키워드 사용
// 제이슨을 위한 타입이다.
type Object2 = {
    prop1: string,
    prop2: number
}
const object2: Object2 ={ prop1:'prop1', prop2: 2 };

// 3. interface 활용
// java에서는 못씀
interface Object3{
    prop1: string;
    prop2: number;
    func1?: (arg1: number) => string;  // 함수의 타입을 지정할 수 있다. , 함수 선언부만 작성 가능!
    // ?를 찍게 되면 필수에서 선택으로 바꿔주게 된다.
}
// const object3: Object3 ={ prop1:'prop1', prop2: 2 };
// const object3: Object3 =null; //모두다 값을 넣어줘야한다.
const object3: Object3 | null = null;  //선언할 때부터 null을 받겠다고 같이 지정해줘야한다.

interface Object4{
    prop3: string;
    prop4: number;
}
const object4: Object3 & Object4 ={ prop1:'prop1', prop2: 2, prop3:'prop3', prop4: 2  }  // 두개의 속성을 동시에 가지고 있어야한다.

// 4.enum (열거형타입) -선택할 수  있는거 정할 수 있음//
enum Fruits{
    APPLE ='사과',
    BANANA ='바나나',
    MELON ='메론'
}
//const fruit: Fruits = 'a';  
//const fruit: Fruits = '사과';  
// 여기에 해당하지 않는것들은 오류가 뜬다. 특정한 녀석을 넣겠다라고 정확히 해줘야함. 
const fruit: Fruits = Fruits.APPLE;
console.log(fruit)