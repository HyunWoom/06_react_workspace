import { useRef, useState } from "react";

const CatInsert = ({onCreate}) => {

    const titleInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        title : "",
        content : "",
        area : "",
        age : 1
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

        onCreate(state.title, state.content, state.area, state.age);
        alert("저장성공 >_<");
        setState({
            title:"",
            content:"",
            area:"",
            age:1,
        })
    }


    return (
        <div className="CatInsert">
            <h2>분양시킬 고양이</h2>
            <div>
                <input 
                    ref={titleInput}
                    name="title"
                    value={state.title} 
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <textarea
                    ref={contentInput}
                    name="content"
                    value={state.content}
                    onChange={handleChangeState}
                />
            </div>
            <div>
                사는 지역 : 
                <select 
                name="area" 
                value={state.area} 
                onChange={handleChangeState}>
                    <option value={1}>서울</option>
                    <option value={2}>경기도</option>
                    <option value={3}>대구</option>
                    <option value={4}>부산</option>
                    <option value={5}>전주</option>
                    <option value={6}>광주</option>
                    <option value={6}>인천</option>
                </select>
            </div>
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
            </div>
            <div>
                <button onClick={handleSubmit}>분양시킬 고양이 저장되었어요. ^_^</button>
            </div>
        </div>
    )
}

export default CatInsert;