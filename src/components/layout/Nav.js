import '../../styles/components/layout/Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Arraymovies from './Movies';

import {MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
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
                        
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

            
        </>


    );
}
export default Nav;

