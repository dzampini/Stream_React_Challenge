// Mapeo de Api

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



export default Arraymovies;