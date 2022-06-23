import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Body from "./components/layout/Body";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
    <Nav></Nav>
     <Body></Body>  
        <Route path="/" exact component={HomePage} />

      <Footer/>
    </Router>

  );
}

export default App;
