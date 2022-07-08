import { useEffect, useState } from "react";

import React from 'react';


const ShowMovies = () => {

    
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    
    //Api
    const initialurl = 'https://imdb-api.com/en/API/Search/k_n8tf6v7z/shrek'
    
    //Funcion que trae los datos de la Api
  
    const Showdata = async () => {
        const response = await fetch(initialurl)
        const data = await response.json()

        console.log(data);
        movies(data)
        
        
    }
    //buscador

    const Searcher = (e) => {
        
        setSearch(e.target.value)
        console.log(e.target.value)
       
    }

    useEffect(() => {
        Showdata()
    }, []);
         
  

    return (
        
        <div>
          <input type='text' className='form-control' value={search} onChange={Searcher}  placeholder='Enjoy Search' aria-label='Search' />

            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <thead>
                    <tr className='bg-curso text-white'>
                        <th>Pelicula</th>
                        <th>titulo</th>
                       
                    </tr>
                </thead>
                <tbody>
                  {movies.map((movie)=>(
                        <tr key={movie }>
                        <td >{movie.id}</td>
                        <td>{movie.title }</td>
                        </tr>
                   ) )}
                </tbody>
            </table>
            
            
            
        </div>
         
    )
           


}

export default ShowMovies