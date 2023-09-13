const FriendInsert = ({onCreate}) =>{
const insert = {id:0,name:"",hobby:"",birthday:""}
    return(
        <div>
            친구추가 <br></br>
            이름 : <input onChange={(e)=>{
                insert.name = e.target.value;
            }} /> <br></br>
            취미 : <input onChange={(e)=>{
                insert.hobby = e.target.value;
            }}/> <br></br>
            생일 : <input onChange={(e)=>{
                insert.birthday = e.target.value;
            }} type='date'>
            </input> <br></br>
            <button onClick={()=>{
            onCreate(insert);
            }}>추가</button>
        </div>
    )
}

export default FriendInsert;