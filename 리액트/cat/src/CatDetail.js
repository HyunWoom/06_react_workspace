import { Link, useParams } from "react-router-dom";

const CatDetail = (CatItem)=>{ 

    let id = useParams();
    console.log(CatItem.CatItem);

    return(
        <div className="detailmain">   
        <h2>상세페이지입니당.</h2> <br/><br/>
            <div className="container">
            <div className="row">
                <div className="col-md-6"><br/><br/><br/>   
                <img src={"/"+CatItem.CatItem[id.id].img} width="100%" className="imgdetail"/>
                </div>
                <div className="col-md-6"><br/><br/>
                <h4 className="pt-5">종 : {CatItem.CatItem[id.id].title}</h4><br/>
                <p>성격 : {CatItem.CatItem[id.id].content}</p><br/>
                <p>지역 : {CatItem.CatItem[id.id].area}</p><br/>
                <p>나이 : {CatItem.CatItem[id.id].age}개월</p><br/>
                <p>등록일 : {CatItem.CatItem[id.id].created_date}</p><br/>
                <Link to="niga"><button className="btn btn-danger">분양받기</button></Link> <br/><br/>
                <button className="btn btn-danger" style={{margin:"20px"}}>삭제하기</button> 
                <button className="btn btn-danger">수정하기</button>  
                
                </div>
            </div>
            </div> 
        </div>
    )
}

export default CatDetail;