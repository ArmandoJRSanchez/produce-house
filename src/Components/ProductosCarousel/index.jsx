import { useContext } from 'react';
import pattern from '../../assets/img/icons/white-pattern.png';
import logo from '../../assets/img/logo/Logo_PHCV.svg';

import ProductCard from "../ProductCard";

import { ShopingCartContext } from '../../Context';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const ProductosCategory = () => {
  const context = useContext(ShopingCartContext);


  return (
    <section className="organic-all sec-space-bottom">
      <div className="pattern">
        <img src={pattern} alt="" />
      </div>
      <div className="section-icon flex justify-center align-items">
        <img className="logo-img" src={logo} style={{ width: 100 }} alt="" />
      </div>

      <div className="container-fluid mt-10">
        <h1 className="w-full text-center text-3xl">LO MÁS VENDIDO</h1>
        <div className="col-md-12">
          <div id={`product-tab-1`} className="tab-pane">
            {context.products && context.products.length > 0 ? (
              <Slider {...settings}>
                {context.products.map((producto, index) => (
                  <ProductCard
                    key={index}
                    producto={producto}
                  />
                ))}
              </Slider>
            ) : (
              <p>No hay productos disponibles.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductosCategory;
