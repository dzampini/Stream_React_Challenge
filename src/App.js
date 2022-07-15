import './App.css';
import ShowMovies from './components/layout/Movies';
import Nav from './components/layout/Nav'
import Body from './components/layout/Body'
import Homepage from './pages/HomePage'
//Controler con llamado a Nav y Body


function App() {
  
  
 

  return (
   
      <>
      <Nav />
      <Body />
      <Homepage/>
      <ShowMovies/>
      </>
       );
}

export default App;
