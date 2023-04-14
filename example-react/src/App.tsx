import { useState, useRef, SetStateAction, Dispatch } from 'react';   //중괄호 되어 있는거는 export로 받아온거
import './naver-sign-in.css';
import Header from './view/HeaderView';
import Footer from './view/FooterView';
import Main from './view/MainView';

// App.tsx  //ts는 typescript를 이야기 하고 x는 XHTML을 이야기 한다. 대소문자, 
// tsx : typescript XML(XHTML)


   // 객체로 받아와야한다. , 객체이기 때문에 인터페이스로 만든다.

function App() {  //대문자로 작성을 해야함,react 자체가 대문자로 시작하는 함수는 compant로 인식을 한다.

  // let isIdCheck2 = false;

   //isIdCheck2 = !isIdCheck2;
   //console.log(isIdCheck2);

    // isIdCheck = !isIdCheck;
    // console.log(isIdCheck);

    return (  
    <>
    <Header />
    <Main  />  
    <Footer />
    </>

    );
}

export default App;  //내부에서 외부로 쓸 수 있게 해준다.
