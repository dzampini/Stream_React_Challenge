import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Arraymovies from './components/layout/Movies';
import fetchMovies from './components/layout/listMovies';

const root = ReactDOM.createRoot(document.getElementById('root'));
const movies = fetchMovies();
root.render(
  <React.StrictMode>
    <App />
    <div className='row'>
      <Arraymovies arraymovies={movies} />

    </div>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
