
import './App.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Container, Row, Col} from 'react-bootstrap';
import { useState, useRef } from 'react';
import data from './data.js';
import { Link, useNavigate} from "react-router-dom";
import CatList from './catList';
import CatInsert from './CatInsert';

  
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p:5 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function BasicTabs() {
    let [cat,setcat] = useState(data);
    let [따봉, 따봉변경] = useState([0,0,0,0,0]);
    const [value, setValue] = useState(0);

    const [CatItem, setCatItem] = useState(data);

    const dataId = useRef(6);

    const onCreate = (insertCat) => {
      insertCat.id = dataId.current;
      dataId.current += 1;
      setCatItem([insertCat, ...CatItem]);
      Navigate('/');
    }

    const Navigate = useNavigate();

    const onRemove = (targetId) => {
      console.log(`${targetId}(묘)가 삭제되었습니다.`);
      const newCat = data.filter((it) => it.id !== targetId);
      setCatItem(newCat);
    }

    const onEdit = (targetId, newContent) => {
      setCatItem(
        data.map((it)=>( it.id === targetId ? {...it, content:newContent} : it ))
    )
  }

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    
    return (
      <Box sx={{ p: 5}}>
        <div className="App">

          <h2>고양이 분양 사이트</h2>
            <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="고양이 등록" {...a11yProps(1)} />
                <Tab label="목록 조회" {...a11yProps(2)} />
              </Tabs>
            </Box>
          <CustomTabPanel value={value} index={0}>
          <div className='main-bg'></div>
          <div className='main-content'>
            <Container>
              <Row>
                {
                  cat.map(function(a,i){
                    return(
                      <Cat cat={cat} setcat={setcat} i={i} 따봉={따봉} 따봉변경={따봉변경}></Cat>
                      )
                    })
                  }
              </Row>
            </Container>
          </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
          <CatInsert onCreate={onCreate}/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
          <CatList catList={data} onRemove={onRemove} onEdit={onEdit}/>
          </CustomTabPanel>
      </div>
    </Box>
  );
    
}

 // 컴포넌트 
 function Cat(props){
  return(
    <Col sm>
      <h3>{props.cat[props.i].title}</h3>
      <Link to="/detail/:id">
      <img src={"먼치킨" + [props.i + 1 ] + ".jpg"} width="100%" height="100%" ></img>
      </Link> <br/><br/>
      <p>{props.cat[props.i].content}</p> 
      <p>{props.cat[props.i].area}</p> 
      <p>{props.cat[props.i].age}개월</p>
      <span onClick={ (e) => { 
        let copy =[...props.따봉];
        copy[props.i] = copy[props.i] + 1;
        props.따봉변경(copy);
        } }>👍
      </span> { props.따봉[props.i] }
      
    </Col>
  )
}
//상세페이지
// function DetailPage(props){

//   let {id} = useParams();

//   return(
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <img src={"먼치킨" + [props.i + 1 ] + `/${id}.jpg`} width="100%" />
//         </div>
//         <div className="col-md-6">
//           <h4 className="pt-5">{props.cat[id].props.title}</h4>
//           <p>{props.cat[id].props.content}</p>
//           <p>{props.cat[id].props.price}</p>
//           <button className="btn btn-danger">분양받기</button> 
//         </div>
//       </div>
//     </div> 
// )
//}


