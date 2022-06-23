import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/components/layout/Body.css'

const Body = (Props) => {
    return (

        <div className='container-fluid' >
            <div className="row">
                <div className="col-sm-12">
                    <h3>NEW ARRIVALS</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.poblanerias.com/wp-content/archivos/2014/05/xmen.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>#1</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/09/SpiderMan.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>#2</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://1.bp.blogspot.com/-z7jketJFwCk/XrDay0KSVWI/AAAAAAAABa4/IF9TVxq1YR4Kr5EPox_FW4-3JuGOJdzzQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Iron_Man_1_Portada.png"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>#3</h3>
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