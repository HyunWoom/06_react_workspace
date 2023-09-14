import CatItem from "./CatItem";

const catList = ({ onRemove, catList, onEdit}) => {

    return (
        <div className="catList">
            <h2>분양 묘 리스트</h2> <br/>
            <h4>{catList.length}마리의 고양이가 분양을 기다리고 있어요.^_^</h4> <br/>
            <table align='center'>
                <thead>
                    <tr>
                    <th width="100px">번호</th>
                    <th width="100px">고양이 이름</th>
                    <th width="100px">성격</th>
                    <th width="100px">지역</th>
                    <th width="100px">나이</th>
                    <th width="100px">분양일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    catList.map(function(it){
                        return(
                        <CatItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
                        )
                    })
                    }
                    
                </tbody>
            </table>
            
        </div>
        
    )
}

catList.defaultProps = {
    catList : []
}

export default catList;