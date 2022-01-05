import  {useState}  from 'react';

import './App.css';

function App() {
  
  let [글제목,b] = useState(['구의동 맛집','강남 맛집','부산 맛집']);
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3> { 글제목[0] } </h3>
        <p>1월 5일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[1] } </h3>
        <p>1월 5일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3> { 글제목[2] } </h3>
        <p>1월 5일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
