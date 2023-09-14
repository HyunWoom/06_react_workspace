import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams]  = useSearchParams();
    const id = searchParams.get('id');
    console.log(id);

    const mode = searchParams.get('mode');
    console.log(mode);
    return(
        <div>
            <h1>Edit</h1>
            <p>이곳은 일기 수정화면</p>
            <button onClick={() => {
                navigate("/home")
            }}>Home으로</button>
            <button onClick={() => {
                navigate(-1)
            }}>뒤로</button>
        </div>
    )
}

export default Edit;