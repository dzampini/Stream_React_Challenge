import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Body from "./components/layout/Body";
import NameForm from './components/layout/listMovies';
import HomePage from "./pages/HomePage";
import ShowMovies from './components/layout/Movies';
//Controler con llamado a Nav y Body


function App() {
  
  
 

  return (

    <Router>
      <Nav />
      <Body />
      <ShowMovies/>
      <Route path="/" exact component={HomePage} />
      
    </Router>


  );
}

export default App;
