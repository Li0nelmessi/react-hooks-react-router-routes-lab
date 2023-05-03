import React from "react";
import { Route, Routes ,Router} from "react-router-dom";
import { createMemoryHistory } from "history";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";


function App() {
  const history = createMemoryHistory({
    initialEntries: ["/"],
    initialIndex: 0,
  });
  //console.log(movies)
  return (
<div>
  <NavBar/>
    <Router history={history}>
     <Routes>
      <Route path="/movies" element={<Movies />}/>
      <Route path="/directors" element={<Directors />}/>
      <Route path="/actors" element={<Actors />}/>
      <Route exact path="/" element={<Home/>}/>
     </Routes>
    </Router>
</div>
  );
}

export default App;
