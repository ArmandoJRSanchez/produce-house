
import { useContext, useState } from "react"
import BodySection from "../../Components/BodySection"
import { ShopingCartContext } from "../../Context"
import ProductCard from "../../Components/ProductCard"

function Tienda() {
    const context = useContext(ShopingCartContext)
    const [activeCategory, setActiveCategory] = useState('');

    const filteredByCategory = (categoria) => {
        setActiveCategory(categoria); // Establecer la categoría activa

        // console.log(categoria);
        // Verifica que context.catalog esté definido y tenga elementos
        if (context.products && context.products.length > 0) {
            const filtred = context.products.filter(item => item.categoria.data.nombre.toLowerCase() === categoria);

            context.setCatalog(filtred);

            console.log(filtred);
        } else {
            console.error("El catálogo está vacío o no está definido.");
        }
    };


    return (
        <>
            <section className="mt-20 w-full">
                <BodySection>
                    <div className="section-icon flex flex-col justify-center items-center">
                        <h3 className="text-lx text"><strong>LA MEJOR CALIDAD PARA TI</strong></h3>
                        <h1 className="text-4xl"><strong>NUESTRO </strong> CATÁLOGO</h1>
                    </div>

                    <div className="container rel-div mt-5">

                        <div className="flex justify-between items-center">
                            <ul className="flex w-full justify-center items-center gap-3">
                                {
                                    context.category.map((categoria) => {
                                        var isActive = (activeCategory === categoria.nombre.toLowerCase());

                                        return (
                                            <li key={categoria.nombre} className={`px-6 py-0 rounded-xl min-w-40 w-auto group hover:bg-gray-100 hover:scale-105 border border-gray-300 text-center font-bold ${isActive ? 'bg-gray-200' : ''}`}>
                                                <a onClick={() => filteredByCategory(categoria.nombre.toLowerCase())} className="group-hover:text-green-400 cursor-pointer">
                                                    {categoria.nombre}
                                                </a>
                                            </li>
                                        );
                                    })
                                }

                            </ul>
                        </div>

                        <div className="divider-full-1"></div>

                        <div className="result-bar block-inline">
                            <h4 className="result-txt"><b> {context.catalog.length} </b> productos encontrados</h4>
                        </div>

                        <div className="tab-content shop-content">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {context.catalog.map((producto, index) => {

                                    return (
                                        <ProductCard
                                            key={index}
                                            producto={producto}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </BodySection>
            </section>
        </>
    )
}


export default Tienda
