import { useEffect, useState } from "react";
import '../../styles/components/layout/Movies.css'

import React from 'react';


const ShowMovies = () => {

    
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    
    //Api
    const initialurl = "https://imdb-api.com/en/API/SearchTitle/k_x148yu49/"

    
    //Funcion que trae los datos de la Api
  
    const Showdata = async () => {
        const url = initialurl+search
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        setMovies(data.results)
    }
   
    //buscador

    const Searcher = (e) => {
        
        setSearch(e.target.value)
        console.log(e.target.value)
       
    }
    //Mostrar info

    useEffect(() => {
       
    }, []);
   
    

    return (
        <div>
          <input type='text' className='form-control' value={search} onChange={Searcher}  placeholder='Enjoy Search' aria-label='Search' />
            <button onClick={Showdata}>Mostrar</button>
            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <thead>
                 <tr className='bg-curso text-white'>
                    <th>Pelicula</th>
                    <th>titulo</th>
                 </tr>
          </thead>
                </table>
                   <tbody>
                   <div className='row'>
                       {movies.map((movie) => {
                            return (<div key={movie.id} className="col">
                                <div className="card">
                                    <div className="movieInfo">{movie.id},{movie.title},{movie.description}</div>
                                    <img className="image" src={movie.image} alt=""></img>
                                    
                        </div>
                    </div>)
                      })}
                    </div>
                    </tbody>
                    </div>
         
    )
}

export default ShowMovies