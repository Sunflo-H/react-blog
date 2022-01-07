/* eslint-disable */
import  {useState}  from 'react';
import Test from './test';
import './App.css';

function App() {
  
  let [글제목,글제목변경] = useState(['구의동 맛집','강남 맛집','부산 맛집']);
  let [따봉, 따봉변경] = useState(0);
  function titleChange(){
    let 새글제목 = [...글제목];
    새글제목[0] = "우리집이 더 맛있어!";
    글제목변경(새글제목);
  }

  function titleSort(){
    let 새글제목 = [...글제목];
    새글제목.sort();
    console.log(새글제목);
    글제목변경(새글제목);
  }
  
  

  return (
    <div className="App">
      {}
      <div className="black-nav"> 
        <div>개발 Blog</div>
      </div>
      <button onClick={titleSort}>제목을 글자순 정렬</button>
      <button onClick={titleChange}>글 제목 변경</button>
      <div className='list'>
        <h3> { 글제목[0] } <span onClick={()=>따봉변경(따봉+1)}>👍</span> {따봉} </h3>
        <p>1월 5일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1] } <span>👍</span> 0 </h3>
        <p>1월 5일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[2] } <span>👍</span> 0 </h3>
        <p>1월 5일 발행</p>
        <hr/>
      </div>
      <Test />
    </div>
  );
}

export default App;
