
const Arraymovies = ({ arraymovies = [] }) => {

    return (
        <div className='row'>
            {arraymovies.map((item, index) => {
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