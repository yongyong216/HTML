import { useState, useRef } from 'react';
import './naver-sign-in.css';

// App.tsx  //ts는 typescript를 이야기 하고 x는 XHTML을 이야기 한다. 대소문자, 
// tsx : typescript XML(XHTML)
function App() {  //대문자로 작성을 해야함,react 자체가 대문자로 시작하는 함수는 compant로 인식을 한다.
  
const formRef = useRef<HTMLFormElement | null>(null);

const [isIdCheck, setIdCheck] = useState<boolean>(false);  //const로 사용하는것이 제일 명확하다.
const [id, setId] = useState<string>('');

  // let isIdCheck2 = false;

  const onSubmitHandler = () => {
    //alert(id);
    if(!id.trim()){
    setIdCheck(true);  // 상태를 바꿔주는거를 사용해줘야함!
    return;
  }
  setIdCheck(false);

  if(formRef) formRef.current?.submit();
}
   //isIdCheck2 = !isIdCheck2;
   //console.log(isIdCheck2);

    // isIdCheck = !isIdCheck;
    // console.log(isIdCheck);

  return (  
  <>
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
    
    <div className="main">
        <div className="content">
            
        
            <div className="sign-in-wrapper">
                <form ref={formRef}
                id="form" 
                action="https://nid.naver.com/nidlogin.login" 
                method="POST">
                    <ul className="panel-wrapper">
                        <li className="panel-item">
                            <div className="panel-inner">
                                
                            
                                <div className="id-password-wrapper">
                                    <div className="input-row">
                                        <div className="icon-cell">
                                            <span className="icon-id">
                                                <span className="blind">아이디</span>
                                            </span>
                                        </div>
                                        <input 
                                              type="text" className="input-text" 
                                              maxLength={41} 
                                              placeholder="아이디" 
                                              name="id" 
                                              onChange={(event) =>setId(event.target.value)}  //input의 입력값이 바뀔때 마다 호출한다.
                                          />
                                    </div>
                                    <div className="input-row">
                                        <div className="icon-cell">
                                            <span className="icon-pw">
                                                <span className="blind">비밀번호</span>
                                            </span>
                                        </div>
                                        <input type="password" 
                                                className="input-text" 
                                                maxLength={16} 
                                                placeholder="비밀번호" 
                                                name="pw" 
                                                id="pw" />
                                    </div>
                                </div>
                                
                              
                                <div className="sign-in-keep-wrapper">
                                    <div className="keep-check">
                                        <input type="checkbox" className="input-keep" value="off"/>
                                        <label className="keep-text">로그인 상태 유지</label>
                                    </div>
                                    <div className="ip-check"></div>
                                </div>

                              { isIdCheck && (
                                <div 
                                id="sign-in-error" 
                                className="sign-in-error" 
                                >
                                    <div className="error-message">
                                        <strong>아이디</strong>를 입력하세요.
                                    </div>
                                </div>
                              ) }
                                
                                
                                <div className="sigin-in-button-wrapper">
                                    <button type="button" className="sign-in-button" onClick={()=> onSubmitHandler()}>
                                        <span className="button-text">로그인</span>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>

            
            <ul className="find-wrapper">
                <li>
                    <a className="find-text" href="https://nid.naver.com/user2/api/route?m=routePwInquiry&lang=ko_KR">비밀번호 찾기</a>
                </li>
                <li>
                    <a className="find-text" href="https://nid.naver.com/user2/api/route?m=routeIdInquiry&lang=ko_KR">아이디 찾기</a>
                </li>
                <li>
                    <a className="find-text" href="https://nid.naver.com/user2/V2Join?m=agree&lang=ko_KR">회원가입</a>
                </li>
            </ul>
            
        
            <div className="banner-wrapper">
                <div className="banner-content">
                    <img className="banner-img" src="https://ssl.pstatic.net/melona/libs/1378/1378592/b3b27f5a48c19f04e111_20230331172904409.jpg" />
                </div>
            </div>
        </div>
    </div>

    
    <div className="footer">
        <div className="footer-inner">
            <ul className="footer-link">
                <li><a className="footer-item"><span className="text">이용약관</span></a></li>
                <li><a className="footer-item"><span className="text"><strong>개인정보처리방침</strong></span></a></li>
                <li><a className="footer-item"><span className="text">책임의 한계와 법적고지</span></a></li>
                <li><a className="footer-item"><span className="text">회원정보 고객센터</span></a></li>
            </ul>
            <div className="footer-copy">
                <a href="https://www.navercorp.com">
                    <span className="footer-logo">
                        <span className="blind">네이버</span>
                    </span>
                </a>
                <span className="text">Copylight</span>
                <span className="copy">© NAVER Corp.</span>
                <span className="text">All Rights Reserved.</span>
            </div>
        </div>
    </div>
  </>

  );
}

export default App;  //내부에서 외부로 쓸 수 있게 해준다.
