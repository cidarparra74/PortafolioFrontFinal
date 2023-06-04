import React, { MouseEventHandler, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/slider.css";
import image from "../../../assets/Logo.png";
import { APISERVICE } from "../../../services/api.services";


interface ArrowProps {
  className?: string;

  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Arrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  const [experience, setExperience] = useState([]);
  const getExperience = async (): Promise<void> => {
    let url = "api/experience/";
    let params = ``;
    const response = await APISERVICE.get(url, params);

    setExperience(response);
    console.log(response.data);
  };
  useEffect(() => {
    getExperience();
  }, []);

  return (
    <div
      className={className}
      style={{ display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
};

function Slide() {
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
    <section className="slider-container">
      <Slider className="slider" {...settings}>
        <div className="container-slider">
          <div className="container-img">
            <img className="img-slider" src={image} alt="" />
          </div>
          <div className="slider-content">
            <p>
              Below that there’s a section with more customer photos and their
              quotes. All of the personalities shown have titles such as
              “Founder,” “Business Owner,” and “Co-Founder.” This reveals
              Quickbooks’ target market of small businesses.
            </p>
            <h4>Adoplastic</h4>
            <span>01/03</span>
          </div>
        </div>
        <div className="container-slider">
          <div className="container-img">
            <img className="img-slider" src={image} alt="" />
          </div>
          <div className="slider-content">
            <p>
              Below that there’s a section with more customer photos and their
              quotes. All of the personalities shown have titles such as
              “Founder,” “Business Owner,” and “Co-Founder.” This reveals
              Quickbooks’ target market of small businesses.
            </p>
            <h4>Adoplastic</h4>
            <span>01/03</span>
          </div>
        </div>
        <div className="container-slider">
          <div className="container-img">
            <img className="img-slider" src={image} alt="" />
          </div>
          <div className="slider-content">
            <p>
              Below that there’s a section with more customer photos and their
              quotes. All of the personalities shown have titles such as
              “Founder,” “Business Owner,” and “Co-Founder.” This reveals
              Quickbooks’ target market of small businesses.
            </p>
            <h4>Adoplastic</h4>
            <span>01/03</span>
          </div>
        </div>

        <div className="container-slider">
          <div className="container-img">
            <img className="img-slider" src={image} alt="" />
          </div>
          <div className="slider-content">
            <p>
              Below that there’s a section with more customer photos and their
              quotes. All of the personalities shown have titles such as
              “Founder,” “Business Owner,” and “Co-Founder.” This reveals
              Quickbooks’ target market of small businesses.
            </p>
            <h4>Adoplastic</h4>
            <span>01/03</span>
          </div>
        </div>
        <div className="container-slider">
          <div className="container-img">
            <img className="img-slider" src={image} alt="" />
          </div>
          <div className="slider-content">
            <p>
              Below that there’s a section with more customer photos and their
              quotes. All of the personalities shown have titles such as
              “Founder,” “Business Owner,” and “Co-Founder.” This reveals
              Quickbooks’ target market of small businesses.
            </p>
            <h4>Adoplastic</h4>
            <span>01/03</span>
          </div>
        </div>
      </Slider>
    </section>
  );
}
export default Slide;
