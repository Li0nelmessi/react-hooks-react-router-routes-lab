import React from "react";
import { movies } from "../data";


function Movies() {
  console.log(movies)
  const movieList=movies.map((movie,index)=>{
    return(
    <div key={index}>
      <h3 key={movie.title} style={{color:"red"}}>{movie.title}</h3>
      <p key={movie.time}>{movie.time}</p>
      <ul key={movie.genres}>{movie.genres.map((genre=>{return(<li key={genre}>{genre}</li>)}))}</ul>
    </div>
  )})
    console.log(movieList)
  return (<div>
   <h1 style={{color:"darkblue"}}>Movies Page</h1>
    {movieList}
  </div>);
}

export default Movies;