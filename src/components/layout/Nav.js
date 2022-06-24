import { Link } from "react-router-dom";
import axios from "axios";
import '../../styles/components/layout/Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBBtn,
    MDBIcon,
    MDBNavbarNav,
} from 'mdb-react-ui-kit';



const Nav = () => {


    const [showNavNoTogglerSecond, setShowNavNoTogglerSecond] = useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='dark'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='/HomePage'>MOVIES</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarTogglerDemo02'
                        aria-controls='navbarTogglerDemo02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavNoTogglerSecond(!showNavNoTogglerSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavNoTogglerSecond}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='' href='/HomePage'><h6>Home</h6></MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem >
                                <MDBNavbarLink href='/Link'><h6>Link</h6></MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>

                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        <form className='d-flex input-group w-auto'>
                            <input type='search' className='form-control' placeholder='Enjoy Search' aria-label='Search' />
                            <MDBBtn color='primary'>Search</MDBBtn>
                        </form>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>


    );
}
export default Nav;

