import '../../src/styles/components/pages/HomePage.css'
import Arraymovies from '../components/layout/Movies';
import fetchMovies from '../components/layout/listMovies';


const HomePage = () => {

    const movies = fetchMovies();

    return (
        <main>
            <body>
                <div className='row'>
                    <Arraymovies arraymovies={movies} />

                </div>
            </body>

        </main>




    );
}

export default HomePage;