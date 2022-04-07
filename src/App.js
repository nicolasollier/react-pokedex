import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap"

import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Container className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
