import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Body from "./components/layout/Body";
import HomePage from "./pages/HomePage";

//Controler con llamado a Nav y Body


function App() {
  
  
 

  return (

    <Router>
      <Nav />
      <Body/>     
      <Route path="/" exact component={HomePage} />
      
    </Router>


  );
}

export default App;
