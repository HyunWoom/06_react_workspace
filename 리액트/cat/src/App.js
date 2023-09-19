import './App.css';
import { Navbar, Nav,Container, Row, Col} from 'react-bootstrap';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import data from './data.js';
import {useNavigate} from "react-router-dom";
import CatList from './catList';
import CatInsert from './CatInsert';
import CatDetail from './CatDetail';

function App() {

  let [cat] = useState(data);

  let [따봉, 따봉변경] = useState([0,0,0,0,0]);

        
        const [CatItem, setCatItem] = useState(data);
        
        const dataId = useRef(6);
        
        const onCreate = (insertCat) => {
          const newCat = {...insertCat,
            id : dataId.current
          }
          dataId.current += 1;
          setCatItem([...CatItem,newCat]);
          Navigate('/');
        }
        
        const Navigate = useNavigate();
        
        const onRemove = (targetId) => {
          console.log(`${targetId}(묘)가 삭제되었습니다.`);
          const newCat = CatItem.filter((it) => it.id !== targetId);
          setCatItem(newCat);
        }
        
        const onEdit = (targetId, newContent) => {
          setCatItem(
            CatItem.map((it)=>( it.id === targetId ? {content:newContent, ...it} : it ))
        )
        }
        

  return (
    <div className="App">
      <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">고양이 분양</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/insert">등록</Nav.Link>
        <Nav.Link href="/list">목록조회</Nav.Link>
      </Nav>
    </Navbar>

    <Routes>
      <Route path="/" element={
      <>
      <div className='main-bg'></div>
      <h2>고양이 분양 사이트</h2>
      <div className='main-content'>
      <Container>
        <Row>
          {
            CatItem.map(function(a,i){
              return(
                <Cat key={a.id} cat={cat} CatItem={CatItem} i={i} 따봉={따봉} 따봉변경={따봉변경}></Cat>
                )
              })
            }
        </Row>
      </Container>
      </div>
      </>
      }>
      </Route>
      <Route path="/insert" element={<CatInsert onCreate={onCreate} CatItem={CatItem} />}></Route>
      <Route path="/list" element={<CatList catList={CatItem} onRemove={onRemove}/>}></Route>
      <Route path="/detail/:id" element={<CatDetail  CatItem={CatItem} onRemove={onRemove}  onEdit={onEdit}/>}></Route>
    </Routes>
</>
    </div>
  );
}
 // 컴포넌트 
 function Cat(props){
  return(
    <Col sm>
      <h3>{props.CatItem[props.i].title}</h3>
      <Link to={"/detail/" + props.i}>
      <img src={"먼치킨" + [props.i + 1 ] + ".jpg"} width="100%" height="100%" className='imgcat' ></img>
      </Link> <br/><br/>
      <p>{props.CatItem[props.i].content}</p> 
      <p>{props.CatItem[props.i].area}</p> 
      <p>{props.CatItem[props.i].age}개월</p>
      <span onClick={ (e) => { 
        let copy =[...props.따봉];
        copy[props.i] = copy[props.i] + 1;
        props.따봉변경(copy);
        } }>👍
      </span> { props.따봉[props.i] }
      
    </Col>
  )
}
export default App;


