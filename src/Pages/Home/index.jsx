import SliderComponent from "../../Components/Slider"
import ParaTi from "../../Components/ParaTi"
import ProductosCategory from "../../Components/ProductosCarousel"
import Tienda from '../Tienda'
import CardBlog from "../../Components/CardBlog"

function Home() {
    return (
        <>
            <SliderComponent />
            <ProductosCategory />

            <ParaTi />

            <Tienda />

            <div className="flex flex-col justify-center items-center gap-3 my-20">
                <div className="flex flex-col justify-center items-center text-center">
                    <h1 className="font-light uppercase text-xl md:text-2xl">BLOG DE PRODUCE HOUSE</h1>
                    <h3 className="text-3xl md:text-5xl">Últimas <strong>Noticias</strong></h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                    <CardBlog />
                    {/* Agrega más tarjetas según sea necesario */}
                </div>
            </div>
        </>
    )
}


export default Home
