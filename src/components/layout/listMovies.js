// consulta y llamada de API
import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import fetchMovies from './Movies';
import Arraymovies from './Mapeo';


let movies = fetchMovies({Arraymovies})


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
        
            <div className="card" style={{ minwidth: "200px" }}>
                <img src={movies.image} alt=""></img>
            </div>
        event.preventDefault();
    }
    render() {
        return (
            <>
            <form className='d-flex input-group w-auto' onSubmit={this.handleSubmit}>
                <input type='search' className='form-control' value={this.state.Arraymovies} onChange={this.handleChange} placeholder='Enjoy Search' aria-label='Search' />
                <MDBBtn color="secondary" id='nameForm'> Search</MDBBtn>
            </form>

            </>
                

        );
    }
}

