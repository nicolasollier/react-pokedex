import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <h1>Hello</h1>
        </Container>
      </Router>
    </div>
  );
}

export default App;
