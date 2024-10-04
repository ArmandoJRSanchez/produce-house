import BodySection from "../../Components/BodySection"
import HeaderSection from "../../Components/HeaderSection"
import pattern from '../../assets/img/icons/white-pattern.png'
import logo from '../../assets/img/logo/Logo_PHCV.svg'

function Contacto() {
    return (
        <>
            <section className="mt-20 w-full">
                <HeaderSection
                    titulo="Contacto"
                />
                <BodySection>
                    <div className="pattern">
                        <img alt="" src={pattern} />
                    </div>
                    <div className="section-icon flex flex-col justify-center items-center">
                        <img alt="" src={logo} className="w-24" />
                    </div>

                    <section className="contact-wrap sec-space-bottom">
                        <div className="container rel-div pt-50">

                            <div className="divider-full-1"></div>

                            <div className="pt-50 col-md-8 col-md-offset-2 w-full flex-col flex items-center justify-center">
                                <h3 className="fsz-25 text-center"><span className="light-font">Contact </span> <strong>Produce House </strong>  </h3>

                                <div className="contact-form pt-50">
                                    <form className="contact-form row" id="contact-form">
                                        <div className="form-group col-sm-4">
                                            <input className="form-control" placeholder="Nombre" name="Name" id="Name" required="" type="text" />
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <input className="form-control" placeholder="Email" name="Email" id="Email" required="" type="email" />
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <input className="form-control" placeholder="Teléfono" name="Phone" id="Phone" type="text" />
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <textarea className="form-control" placeholder="Mensaje" name="Message" id="Message" cols="12" rows="4"></textarea>
                                        </div>
                                        <div className="form-group col-sm-12 text-center pt-15">
                                            <button className="theme-btn" type="submit"> <strong> Enviar Mensaje </strong> </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </section>
                </BodySection>
            </section>
        </>
    )
}


export default Contacto
