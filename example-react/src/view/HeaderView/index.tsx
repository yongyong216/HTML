import React from 'react'  //중괄호 없이 export default로 받아진거, 다른 이름으로 써두 된다.(React -> R 로 써두 됨)

export default function Header() {    //index는 파일명 그대로 따라서 생성된거임! 그래서 Header로 변경해주기,  이것을 만들자 말자export 시켜버림
    return (
            <div className="header">
            <div className="header-inner">
                <a href="https://naver.com" className="logo">
                    <h1 className="blind">NAVER</h1>
                </a>
                <div className="lang">
                    <select className="select">
                        <option>한국어</option>
                        <option>English</option>
                    </select>
                </div>
            </div>
        </div>
        );
}

