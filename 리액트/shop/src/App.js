/* eslint-disable */

import './App.css';
import { Navbar, Nav,Container, Row, Col} from 'react-bootstrap';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);
  return (
    <div className="App">
      <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Market</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/detail">Cart </Nav.Link>
      </Nav>
    </Navbar>

    <Link to="/">홈</Link>
    <Link to="/detail">상세페이지</Link>

    <Routes>
      <Route path="/" element={
      <>
      <div className='main-bg'></div>
      <Container>
        <Row>
          {
            shoes.map(function(a,i){
              return(
                <Shoes shoes={shoes} i={i}></Shoes>
                // <Shoes shoes={shoes[i]} i={i+1}></Shoes>
              )
            })
          }
        </Row>
      </Container>
      </>
      }>
      </Route>
      <Route path="/detail" element={<div>상세페이지</div>}></Route>
      <Route path="/about" element={<div>어바웃페이지</div>}></Route>
    </Routes>
</>
    </div>
  );
}
 // 컴포넌트 
function Shoes(props){
  return(
    <Col sm>
    <img src={"https://lovesykkkk.github.io/shoes" + [props.i + 1 ] + ".jpg"} width="80%"></img>
    <h4>{props.shoes[props.i].title}</h4>
    <p>{props.shoes[props.i].price}원</p>
    {/* <h4>{props.shoes.title}</h4>
    <p>{props.shoes.price}원</p> */}
  </Col>
  )
}

export default App;
