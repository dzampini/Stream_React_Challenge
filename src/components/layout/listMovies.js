// consulta y llamada de API

const fetchMovies = () => {
    const initialurl = "https://imdb-api.com/en/API/Search/k_n8tf6v7z/shrek";
    
    fetch(initialurl)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            return data.results
        })
        .catch(error => console.log(error))

}

export default fetchMovies;