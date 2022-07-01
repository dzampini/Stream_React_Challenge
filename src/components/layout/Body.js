import React from "react";
import { Carousel } from 'react-bootstrap';
import Arraymovies from '../layout/Movies'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/components/layout/Body.css';



const Body = (Props) => {
   
   
    
   
    return (

        <div className='container-fluid' >
            <div className="row">
                <div className="col-sm-12">

                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.nacionflix.com/__export/1618245840672/sites/debate/img/2021/03/27/chris-hemsworth-thor-01.jpg_242310155.jpg"
                                alt="First slide" width={1029} height={670}
                            />
                            <Carousel.Caption>
                                <h3>THOR</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="http://i.ytimg.com/vi/7MMhBvB-2Mo/maxresdefault.jpg"
                                alt="Second slide" width={1029} height={670}
                            />
                            <Carousel.Caption>
                                <h3>X-MEN</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://1.bp.blogspot.com/-z7jketJFwCk/XrDay0KSVWI/AAAAAAAABa4/IF9TVxq1YR4Kr5EPox_FW4-3JuGOJdzzQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Iron_Man_1_Portada.png"
                                alt="Third slide" width={1029} height={670}
                            />
                            <Carousel.Caption>
                                <h3>IRON-MAN</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            

        </div>
        
        

            
    );
   
}
export default Body;