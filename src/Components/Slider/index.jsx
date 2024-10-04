import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import slider1 from '../../assets/img/slider/slider-1.jpg';
import slider2 from '../../assets/img/slider/slider-2.jpg';
import slider3 from '../../assets/img/slider/slider-3.jpg';
import logo from '../../assets/img/logo/Logo_PHCV.svg'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderComponent = () => {


    return (
        <>
            <section className="main-slide">
                <div id="naturix-slider" className='nav-1'>
                    <AutoplaySlider
                        animation="cubeAnimation"
                        play={true}
                        cancelOnInteraction={false}
                        interval={3000}
                        bullets={false}
                    >
                        <div data-src={slider3} className="item">
                            <div className="tbl-wrp slide-1">
                                <div className="text-middle">
                                    <div className="tbl-cell">
                                        <div className="slide-caption container text-center">
                                            <div className="slide-title">
                                                <img src={logo} style={{ width: 100 }} alt="" />

                                            </div>
                                            <div className="slide-title2 pb-50">
                                                <h2 className="section-title uppercase">
                                                    <span className="light-font">De los productores </span>
                                                    <strong>directo a tu casa </strong>
                                                    <span className="light-font"> o negocio</span>
                                                </h2>
                                            </div>
                                            <div className="slide">
                                                <a href="#" className="slide-btn"> Comprar</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-src={slider2} className="item">
                            <img alt=".." src="./assets/img/slider/slider-2.jpg" />
                            <div className="tbl-wrp slide-1">
                                <div className="text-middle">
                                    <div className="tbl-cell">
                                        <div className="slide-caption container text-center">
                                            <div className="slide-title">
                                                <img src={logo} style={{ width: 100 }} alt="" />
                                            </div>
                                            <div className="slide-title2 pb-50">
                                                <h2 className="section-title uppercase">
                                                    <span className="light-font">De los productores </span>
                                                    <strong>directo a tu casa </strong>
                                                    <span className="light-font"> o negocio</span>
                                                </h2>
                                            </div>
                                            <div className="slide">
                                                <a href="#" className="slide-btn"> Comprar</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-src={slider1} className="item">
                            <img alt=".." src="./assets/img/slider/slider-2.jpg" />
                            <div className="tbl-wrp slide-1">
                                <div className="text-middle">
                                    <div className="tbl-cell">
                                        <div className="slide-caption container text-center">
                                            <div className="slide-title">
                                                <img src={logo} style={{ width: 100 }} alt="" />
                                            </div>
                                            <div className="slide-title2 pb-50">
                                                <h2 className="section-title uppercase">
                                                    <span className="light-font">De los productores </span>
                                                    <strong>directo a tu casa </strong>
                                                    <span className="light-font"> o negocio</span>
                                                </h2>
                                            </div>
                                            <div className="slide">
                                                <a href="#" className="slide-btn"> Comprar</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </AutoplaySlider>
                </div>
            </section>
        </>
    );
}

export default SliderComponent;
