import { FaAddressCard, FaEnvelope, FaHeart, FaMapLocation, FaPhone } from 'react-icons/fa6';
import logo from '../../assets/img/logo/Logo_PHBH.svg';
import pattern from '../../assets/img/icons/white-pattern.png';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <footer className="page-footer">
                <section className="sec-space footer-bg">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex justify-center sm:justify-start items-center">
                                <div className="main-logo">
                                    <NavLink to="/tienda">
                                        <img className='w-40 sm:w-80' alt="Logo" src={logo} />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="flex justify-center sm:justify-end items-center">
                                <ul className="list space-y-4">
                                    <li className='flex items-center gap-4 text-lg sm:text-xl text-white'>
                                        <FaMapLocation />
                                        <span>Dirección</span>
                                    </li>
                                    <li className='flex items-center gap-4 text-lg sm:text-xl text-white'>
                                        <FaPhone />
                                        <span>664 773 4908 </span>
                                    </li>
                                    <li className='flex items-center gap-4 text-lg sm:text-xl text-white'>
                                        <FaPhone />
                                        <span>664 773 4908 </span>
                                    </li>
                                    <li className='flex items-center gap-4 text-lg sm:text-xl text-white'>
                                        <FaEnvelope />
                                        <NavLink className="hover:text-white text-white" to="mailto:contacto@pruducehouse.com">
                                            <span>contacto@pruducehouse.com</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="footer-bottom">
                    <div className="pattern">
                        <img alt="Pattern" src={pattern} />
                    </div>
                    <div onClick={scrollToTop} className="to-top text-green-400 cursor-pointer">
                        <FaArrowAltCircleUp />
                    </div>
                    <div className="container mx-auto ptb-50 px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="w-full flex justify-center sm:justify-start items-center">
                                <p className='w-full flex gap-1 text-center sm:text-left text-sm sm:text-base'>©2024 <a href="#"> <strong> producehouse.com</strong></a>, diseñado por  Asicom Graphics, Todos los derechos reservados</p>
                            </div>
                            <div className="flex justify-center sm:justify-end items-center">
                                <ul className="primary-navbar footer-menu flex space-x-4 text-sm sm:text-base">
                                    <li><a href="./contacto">Contacto</a></li>
                                    <li><a href="#">Términos de uso</a></li>
                                    <li><a href="#">Políticas de privacidad</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
            <div id="to-top-mb" className="to-top mb"> <i className="fa fa-arrow-circle-o-up"></i> </div>
        </>
    );
};

export default Footer;
