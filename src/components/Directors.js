import React from "react";
import { directors, movies } from "../data";

function Directors() {
  const directorsList=directors.map((director,index)=>{
  return(
    <div key={index}>
      <h4 key={director.name} style={{color:"crimson"}}>{director.name}</h4>
      <ul key={director.movies}>{director.movies.map((movie=>{return(<li key={movie}>{movie}</li>)}))}</ul>
    </div>

  )
 })

  return( 
  <div>
    <h1 style={{color:"darkblue"}}>Directors Page</h1>
  {directorsList}
  </div>
  );
}

export default Directors;