import { useEffect, useState } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import e from "cors";



const ShowMovies = () => {

    
    const [pelicula, setPelicula] = useState([]);
    const [search, setSearch] = useState('')
    
    //Api
    const initialurl = 'https://imdb-api.com/en/API/Search/k_n8tf6v7z/shrek'
    
    //Funcion que trae los datos de la Api
   
    const showdata = async () => {
        
        const response = await fetch(initialurl)
        const data = await response.json()
        console.log(data);
        setPelicula(data)
    }

         console.log('hola mundo')

    const Searcher = (e) => {
        setSearch(e.target.value)
        console.log(e)
       
    }

    useEffect(() => {
        showdata()
    }, []);
         
           

return (
        <div>
           
                     <form className='d-flex input-group w-auto' onSubmit={pelicula}>
                <input type='search' className='form-control' value={search} onChange={Searcher} placeholder='Enjoy Search' aria-label='Search' />
                <MDBBtn color="secondary" id='nameForm'> Search</MDBBtn>
            </form>

                </div>)
           

    
    


}

export default ShowMovies;