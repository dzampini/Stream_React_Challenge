
const Arraymovies = ({ pelicula = [] }) => {

    return (
        <div className='row'>
            {pelicula.map((item, index) => {
                return (<div key={index} className="col">
                    <div className="card" style={{ minwidth: "200px" }}>
                        <img src={item.image} alt=""></img>
                    </div>

                </div>)
            })}
        </div>
    );
}

export default Arraymovies;