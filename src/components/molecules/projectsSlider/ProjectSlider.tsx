import React, { MouseEventHandler } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/styles.css";
import image from "../../../assets/project2.png";

interface ArrowProps {
  className?: string;

  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Arrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={className}
      style={{ display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
};

function ProjectSlider() {
  const settings = {
  
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };
  return (
    <section className="slider-container-project">
      <Slider className="slider-project" {...settings}>
      <div className="container-slider-project">
          <div className="slider-content-project">
          <h4 className="title-slider-project">DonaGato</h4>
            <p className="content-slider-project">
            DonaGato es una APP con precio de $10.00 MXN, la cual tiene el fin de donar un porcentaje de sus ganancias a refugios y albergues de animales necesitados.
            </p>
            <button className="button-slider-project">Mira todos mis proyectos</button>
          </div>
          <div className="container-img-project">
            <img className="img-slider-project" src={image} alt="" />
          </div>
        </div>
        <div className="container-slider-project">
          <div className="slider-content-project">
          <h4 className="title-slider-project">DonaGato</h4>
            <p className="content-slider-project">
            DonaGato es una APP con precio de $10.00 MXN, la cual tiene el fin de donar un porcentaje de sus ganancias a refugios y albergues de animales necesitados.
            </p>
            <button className="button-slider-project">Mira todos mis proyectos</button>
          </div>
          <div className="container-img-project">
            <img className="img-slider-project" src={image} alt="" />
          </div>
        </div>
        <div className="container-slider-project">
          <div className="slider-content-project">
          <h4 className="title-slider-project">DonaGato</h4>
            <p className="content-slider-project">
            DonaGato es una APP con precio de $10.00 MXN, la cual tiene el fin de donar un porcentaje de sus ganancias a refugios y albergues de animales necesitados.
            </p>
            <button className="button-slider-project">Mira todos mis proyectos</button>
          </div>
          <div className="container-img-project">
            <img className="img-slider-project" src={image} alt="" />
          </div>
        </div>
        <div className="container-slider-project">
          <div className="slider-content-project">
          <h4 className="title-slider-project">DonaGato</h4>
            <p className="content-slider-project">
            DonaGato es una APP con precio de $10.00 MXN, la cual tiene el fin de donar un porcentaje de sus ganancias a refugios y albergues de animales necesitados.
            </p>
            <button className="button-slider-project">Mira todos mis proyectos</button>
          </div>
          <div className="container-img-project">
            <img className="img-slider-project" src={image} alt="" />
          </div>
        </div>
        <div className="container-slider-project">
          <div className="slider-content-project">
          <h4 className="title-slider-project">DonaGato</h4>
            <p className="content-slider-project">
            DonaGato es una APP con precio de $10.00 MXN, la cual tiene el fin de donar un porcentaje de sus ganancias a refugios y albergues de animales necesitados.
            </p>
            <button className="button-slider-project">Mira todos mis proyectos</button>
          </div>
          <div className="container-img-project">
            <img className="img-slider-project" src={image} alt="" />
          </div>
        </div>
      </Slider>
    </section>
  );
}
export default ProjectSlider;
