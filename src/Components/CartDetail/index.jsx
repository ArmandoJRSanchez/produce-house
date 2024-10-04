import { ShopingCartContext } from "../../Context";
import { useContext } from "react";
import "./styles.css"
import { FaXmark } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom'

import CardDetailProduct from "../CardDetailProduct";

const CartDetail = () => {
    const context = useContext(ShopingCartContext)

    const item = context.productToShow;

    return (
        <aside className={`fixed w-96 bg-white right-0 z-10 cart p-6 rounded-lg ${context.isCartDetailOpen ? 'fixed' : 'hidden'}`}>
            <div className="flex justify-between items-center">
                <h1 className="font-medium text-2xl mb-4">
                    Carrito de compras
                </h1>
                <button className="font-medium text-2xl mb-4" onClick={() => context.closeCartDetail()}>
                    <FaXmark />
                </button>
            </div>

            <div className="flex flex-col overflow-x-hidden h-2/3 p-3">
                {
                    context.cartProduct?.map((producto, index) => {
                        return (
                            <CardDetailProduct
                                key={index}
                                id={index}
                                data={producto}
                            />
                        )
                    })
                }
            </div>

            <div className="p-6 flex flex-col justify-center items-center">
                <p className="w-full bg-green-400 flex justify-around items-center px-6 py-2 rounded-lg text-black font-bold">
                    <span>Total: </span>
                    <span>$100.00</span>
                </p>
                <NavLink to="./carrito" onClick={() => context.closeCartDetail()} className="border w-full text-center px-6 p-2 rounded-lg hover:bg-gray-300 cursor-pointer">
                    Ir al Carrito
                </NavLink>
            </div>
        </aside>
    )
}


export default CartDetail
