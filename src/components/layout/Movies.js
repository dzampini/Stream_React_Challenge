



const Arraymovies = ({ arraymovies = [] }) => {
    console.log(JSON.stringify(arraymovies));
    return (
            <div className="row">
                {arraymovies.map((item) => {
                    console.log("Item:" + JSON.stringify(item));
                    return (<div key={item.title} className="col">
                        <div className="card" style={{ minwidhth: '200px' }}>
                            <img src={item.image} alt='' />
                            <div className="card-boby">
                                <h5 className="card-title">{item.title}</h5>
                            </div>

                        </div>

                    </div>)
                })}
            </div>);
}

export default Arraymovies;