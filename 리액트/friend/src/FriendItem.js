const FriendItem = ({id, name, hobby, birthday, onDelete }) => {
    return(
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{hobby}</td>
                <td>{birthday}</td>
                <button onClick={()=>{
                    if(window.confirm(`${id}번째 짝꿍을 삭제하실껀가요 ?`)){
                        onDelete(id);
                    }
                }}>삭제하기</button>
            </tr>
    )
}

export default FriendItem;