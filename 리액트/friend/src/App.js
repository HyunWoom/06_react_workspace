/* eslint-disable */

import './App.css';
import { useRef, useState } from 'react';
import data from  './data.js';
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import FriendList from './FriendList';
import FriendInsert from './FriendInsert';

function App() {

  const [FriendItem, setFriendItem] = useState(data);

  const dataId = useRef(4);

  const onCreate = (insertFriend) => {
    insertFriend.id = dataId.current;
    dataId.current += 1;
    setFriendItem([...FriendItem, insertFriend]);
    Navigate('/');
  }

  const Navigate = useNavigate();

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newfriend = FriendItem.filter((it) => it.id !== targetId);
    setFriendItem(newfriend);
  }

    return (
      <div className="App">
        <h2>내짝꿍</h2>
        <Link to="/insert">친구추가하기 / </Link>
        <Link to="/">메인으로 가기</Link>
        <Routes>
          <Route path="/" element={
            <FriendList FriendList={FriendItem} onDelete={onDelete}/>
          }>
          </Route>
          <Route path="/insert" element={
            <FriendInsert onCreate={onCreate}/>
          }>
          </Route>
        </Routes>
      </div>
  );
};


export default App;
