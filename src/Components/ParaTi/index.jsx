import pattern from '../../assets/img/icons/white-pattern.png';
import frutas from '../../assets/img/icons/frutas.svg';
import vegetales from '../../assets/img/icons/vegetales.svg';
import varios from '../../assets/img/icons/varios.svg';



const ParaTi = () => {
    return (
        <>
            <div className="container flex flex-col md:flex-row justify-between items-center w-full h-auto md:h-80">
                <div className="w-full md:w-1/2 flex justify-center gap-3 items-center h-full">
                    <figure className="w-full min-h-72 justify-center sm:w-1/3 md:w-1/3 rounded-lg shadow-lg p-4 h-auto flex flex-col items-center">
                        <img src={frutas} alt="" className='object-cover w-full max-w-40' />
                        <div className="">
                            <p className='text-center text-black font-bold m-0 text-xl'>
                                Frutas
                            </p>
                            <p className='text-center text-gray-500 m-0 text-base'>
                                12 artículos
                            </p>
                        </div>
                    </figure>
                    <figure className="w-full min-h-72 justify-center sm:w-1/3 md:w-1/3 rounded-lg shadow-lg p-4 h-auto flex flex-col items-center">
                        <img src={vegetales} alt="" className='object-cover w-full max-w-40' />
                        <div className="">
                            <p className='text-center text-black font-bold m-0 text-xl'>
                                Vegetales
                            </p>
                            <p className='text-center text-gray-500 m-0 text-base'>
                                15 artículos
                            </p>
                        </div>
                    </figure>
                    <figure className="w-full min-h-72 justify-center sm:w-1/3 md:w-1/3 rounded-lg shadow-lg p-4 h-auto flex flex-col items-center">
                        <img src={varios} alt="" className='object-cover w-full max-w-40' />
                        <div className="">
                            <p className='text-center text-black font-bold m-0 text-xl'>
                                Varios
                            </p>
                            <p className='text-center text-gray-500 m-0 text-base'>
                                24 artículos
                            </p>
                        </div>
                    </figure>
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-6 md:text-left">
                    <h3 className="text-xl font-bold"><strong>PARA TI</strong></h3>
                    <p className='font-medium'>EN PRODUCE HOUSE</p>
                    <p className='font-light'>Entendemos que cada cliente tiene necesidades únicas. Es por eso que
                        hemos dividido nuestra oferta en tres categorías especialmente
                        diseñadas para ti.
                    </p>
                </div>
            </div>

        </>
    )
}

export default ParaTi