

const CatItem = ({ title, area, age, created_date, id, onRemove,img }) => {

    const handleRemove = () =>{
        if(window.confirm(`${id}번째 고양이를 삭제하시나요 ? `)){
            onRemove(id);
        }
    }

    return(
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td className="imgitem">
                <img src={img}/>
            </td>
            <td>{area}</td>
            <td>{age}개월</td>
            <td className="date">{created_date}</td>

            <button onClick={handleRemove} className="buttonitem">분양하기</button>

        </tr>

    )
}

export default CatItem;