import { useState, useContext } from 'react';
import { MdOutlineOpenInFull, MdAddShoppingCart } from "react-icons/md";
import { ShopingCartContext } from '../../Context';
import product_img from '../../../public/products/default.png';
import shap_small from '../../assets/img/icons/shap-small.png';
import { FaCheckCircle } from 'react-icons/fa';

const ProductCard = ({ producto }) => {
  const context = useContext(ShopingCartContext);
  const [isHovered, setIsHovered] = useState(false);
  const handleAddToCart = (producto, event) => {
    event.stopPropagation()
    var fechaActual = new Date();
    // Crear una copia del objeto producto y agregar más propiedades
    const productoConDetalles = {
      ...producto, // Copiar todas las propiedades de producto
      items: 1, // Por ejemplo, agregar una propiedad "cantidad"
      fechaAgregado: fechaActual.getDay() + "/" + fechaActual.getMonth() + "/" + fechaActual.getFullYear(), // También agregar la fecha actual,
      total: producto.items * producto.precio
    };

    context.setCartProduct([...context.cartProduct, productoConDetalles])
    context.closeCartDetail()
    context.openCartDetail()
  };

  const handleImageError = (e) => {
    e.target.src = product_img; // Reemplaza con imagen predeterminada si no se carga la original
  };

  const imageFormat = (input) => {
    return input
      .trim()
      .toLowerCase()
      .replace(/^\w/, (char) => char.toUpperCase())
      .normalize("NFD") // Normaliza el string separando los caracteres base de los acentos
      .replace(/[\u0300-\u036f]/g, '') // Elimina los acentos diacríticos
      .replace(/ñ/g, 'n') // Reemplaza "ñ" con "n"
      .replace(/Ñ/g, 'N'); // Reemplaza "Ñ" con "N"
  };

  const renderIcon = (id) => {
    const isInCart = context.cartProduct.filter(product => product.nombre === id).length > 0

    if (isInCart) {
      return (
        <a
          className="text-white hover:bg-green-400"
          href="#"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <FaCheckCircle />
        </a>
      )
    } else {
      return (
        <a
          className="text-white hover:text-green-500"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleAddToCart(producto, e);
          }}
        >
          <MdAddShoppingCart />
        </a>
      )
    }
  }



  return (
    <div className="h-auto p-6">
      <div
        className="w-full h-full shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl cursor-pointer relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex bg-gray-100 flex-col rounded-t-xl items-center justify-center">
          <img
            src={`/products/PH_${imageFormat(producto.nombre)}.png`}
            onError={(event) => handleImageError(event)}
            alt={producto.nombre}
            className="h-60 w-full object-cover max-w-52"
          />
          <img src={shap_small} alt={producto.nombre} className="w-full" />
        </div>
        <div className="px-4 py-3">
          <span className="text-gray-400 mr-3 uppercase text-xs">{producto.categoria.data.nombre}</span>
          <p className="text-lg text-center m-0 font-bold text-black truncate block capitalize">
            {producto.nombre}
          </p>
          <div className="flex items-center text-center relative">
            <p className="text-sm text-gray-600 cursor-auto ml-2 text-center w-full"> ${producto.precio} por {producto.cantidad}</p>
          </div>
        </div>

        {/* Botones que estarán ocultos por defecto y se mostrarán cuando isHovered sea true */}
        {isHovered && (
          <div className="absolute top-0 right-0 m-2 w-28 bg-black/25 px-4 py-2 rounded-full flex justify-between items-center opacity-100 transition-opacity duration-300">
            {
              renderIcon(producto.nombre)
            }
            <a
              className="text-white hover:text-green-500"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                fullScreenProduct(producto);
              }}
            >
              <MdOutlineOpenInFull />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
