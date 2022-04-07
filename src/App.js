import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container } from "@mui/material";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path={"/"} element={<Homepage />}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
