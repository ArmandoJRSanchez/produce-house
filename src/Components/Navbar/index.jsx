import { useState, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo/Logo_PHCH.svg'
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

import { ShopingCartContext } from '../../Context';

function Navbar() {
    const activeClass = "underline";

    const [scrolled, setScrolled] = useState(false);

    const context = useContext(ShopingCartContext)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`w-full flex justify-between items-center fixed top-0 px-6 z-10 ${scrolled ? 'bg-white' : 'text-black'}`}>
            <ul className='flex'>
                <li className='m-6'>
                    <NavLink to="./">
                        <img className='w-1/2' src={logo} alt="LOGO" />
                    </NavLink>
                </li>
            </ul>
            <ul className='flex justify-between items-center gap-10'>

                <li>
                    <NavLink to="./tienda">
                        Tienda
                    </NavLink>
                </li>
                <li>
                    <NavLink to="./nosotros">
                        Nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink to="./contacto">
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink to="./login">
                        Login /
                        Registrarse
                    </NavLink>
                </li>
                <li>
                    <NavLink to="./carrito" className="flex justify-between items-center gap-3">
                        <FaShoppingCart /> {context.cartProduct.length}
                    </NavLink>
                </li>
                <li>
                    <NavLink to="./busqueda">
                        <FaSearch />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
