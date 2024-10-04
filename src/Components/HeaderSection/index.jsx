import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderSection = ({ titulo }) => {
    return (
        // <!--Breadcrumb Section Start-->
        <section className="breadcrumb-bg h-60">
            <div className="theme-container container left-48 absolute overflow-hidden">
                <div className="site-breadcumb white-clr">
                    <h2 className="section-title"><strong className="clr-txt">{titulo}</strong></h2>
                    <ol className="breadcrumb breadcrumb-menubar">
                        <li className='text-white font-bold'> <a className='text-white font-bold' href="/inicio"> Home </a> {titulo} </li>
                    </ol>
                </div>
            </div>
        </section>
        // <!--Breadcrumb Section End-->
    )
}


export default HeaderSection
