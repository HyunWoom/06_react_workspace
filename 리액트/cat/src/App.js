
import './App.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Container, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

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
    let [mo,setmo] = useState(0);
    let [modal, setModal] = useState(false);

    const [value, setValue] = React.useState(0);
    
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
                      <Cat cat={cat} setcat={setcat} i={i} 따봉={따봉} 따봉변경={따봉변경} mo={mo} setmo={setmo} modal={modal} setModal={setModal}></Cat>
                      
                    )
                  })
                }
              </Row>
            </Container>
          </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
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
      <img src={"먼치킨" + [props.i + 1 ] + ".jpg"} width="100%" height="100%" onClick={()=>{ props.setModal(!props.modal); props.setmo(i); }}></img>
      <p>{props.cat[props.i].price}원</p>
      <span onClick={ (e) => { 
        let copy =[...props.따봉];
        copy[props.i] = copy[props.i] + 1;
        props.따봉변경(copy);
        } }>👍
      </span> { props.따봉[props.i] }
      {
        modal == true ? <Modal mo={mo} setmo={setmo} modal={modal} setModal={setModal} title={title}/> : null 
      }
    </Col>
  )
}

function Modal(props){
  return(
    <>
      <div className='modal'>
        <h4>{props.cat[props.mo]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{ 
          let copy =[...props.title];
          copy = ([props.title]);
          props.글제목변경(copy);
        }}>글수정</button>
      </div>

    </>
  )
}



