import './App.css';
import ShowMovies from './components/layout/Movies';
import Body from './components/layout/Body'
import Homepage from './pages/HomePage'


//Controler con llamado a Nav y Body


function App() {
  return (
    <>
      <Homepage />
      <ShowMovies />
      <Body />
      
    </>
         );
}

export default App;
