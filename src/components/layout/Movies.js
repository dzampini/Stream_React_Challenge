// Mapeo de Api

const fetchMovies = () => {
    const initialurl = "https://imdb-api.com/en/API/Search/k_n8tf6v7z/shrek";

    fetch(initialurl)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            return data.results
        })
        .catch(error => console.log(error))



    const Arraymovies = ({ arraymovies = [] }) => {

        return (
            <div className='row'>
                {arraymovies.map((item, index) => {
                    <div key={index} className="col">
                        <div className="card" style={{ minwidth: "200px" }}>
                            <img src={item.image} alt=""></img>
                        </div>
            
                    </div>
                })}
            </div>
        );
    }

}

export default fetchMovies;