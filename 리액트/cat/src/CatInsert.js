import { useRef, useState } from "react";

const CatInsert = ({onCreate, CatItem}) => {

    const titleInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        id:6,
        title : "",
        content : "",
        area : "서울",
        age : 1,
        created_date:new Date().toLocaleString(),
        img : ""
    });

    const handleChangeState = (e) => {
 
        const {name,value} = e.target;

        setState({
            ...state,
            [name]:value
        })
    }

    const handleSubmit = () => {
        if(state.title.length < 1){
            // focus
            titleInput.current.focus();
            return;
        }
        if(state.content.length < 5){
            // focus
            contentInput.current.focus();
            return;
        }

        onCreate(state);
        alert("저장성공 >_<");
        setState({
            title:"",
            content:"",
            area:"",
            age:1,
            img:""
        })
    }


    return (
        <div className="CatInsert">
            <h2>분양시킬 고양이</h2>
            <div>
                <img src="인설트.png" className="imginsert"></img>
            </div><br/>
            <div>
                <input 
                    ref={titleInput}
                    name="title"
                    value={state.title} 
                    onChange={handleChangeState}
                />
            </div><br/>
            <div>
                <textarea
                    ref={contentInput}
                    name="content"
                    value={state.content}
                    onChange={handleChangeState}
                />
            </div><br/>
            <div>
                사는 지역 : 
                <select 
                name="area" 
                value={state.area} 
                onChange={handleChangeState}>
                    <option value={"서울"}>서울</option>
                    <option value={"경기도"}>경기도</option>
                    <option value={"대구"}>대구</option>
                    <option value={"부산"}>부산</option>
                    <option value={"전주"}>전주</option>
                    <option value={"광주"}>광주</option>
                    <option value={"인천"}>인천</option>
                </select>
            </div><br/>
            <div>
                고양이의 개월 수 : 
                <select 
                name="age" 
                value={state.age} 
                onChange={handleChangeState}>
                    <option value={1}>1개월</option>
                    <option value={2}>2개월</option>
                    <option value={3}>3개월</option>
                    <option value={4}>4개월</option>
                    <option value={5}>5개월</option>
                    <option value={6}>6개월</option>
                    <option value={6}>기타</option>
                </select>
            </div><br/>
            <div>
                <input name="img" value={state.img} onChange={handleChangeState}></input>
            </div><br/>
            <div>
                <button onClick={handleSubmit} style={{height:"100px"}}>분양시킬 고양이 저장되었어요. ^_^</button>
            </div>
        </div>
    )
}

export default CatInsert;