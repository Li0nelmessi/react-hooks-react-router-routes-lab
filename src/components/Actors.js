import React from "react";
import { actors, movies } from "../data";

function Actors() {
  const ActorsList=actors.map((actor,index)=>{
    return(
    <div key={index}>
      <h4 key={actor.name}>{actor.name}</h4>
      <ul key={actor.movies}>{actor.movies.map((movie)=>{return(<li key={movie}>{movie}</li>)})}</ul>
    </div>


    )
  })
  return (
  <div>
    <h1>Actors Page</h1>
    {ActorsList}
  </div>

);
}

export default Actors;
