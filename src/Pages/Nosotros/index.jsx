import { useState } from "react"
import HeaderSection from "../../Components/HeaderSection"
import BodySection from "../../Components/BodySection"
import pattern from '../../assets/img/icons/white-pattern.png'
import logo from '../../assets/img/logo/Logo_PHCV.svg'
import secimg7 from '../App/extra/sec-img-7.png'
import secimg8 from '../App/extra/sec-img-8.png'
import feature1 from '../../assets/img/icons/feature1.svg'
import feature2 from '../../assets/img/icons/feature2.svg'
import feature3 from '../../assets/img/icons/feature3.svg'


function Nosotros() {

    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "¿Cuál es el horario de atención y entrega?",
            answer: "Si tu pedido fue realizado antes de las 11.00 pm será entregado en el transcurso del día, del día siguiente, de lunes a domingo."
        },
        {
            question: "¿Realizan entregas a domicilio?",
            answer: "Sí, realizamos entregas a domicilio en las siguientes zonas: [Tijuana, Rosarito, Ensenada, Tecate y Mexicali]. Si tienes dudas sobre si llegamos a tu ubicación, no dudes en contactarnos."
        },
        {
            question: "¿Cuál es la cantidad mínima de pedido?",
            answer: "El pedido mínimo para entregas a domicilio es de $500. Los clientes mayoristas, como hoteles y restaurantes, tienen la opción de hacer pedidos más grandes con descuentos especiales."
        },
        {
            question: "¿Cuál es el tiempo de entrega de los pedidos?",
            answer: "Generalmente, realizamos las entregas en un plazo de no más de 24hrs desde que confirmas tu pedido y pago. Para entregas urgentes o del mismo día, por favor consulta la disponibilidad."
        },
        {
            question: "¿Ofrecen descuentos o precios especiales para compras al por mayor?",
            answer: "Sí, ofrecemos descuentos y precios especiales para compras al por mayor, especialmente para hoteles, restaurantes. Contáctanos para más detalles sobre precios especiales."
        },
        {
            question: "¿Cómo puedo pagar mi pedido?",
            answer: "Aceptamos pagos mediante transferencia bancaria y tarjetas de crédito. Los detalles de pago se te enviarán al confirmar tu pedido."
        },
        {
            question: "¿Tienen opciones de suscripción o servicio recurrente?",
            answer: "Sí, ofrecemos servicios de entrega recurrente para clientes que requieren pedidos regulares, como hoteles o restaurantes. Consulta nuestras opciones de suscripción para obtener entregas programadas."
        },
        {
            question: "¿Puedo solicitar productos que no estén en su catálogo?",
            answer: "Si necesitas algún producto específico que no esté en nuestro catálogo, contáctanos y haremos lo posible por conseguirlo para ti."
        },
        {
            question: "¿Cómo puedo hacer un seguimiento de mi pedido?",
            answer: "Una vez confirmado tu pedido, te proporcionaremos una referencia para que puedas contactarnos y consultar el estado de la entrega."
        },
        {
            question: "¿Qué debo hacer si mi pedido llega incompleto o con algún problema?",
            answer: "Si surge algún inconveniente con tu pedido, por favor contáctanos a través de WhatsApp o correo electrónico y resolveremos el problema lo más rápido posible."
        },
        {
            question: "¿Los precios incluyen impuestos y costos de envío?",
            answer: "Todos nuestros precios incluyen impuestos, pero el costo de envío puede variar según la zona de entrega. Te informaremos si hay algún cargo adicional cuando realices tu pedido."
        },
        {
            question: "¿Cómo se garantiza la seguridad e higiene en el manejo de los productos?",
            answer: "Seguimos estrictas medidas de seguridad e higiene durante la manipulación, almacenamiento y transporte de nuestros productos para garantizar su frescura y calidad."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <>
            <section className="mt-20 w-full">
                <HeaderSection
                    titulo="ACERCA DE PRODUCE HOUSE"
                />
                <BodySection>
                    <img
                        alt=""
                        src={secimg7}
                        className="left-bottom-img"
                    />
                    <img
                        alt=""
                        src={secimg8}
                        className="right-top-img"
                    />

                    <div className="pattern">
                        <img alt="" src={pattern} />
                    </div>
                    <div className="section-icon flex flex-col justify-center items-center">
                        <img alt="" src={logo} className="w-24" />

                    </div>

                    <div className="container ">
                        <div className="row flex justify-center items-center">
                            <div className="col-sm-8 fsz-16 pt-15 xs-text text-justify">
                                <h1 className="font-bold text-3xl my-10">NOSOTROS</h1>
                                <p>
                                    En Produce House, nos dedicamos a acercarte la calidad de los productos esenciales a tu puerta. Somos una plataforma en línea comprometida con la excelencia, donde puedes encontrar una gran variedad de frutas, vegetales y productos de abarrotes seleccionados con el más alto rigor. Nuestro compromiso es asegurar que cada compra que realices llegue a tiempo, en perfectas condiciones y con el respaldo de un servicio al cliente excepcional. Con nuestra experiencia en logística, garantizamos que tus productos siempre lleguen frescos y listos para deleitar a tus clientes, ya sea que abastezcas un hogar, un restaurante o un negocio.

                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 text-center">
                                <div className="feature-wrap flex flex-col justify-center items-center">
                                    <div className="w-40 h-40 rounded-full shadow-xl shadow-gray-700 p-10" style={{
                                        backgroundColor: '#a1ae82'
                                    }}>

                                        <img src={feature1} alt="" />
                                    </div>
                                    <h3 className="title-1 ptb-15">
                                        <span className="light-font">Entrega Puntual
                                        </span>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 text-center">
                                <div className="feature-wrap flex flex-col justify-center items-center">
                                    <div className="w-40 h-40 rounded-full shadow-xl shadow-gray-700 p-10" style={{
                                        backgroundColor: '#a1ae82'
                                    }}>

                                        <img src={feature2} alt="" />
                                    </div>
                                    <h3 className="title-1 ptb-15">
                                        <span className="light-font"> ATENCIO
                                            PERSONALIZADA</span>
                                    </h3>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 text-center">
                                <div className="feature-wrap flex flex-col justify-center items-center">
                                    <div className="w-40 h-40 rounded-full shadow-xl shadow-gray-700 p-10" style={{
                                        backgroundColor: '#a1ae82'
                                    }}>

                                        <img src={feature3} alt="" />
                                    </div>
                                    <h3 className="title-1 ptb-15">
                                        <span className="light-font">PRODUCTOS
                                            FRESCOS
                                        </span>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="container mx-auto my-10">
                            <h1 className="text-4xl font-bold text-gray-700 text-center">PREGUNTAS FRECUENTES</h1>

                            <div className="mt-8 space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b pb-4 cursor-pointer">
                                        <h2
                                            className="text-xl font-semibold text-gray-800"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            {faq.question}
                                        </h2>
                                        <hr className="border-gray-300 my-2" />
                                        <div
                                            className={`overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'
                                                }`}
                                        >
                                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div >
                </BodySection >
            </section >
        </>
    )
}


export default Nosotros
