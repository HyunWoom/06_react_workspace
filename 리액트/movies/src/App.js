import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { useRef, useState } from 'react';

function App() {

  let [movies, setMovies] = useState([
    {
      id:1,
      title:"Movie 1",
      genre:"Drama",
      release_date:"2022-01-01"
    },
    {
      id:2,
      title:"Movie 2",
      genre:"Action",
      release_date:"2022-02-01"
    },
    {
      id:3,
      title:"Movie 3",
      genre:"Comedy",
      release_date:"2022-03-01"
    }
  ]);

  const dataId = useRef(4);

  const onCreate = (insertMovie) => {
    setMovies([...movies, insertMovie]);
  }



  return (
    <div className="App">
      <div className="link-div">
        <div>
        <Link Link to="/">List</Link>
        </div>
        <div>
        <Link to="/insert">Add New Movie</Link>
        </div>
      </div>
      
      <h1>Movies</h1>
      <Routes>
        <Route path="/" element={
            <table align='center'>
              <thead>
                <tr>
                <th whidth="100px">ID</th>
                <th whidth="100px">Title</th>
                <th whidth="100px">Genre</th>
                <th whidth="100px">Release Date</th>
                <th whidth="100px">Action</th>
                </tr>
              </thead>
            <tbody>
              {
                movies.map(function(it,i){
                  return(
                    <Movies movies={movies} {...it} setMovies={setMovies} i={i}/>
                  )
                })
              }
            </tbody>
          </table>
        }>
        </Route>
        <Route path="/insert" element={
          <MovieInsert movies={movies} setMovies={setMovies} onCreate={onCreate} />
        }>
        </Route>
      </Routes>
    </div>
  );
}

function Movies(props){
  return(
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.genre}</td>
      <td>{props.release_date}</td>
      <td><button onClick={()=>{
        let copy = [...props.movies];
        copy.splice(props.i,1);
        props.setMovies(copy);
      }}>Delete</button></td>
    </tr>
  )
}

function MovieInsert({onCreate}){

  const insert = {id:4, title:"", genre:"", release_date:""}
      return(
          <div>
              <br></br>
              <input placeholder='Input movie id'  onChange={(e)=>{
                  insert.id = e.target.value;
              }} /> <br></br>
              <input placeholder='Input movie title' onChange={(e)=>{
                  insert.title = e.target.value;
              }}/> <br></br>
              <input placeholder='Input movie genre' onChange={(e)=>{
                  insert.genre = e.target.value;
              }}/> <br></br>
              출시일 : <input onChange={(e)=>{
                  insert.release_date = e.target.value;
              }} type='date'>
              </input> <br></br>
              <button onClick={()=>{
              onCreate(insert);
              }}>Add Movie</button>
          </div>
      )
  
}

export default App;
