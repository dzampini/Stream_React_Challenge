import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Body from "./components/layout/Body";
import HomePage from "./pages/HomePage";
import { useEffect } from 'react';






function App() {

  const initialurl = "https://imdb-api.com/API/AdvancedSearch/k_x148yu49?title_type=feature,tv_movie,tv_serie";


  const fetchMovies = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }
  useEffect(() => {
    fetchMovies(initialurl);
  }, [])


  return (

    <Router>
      <Nav></Nav>
      <Body></Body>
      <Route path="/" exact component={HomePage} />
      <Footer />
    </Router>

  );
}

export default App;
