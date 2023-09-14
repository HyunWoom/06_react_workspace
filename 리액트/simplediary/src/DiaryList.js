import DiaryItem from "./DiaryItem";

const DiaryList = ({ onRemove, diaryList, onEdit }) => {
    console.log(diaryList);
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 타고 있어요.^_^</h4>
            <div>
                {
                    diaryList.map((it,idx)=>( // 리턴은 괄호로 대치 가능
                        <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}/>
                    ))
                }
            </div>
        </div>
    )
}

DiaryList.defaultProps = {
    diaryList : []
}

export default DiaryList;