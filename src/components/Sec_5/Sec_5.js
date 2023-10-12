import React from "react";
import "./Sec_5.scss";
import Slider from "react-slick";
import slide1 from "../assets/slide1.svg";
import slide2 from "../assets/slide2.svg";
import slide3 from "../assets/slide3.svg";
import slide4 from "../assets/slide4.svg";
import our_app_line from "../assets/Vector1.svg";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const Sec_5 = () => {
  const { t, i18n } = useTranslation();

  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1300,

    arrows: true,
    dots: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div className="background-slider" id="ourpartners">
        <div class="container">
          <h3> {t("Sec_5_title.1")}</h3>
          <div className="our-app-line">
            <img
              src={our_app_line}
              alt="SVG "
              className="  img-fluid  profile-avatar "
            />
          </div>
          <Slider class="client-slider bg-dark" {...settings}>
            <div class="slide">
              <img src={slide1} />
            </div>
            <div class="slide">
              <img src={slide2} />
            </div>
            <div class="slide">
              <img src={slide3} />
            </div>
            <div class="slide">
              <img src={slide4} />
            </div>
            <div class="slide">
              <img src={slide1} />
            </div>
            <div class="slide">
              <img src={slide2} />
            </div>
            <div class="slide">
              <img src={slide3} />
            </div>
            <div class="slide">
              <img src={slide4} />
            </div>
            <div class="slide">
              <img src={slide1} />
            </div>
            <div class="slide">
              <img src={slide2} />
            </div>
            <div class="slide">
              <img src={slide3} />
            </div>
            <div class="slide">
              <img src={slide4} />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sec_5;
