import { useEffect, useState } from "react";
import '../../styles/components/layout/Movies.css'
import '../../styles/components/layout/Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon,
    MDBNavbarNav,
    MDBBtn
   
} from 'mdb-react-ui-kit';

import React from 'react';


const ShowMovies = () => {

    
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
     const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);
    
    
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
            <MDBNavbar expand='lg' light bgColor='dark'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/HomePage'>MOVIES</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarTogglerDemo02'
                        aria-controls='navbarTogglerDemo02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavNoTogglerSecond}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='' href='/HomePage'><h6>Home</h6></MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem >
                                <MDBNavbarLink href='/Link'><h6>Link</h6></MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                               
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        <input  type='text' className='form-control' value={search} onChange={Searcher}  placeholder='Find Movie' aria-label='Search' />
                <MDBBtn onClick={Showdata} type="button" class="btn btn-light">Search</MDBBtn>
                                                
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>


            
                    
                <thead>
                 
                </thead>
                
          
            
            <tbody>
                
                <div className='row'>
                    
                    {movies.map((movie) => {
                           
                            return (<div key={movie.id} className="col">

                                
                                <div className="container">
                                    <img className="image" src={movie.image} alt=""></img>
                                    <div className="info">
                                        {movie.title},{movie.description}
                                     </div> 
                                </div>
                                
                                
                    </div>)
                      })}
                </div>
            </tbody>
           
                    </div>
         
    )
}

export default ShowMovies