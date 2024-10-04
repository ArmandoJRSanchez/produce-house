
import BodySection from "../../Components/BodySection"
import HeaderSection from "../../Components/HeaderSection"
import pattern from '../../assets/img/icons/white-pattern.png'

import logo from '../../assets/img/logo/Logo_PHCV.svg'
import { ShopingCartContext } from '../../Context';
import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom";


function Carrito() {
    const context = useContext(ShopingCartContext);

    const navigate = useNavigate();

    const handleImageError = (e) => {
        e.target.src = product_img; // Reemplaza con imagen predeterminada si no se carga la original
    };

    const imageFormat = (input) => {
        return input
            .trim()
            .toLowerCase()
            .replace(/^\w/, (char) => char.toUpperCase())
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/ñ/g, 'n')
            .replace(/Ñ/g, 'N');
    };

    const proceedToCheckout = () => {
        navigate("/checkout"); // Redirige a la página de checkout
    };


    const handleUpdateQuantity = (index, e) => {
        // Clonar el array de productos del carrito

        var newQuantity = parseInt(e.target.value);

        const updatedCartProducts = [...context.cartProduct];

        // Verificar que el índice sea válido
        if (index >= 0 && index < updatedCartProducts.length) {
            // Modificar la cantidad del producto en el índice dado
            updatedCartProducts[index] = {
                ...updatedCartProducts[index], // Clona el producto existente
                items: newQuantity // Actualiza la cantidad
            };

            // Actualizar el estado del carrito con el nuevo array
            context.setCartProduct(updatedCartProducts);
        }
    };



    const renderCartProducts = () => {
        if (context.cartProduct.length > 0) {
            return context.cartProduct?.map((producto, index) => {
                return (
                    <tr key={index} className="border-b">
                        <td className="px-4 py-4">
                            <div className="flex items-center">
                                <img src={`./products/PH_${imageFormat(producto.nombre)}.png`} onError={(event) => handleImageError(event)} alt="Producto" className="w-12 h-12 object-cover mr-4" />
                                <span className="text-gray-700">{producto.nombre}</span>
                            </div>
                        </td>
                        <td className="px-4 py-4">
                            <input type="number" onChange={(e) => handleUpdateQuantity(index, e)} value={producto.items} min="1" className="w-16 px-2 py-1 border border-gray-300 rounded text-center" />
                            <span> Por {producto.cantidad}</span>
                        </td>
                        <td className="px-4 py-4 text-gray-700">${producto.precio}</td>
                        <td className="px-4 py-4 text-gray-700">${producto.total}</td>
                        <td className="px-4 py-4">
                            <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-red-600">Eliminar</button>
                        </td>
                    </tr>
                );
            });
        } else {
            return (
                <tr className="w-full text-center">
                    <td colSpan="5">Aun no tienes productos en tu carrito.</td>
                </tr>
            );
        }
    };


    return (
        <>
            <section className="mt-20 w-full">
                <HeaderSection
                    titulo="Carrito de Compras"
                />
                <BodySection>
                    <div className="pattern">
                        <img alt="" src={pattern} />
                    </div>
                    <div className="section-icon flex flex-col justify-center items-center">
                        <img alt="" src={logo} className="w-24" />
                    </div>

                    <section>
                        <div className="container mx-auto p-4">
                            <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>

                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead>
                                        <tr className="bg-gray-100 border-b">
                                            <th className="px-4 py-2 text-left text-gray-600 font-semibold">Producto</th>
                                            <th className="px-4 py-2 text-left text-gray-600 font-semibold">Cantidad</th>
                                            <th className="px-4 py-2 text-left text-gray-600 font-semibold">Precio Unitario</th>
                                            <th className="px-4 py-2 text-left text-gray-600 font-semibold">Total</th>
                                            <th className="px-4 py-2 text-left text-gray-600 font-semibold">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            renderCartProducts()
                                        }
                                    </tbody>
                                </table>
                            </div>


                            <div className="mt-6 p-4 bg-white border border-gray-200 rounded">
                                <div className="flex justify-center gap-5 items-center">
                                    <span className="text-gray-700 font-semibold">Total:</span>
                                    <span className="text-xl font-bold">$40.00</span>
                                </div>

                                <div className="flex justify-around items-center w-full">
                                    <NavLink to="/tienda" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Seguir Comprando</NavLink>
                                    <button onClick={proceedToCheckout} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Proceder al Pago</button>
                                </div>
                            </div>
                        </div>
                    </section>

                </BodySection>
            </section>
        </>
    )
}


export default Carrito
