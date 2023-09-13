import FriendItem from "./FriendItem";

const FriendList = ({ onDelete, FriendList}) => {
    return(
            <table align='center'>
                <thead>
                    <tr>
                    <th width="100px">번호</th>
                    <th width="100px">이름</th>
                    <th width="100px">취미</th>
                    <th width="100px">생일</th>
                    <th width="100px">기타</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    FriendList.map(function(it,idx){
                        return(
                        <FriendItem key={it.id} {...it} onDelete={onDelete}/>
                        )
                    })
                    }
                </tbody>
            </table>
    )
}
FriendList.defaultProps = {
    FriendList : []
}

export default FriendList;