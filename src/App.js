import './App.css';
import ShowMovies from './components/layout/Movies';
import Body from './components/layout/Body'
import Homepage from './pages/HomePage'
import MyClock from './components/layout/clock';

//Controler con llamado a Nav y Body


function App() {
  return (
  <>
      <ShowMovies />
      <MyClock/>
  <Body />
      <Homepage />
      
  </>
         );
}

export default App;
