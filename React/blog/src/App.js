/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let  post = '강남 우동 맛집';
//변수 넣고싶을때는 {post} 처럼 중괄호 사용
  let [글제목, b] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  //let [logo, setLogo] = useState('ReactBlog');
  let [좋아요, 좋아요변경] = useState(0);

 

  return (
    <div className="App">
      <div className="black-nav">
        <h4 /*style = { {color : 'red', fontSize : '16px'} }*/>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        b(copy);
      }}>가나다순정렬</button>

      <button onClick={()=>{
       let copy = [...글제목];
       copy[0] = '여자코트 추천';
       b(copy);
      }}> 글 수정</button>

      <div className="list">  
      <h4>{글제목[0]} <span onClick={()=>{ 좋아요변경( 좋아요+1) }}>👍</span> {좋아요} </h4>
      <p>2월 17일 발행</p>
      </div>

      <div className="list">
      <h4>{글제목[1]}</h4>
      <p>2월 17일 발행</p>
      </div>

      <div className="list">
      <h4>{글제목[2]}</h4>
      <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>

    </div>
  );
}


/*컴포넌트 만드는법
  1.function 만들고
  2.return() 안에 html 담기
  3.<함수명></함수명>쓰기 

  언제쓰는지?
  1.반복적 html 축약할때
  2.큰 페이지들
  3.자주 변경되는 것들
  */
function Modal(){
  return(
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )

}

export default App;
