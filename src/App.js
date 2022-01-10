/* eslint-disable */
import  {useState}  from 'react';
import Test from './test';
import './App.css';

function App() {
  let [글제목,글제목변경] = useState(['구의동 맛집','강남 맛집','부산 맛집']);
  let [따봉, 따봉변경] = useState([0,10,110]);
  let [modal,modal변경] = useState(false);
  let [누른제목,누른제목변경] = useState(0);

  let [입력값,입력값변경] = useState('');

  function titleChange(){
    let 새글제목 = [...글제목];
    새글제목[0] = "우리집이 더 맛있어!";
    글제목변경(새글제목);
  }

  function titleSort(){
    let 새글제목 = [...글제목];
    새글제목.sort();
    글제목변경(새글제목);
  }
  
  function 따봉change(index){
    let 새따봉 = [...따봉];
    새따봉[index]=새따봉[index]+1;
    따봉변경(새따봉);
  }

  function 글제목추가(){
    console.log(글제목);
    let 새글제목 = [...글제목];
    새글제목.unshift(입력값);
    글제목변경(새글제목);
    console.log(글제목);
    let 새따봉 = [...따봉];
    새따봉.unshift(0);
    따봉변경(새따봉);
  }
  console.log(글제목);
  return (
    <div className="App">
      {}
      <div className="black-nav"> 
        <div>개발 Blog</div>
      </div>
      <button onClick={titleSort}>제목을 글자순 정렬</button>
      <button onClick={titleChange}>글 제목 변경</button>
      
     
      {
        글제목.map((item,index) => {
          return (
          <div className='list'>
            <h3 onClick={()=>{누른제목변경(index)}}> { item } <span onClick={()=>따봉change(index)}>👍</span> {따봉[index]} </h3>
            <p>1월 5일 발행</p>
            <hr/>
          </div>
        )})
      }
      
      <div className="publish">
        <input onChange={e=>{입력값변경(e.target.value)}}/>
        <button onClick={글제목추가}>저장</button>
      </div>

      <button onClick={()=>{modal변경(!modal)}}>모달 버튼</button>
      {
        modal === true ? <Modal 글제목들={글제목} 누른제목={누른제목}/> : null
      }
    </div>
  );
}
function Modal(props){
  let day = "1월 9일"
  console.log("모달실행");
  return(
    <div className='modal'>
      <h2>{props.글제목들[props.누른제목]}</h2>
      <p>{day}</p>
      <p>내용</p>
    </div>
  )
}

export default App;
