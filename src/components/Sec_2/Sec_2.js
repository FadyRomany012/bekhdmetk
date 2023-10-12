import React from "react";
import "./Sec_2.scss";

import image2 from "../assets/1212Rectangle.svg";

import our_app_line from "../assets/Vector1.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Sec_2 = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };
  const { t, i18n } = useTranslation();

  return (
    <div>
      {" "}
      <section className="header" id="services">
        <div className="intro-cards">
          <div className="container">
            <h3>{t("Sec_2_title0.1")}</h3>
            <div className="our-app-line">
              <img
                src={our_app_line}
                alt="SVG "
                className="  img-fluid  profile-avatar "
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-md-0 mb-2 bg-mobile-2">
                {" "}
                <img
                  src={image2}
                  alt="SVG "
                  className="avatar  img-fluid  profile-avatar "
                />
              </div>
              <div className="col-md-6 mb-md-0 mb-2 hero-sec-title">
                <div className="card-body card2-sec2">
                  <i className="ri-bar-chart-grouped-line ri-3x mb-5"></i>
                  <h3 className="yone-title">{t("Sec_2_title.1")}</h3>
                  <div className="divider-shape"></div>
                  <p className="card-text">{t("Sec_2_title2.1")}</p>
                  <div className="row">
                    <div className="col-md-4 mb-md-0 mb-2 hero-sec-title">
                      <button
                        type="button"
                        className="btn btn-primary w-100 apple-button"
                      >
                        App store
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sec_2;
