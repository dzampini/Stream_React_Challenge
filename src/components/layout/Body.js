import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/components/layout/Body.css'


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
            <div className="contenedor">
                <img
                    src="https://static.americadigital.com/wp-content/uploads/2020/04/americadigital_entretenimiento_la_casa_de_papel_serie.jpg"
                    class="img-thumbnail1"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://www.verepeliculas.com/wp-content/uploads/2019/03/Vivir-Sin-Permiso-temporada-1.jpg"
                    className="img-thumbnail2"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://www.linflux.com/wp-content/uploads/2016/12/ST-Vinyl-Vol-1-Front-Cover_3000.jpg"
                    className="img-thumbnail3"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="http://2.bp.blogspot.com/-WMRGS3M2mSs/VDA_Mx1R4YI/AAAAAAAADtw/toTPfOkbeOs/s1600/1.jpg"
                    className="img-thumbnail4"
                    alt="Hollywood Sign on The Hill"
                />
            </div>
            <div class="contenedor2">
                <img
                    src="https://i.pinimg.com/474x/ab/99/38/ab993826f224afa01c9ab6bec38737a2--breaking-bad-poster-walter-white.jpg"
                    className="img-thumbnail1"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://2.bp.blogspot.com/-PjKbCqijTzs/WgiVT8g6S-I/AAAAAAAAA70/mfkqFW3S6-0x9Kp3SlHwpf7dJ2RuH-omwCLcBGAs/s1600/Portada+PB+S4b.jpg"
                    className="img-thumbnail2"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://cinecalidad.in/wp-content/uploads/2020/04/vikingos-10903-poster-683x1024.jpg"
                    className="img-thumbnail3"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://i.pinimg.com/736x/d0/23/f8/d023f80de2fc5c14d448efee9c6993d6.jpg"
                    className="img-thumbnail4"
                    alt="Hollywood Sign on The Hill"
                />
            </div>
            <div className="contenedor3">
                <img
                    src="https://i.pinimg.com/originals/67/c9/33/67c93324718f5ee5cf48eac989d1f89d.jpg"
                    class="img-thumbnail1"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://img.repelis.id/cover/suits.jpg"
                    className="img-thumbnail2"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://storage.googleapis.com/isnottv_cine/lv_seo_items/lv_9ee10ed84fa88ba180a0f5624e852ff0_420.jpg"
                    className="img-thumbnail3"
                    alt="Hollywood Sign on The Hill"
                />
                <img
                    src="https://es.web.img3.acsta.net/pictures/16/03/10/09/39/100264.jpg"
                    className="img-thumbnail4"
                    alt="Hollywood Sign on The Hill"
                />
            </div>
        </div>






    );
}
export default Body;