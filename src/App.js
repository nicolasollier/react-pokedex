import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container } from "@mui/material";
import Homepage from "./pages/Homepage/Homepage";
import PokemonPage from "./pages/PokemonPage/PokemonPage"

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route exact path={"/"} element={<Homepage />} />
          <Route path={"/pokemon/:id"} element={<PokemonPage/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
