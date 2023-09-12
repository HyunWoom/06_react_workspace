/* eslint-disable */

import './App.css';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
  let [friend,setfriend] = useState(data);
  let info = {
    id: 0,
    name: "",
    hobby: "",
    birthday: ""
  };
  const navigate = useNavigate();

    return (
      <div className="App">
        <h2>내짝꿍</h2>
        <Link to="/insert">친구추가하기 / </Link>
        <Link to="/">메인으로 가기</Link>
        <Routes>
          <Route path="/" element={
            <>
            <table align='center'>
          <thead>
            <tr>
              <th width="100px">번호</th>
              <th width="100px">이름</th>
              <th width="100px">취미</th>
              <th width="100px">생일</th>
              <th width="100px">기타</th>
            </tr>
          </thead>
          <tbody>
            {
              friend.map(function(a,i){
                return(
                  <Friend friend={friend} setfriend={setfriend} i={i}></Friend>
                )
              })
            }
          </tbody>
        </table>
            </>
          }>
          </Route>
          <Route path="/insert" element={
            <>
            <div>
                친구추가 <br></br>
                번호 : <input onChange={(e)=>{
                  info.id = e.target.value;
                }}/> <br></br>
                이름 : <input onChange={(e)=>{
                  info.name = e.target.value;
                }} /> <br></br>
                취미 : <input onChange={(e)=>{
                  info.hobby = e.target.value;
                }}/> <br></br>
                생일 : <input onChange={(e)=>{
                  info.birthday = e.target.value;
                }} type='date'>
              </input> <br></br>
              <button onClick={()=>{
                let copy = [...friend];
                copy.push(info);
                setfriend(copy);
                navigate('/');
              }}>추가</button>
            </div>
            </>
          }>
          </Route>
        </Routes>
      </div>
  );
};


function Friend(props){
  return(
    <tr>
      <td>{props.friend[props.i].id}</td>
      <td>{props.friend[props.i].name}</td>
      <td>{props.friend[props.i].hobby}</td>
      <td>{props.friend[props.i].birthday}</td>
      <td><button onClick={()=>{
        let copy = [...props.friend];
        copy.splice(props.i,1);
        props.setfriend(copy);
      }}>삭제</button></td>
    </tr>
  )
}
export default App;
