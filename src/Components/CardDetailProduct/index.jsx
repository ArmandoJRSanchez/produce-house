
import { useContext } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { ShopingCartContext } from '../../Context';

const CardDetailProduct = ({ id, data }) => {
    const context = useContext(ShopingCartContext);

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

    const deleteProductCart = (index) => {
        const filterCartProducts = context.cartProduct.filter((_, i) => i !== index);
        context.setCartProduct(filterCartProducts);
    }

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



    return (
        <div className="shadow-xl p-2 rounded-lg flex justify-between items-center">
            <div className="flex flex-col items-center justify-center h-full w-1/3 text-center">
                <img className="w-16 object-cover" src={`./products/PH_${imageFormat(data.nombre)}.png`} alt="" />
                <span className='h-full flex items-center justify-center'>{data.nombre}</span>
            </div>
            <div className="flex justify-between items-center gap-2 h-full w-2/3">
                <div className="flex flex-col justify-center items-center">
                    <input
                        className='border border-spacing-3 rounded-lg border-gray-700  text-center bg-gray-100 p-2 w-20'
                        type="number"
                        value={data.items}
                        onChange={(e) => handleUpdateQuantity(id, e)}
                    />
                    <span>Por {data.cantidad}</span>
                </div>
                <span>$ {data.precio}</span>
                <button className='border rounded-full p-1 bg-gray-200 hover:bg-green-300 relative top-0 right-0' onClick={() => deleteProductCart(id)}>
                    <FaXmark />
                </button>
            </div>
        </div>
    )
}

export default CardDetailProduct
