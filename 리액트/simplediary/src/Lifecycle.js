import { useEffect, useState } from "react";

const Lifecycle = () => {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    //useEffect(콜백함수()=>{}, [])
    useEffect(() => {
        console.log("Mount")
    }, []);

    useEffect(() => {
        console.log("update")
    })

    useEffect(() => {
        console.log("unMount");
        return () => {
            // unMount 시점에 실행됨 
        }
    }, [])

    useEffect(() => {
        console.log(`count is update : ${count}`)
        if(count > 5){
            alert("count가 5를 넘었네 ? 1로 초기화합니다.");
            setCount(1);
        }
    }, [count]) // +버튼 누를때 숫자올라감

    useEffect(() => {
        console.log(`count is update : ${text}`)
    }, [text]) // 텍스트박스 쳤을때 친 글자 나타남

    return(
        <div style={{padding:20}}>
            <div>
                {count}
                <button onClick={() => {
                    setCount(count + 1)}}>+</button>
            </div>
            <div>
                <input value={text} onChange={(e) => {
                     setText(e.target.value);
                }}/>
            </div>
        </div>
    )
}

export default Lifecycle;