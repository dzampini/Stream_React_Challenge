import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/components/layout/Body.css'
import Image from 'react-bootstrap/Image'

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
                                src="https://i0.wp.com/thetangential.com/wp-content/uploads/2018/09/thor-movie.jpg?fit=1200%2C900"
                                alt="First slide" width={1029} height={570}
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
                                alt="Second slide" width={1029} height={570}
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
                                alt="Third slide" width={1029} height={570}
                            />
                            <Carousel.Caption>
                                <h3>IRON-MAN</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div class="contenedor">
            <img
                    src="https://static.americadigital.com/wp-content/uploads/2020/04/americadigital_entretenimiento_la_casa_de_papel_serie.jpg"
            class="img-thumbnail1"
            alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://www.verepeliculas.com/wp-content/uploads/2019/03/Vivir-Sin-Permiso-temporada-1.jpg"
                    class="img-thumbnail2"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://www.linflux.com/wp-content/uploads/2016/12/ST-Vinyl-Vol-1-Front-Cover_3000.jpg"
                    class="img-thumbnail3"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                    class="img-thumbnail4"
                    alt="Hollywood Sign on The Hill"
                />
            </div>
            <div class="contenedor2">
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                    class="img-thumbnail1"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                    class="img-thumbnail2"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                    class="img-thumbnail3"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                    class="img-thumbnail4"
                    alt="Hollywood Sign on The Hill"
                />
            </div>
            <div class="contenedor3">
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                    class="img-thumbnail1"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                    class="img-thumbnail2"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                    class="img-thumbnail3"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                    class="img-thumbnail4"
                    alt="Hollywood Sign on The Hill"
                />
            </div>
        </div>
      



            

    );
}
export default Body;