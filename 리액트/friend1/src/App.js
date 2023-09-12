import './App.css';
import { useState } from 'react';
import data from './data.js';

function App() {
  let [friend,setfriend] = useState(data);
  return (
    <div className="App">
      <h2>내짝꿍</h2>
      <table align='center'>
        <thead>
          <tr>
            <th whidh="100px">번호</th>
            <th whidh="100px">이름</th>
            <th whidh="100px">취미</th>
            <th whidh="100px">생일</th>
            <th whidh="100px">기타</th>
          </tr>
        </thead>
        <tbody>
          {
            friend.map(function(a,i){
              return(
                <Friend friend={friend[i]} i ={friend} setfriend={setfriend}></Friend>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

function Friend(props){
  return(
  <tr>
    <td>{props.friend.번호}</td>
    <td>{props.friend.이름}</td>
    <td>{props.friend.취미}</td>
    <td>{props.friend.생일}</td>
    <td><button onClick={()=>{
      let copy = [...i];
      copy.splice(0,1);
      props.setfriend(copy);
    }}>삭제</button></td>
  </tr>
  )
}

export default App;
