import { useState, useRef } from "react";

const CatItem = ({ title, content, area, age, created_date, id, onRemove, onEdit }) => {

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => { setIsEdit(!isEdit) }

    const [localContent, setLocalContent] = useState(content);

    const localContentInput = useRef();

    const handleRemove = () =>{
        if(window.confirm(`${id}번째 고양이를 삭제하시나요 ? `)){
            onRemove(id);
        }
    }

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    }

    const handleEdit = () => {
        if(localContent.length < 5 ){
            localContentInput.current.focus();
            return;
        }
        if(window.confirm(`${id}번째 고양이를 수정하실껀가요 ? `)){
            onEdit(id, localContent);
            toggleIsEdit();
        }
    }


    return(
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>
                <div className="content">
                {
                    isEdit === true ? (
                        <>
                            <textarea ref={localContentInput} value={localContent} onChange={(e)=>{
                                setLocalContent(e.target.value)
                            }}/>
                        </>
                    ) : (
                        <>{content}</>
                        )
                    }
        
                </div>
            </td>
            <td>{area}</td>
            <td>{age}개월</td>
            <td className="date">{new Date(created_date).toLocaleString()}</td>

            {
                isEdit === true ? (
                <>
                    <button onClick={handleQuitEdit}>수정취소</button>
                    <button onClick={handleEdit}>수정완료</button>
                </>
                ) : (
                <>
                    <button onClick={handleRemove}>삭제하기</button> <br/>
                    <button onClick={toggleIsEdit}>수정하기</button>
                </>)
            }
        </tr>

    )
}

export default CatItem;