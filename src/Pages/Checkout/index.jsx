import React, { useContext, useState } from 'react';
import { ShopingCartContext } from '../../Context';
import { NavLink } from 'react-router-dom';

function Checkout() {
    const context = useContext(ShopingCartContext);
    const [customerData, setCustomerData] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        email: ''
    });

    // Manejar el cambio en los campos del formulario
    const handleInputChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se manejaría la lógica del pago y envío de la información del pedido
        console.log("Datos del cliente: ", customerData);
        console.log("Productos del carrito: ", context.cartProduct);
    };

    const renderCartProducts = () => {
        return context.cartProduct?.map((producto, index) => (
            <tr key={index} className="border-b">
                <td className="px-4 py-4">{producto.nombre}</td>
                <td className="px-4 py-4">{producto.items}</td>
                <td className="px-4 py-4">${producto.precio}</td>
                <td className="px-4 py-4">${producto.total}</td>
            </tr>
        ));
    };

    return (
        <section className="mt-20 w-full">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Checkout</h1>
                <div className="bg-white p-4 border border-gray-200 rounded mb-6">
                    <h2 className="text-xl font-semibold mb-4">Datos del Cliente</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Nombre Completo</label>
                            <input
                                type="text"
                                name="nombre"
                                value={customerData.nombre}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Dirección</label>
                            <input
                                type="text"
                                name="direccion"
                                value={customerData.direccion}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Teléfono</label>
                            <input
                                type="text"
                                name="telefono"
                                value={customerData.telefono}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={customerData.email}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Confirmar Pedido</button>
                    </form>
                </div>

                <div className="bg-white p-4 border border-gray-200 rounded">
                    <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100 border-b">
                                <th className="px-4 py-2 text-left text-gray-600 font-semibold">Producto</th>
                                <th className="px-4 py-2 text-left text-gray-600 font-semibold">Cantidad</th>
                                <th className="px-4 py-2 text-left text-gray-600 font-semibold">Precio Unitario</th>
                                <th className="px-4 py-2 text-left text-gray-600 font-semibold">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderCartProducts()}
                        </tbody>
                    </table>
                    <div className="mt-6 text-right font-bold text-lg">
                        Total a Pagar: $40.00
                    </div>
                </div>

                <div className="mt-6">
                    <NavLink to="/carrito" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Volver al Carrito</NavLink>
                </div>
            </div>
        </section>
    );
}

export default Checkout;
