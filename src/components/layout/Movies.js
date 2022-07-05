// Mapeo de Api
import Arraymovies from "./Mapeo";


const fetchMovies = () => {
    
    const initialurl = "https://imdb-api.com/en/API/SearchMovie/k_x148yu49/rambo";

    fetch(initialurl)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            return data.results
        })
        .catch(error => console.log(error))


return (<>

    <fetchMovies Arraymovies= >
    
</>)

}

export default fetchMovies;