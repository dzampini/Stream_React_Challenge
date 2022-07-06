// consulta y llamada de API
import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import FetchMovies from './Movies';
import Arraymovies from './Mapeo';





export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        
        let movies = FetchMovies({ Arraymovies });
            
            < div className = 'container' >
                <div className="card" style={{ minwidth: "200px" }}>
                    <img src={movies} alt=""></img>
                </div>
            </div>
            
        event.preventDefault();
    }
    render() {
        return (
            <>
                
            <form className='d-flex input-group w-auto' onSubmit={this.handleSubmit}>
                <input type='search' className='form-control' value={this.state.movies} onChange={this.handleChange} placeholder='Enjoy Search' aria-label='Search' />
                <MDBBtn color="secondary" id='nameForm'> Search</MDBBtn>
            </form>

            </>
                

        );
    }
}

