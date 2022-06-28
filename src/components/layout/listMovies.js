const fetchMovies = () => {
    const initialurl = "https://imdb-api.com/en/API/Search/k_n8tf6v7z/shrek";
    let results = [];
    fetch(initialurl)
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data.results));
            return data.results
        })
        .catch(error => console.log(error))

}

export default fetchMovies;