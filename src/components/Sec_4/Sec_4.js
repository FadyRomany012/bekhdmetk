import React from "react";
import image2 from "../assets/iPhone12.svg";
import "./Sec_4.scss";

import our_app_line from "../assets/Vector1.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/Group 427320801.svg";
import icon3 from "../assets/cart-icon1.svg";
import icon4 from "../assets/upload.svg";
import icon5 from "../assets/Group 423427320804.svg";
import icon6 from "../assets/mony1.svg";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const Sec_4 = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <section className="header" id="features">
        <div className="intro-cards">
          <div className="container">
            <h3>{t("Sec_4_title.1")}</h3>
            <div className="our-app-line">
              <img
                src={our_app_line}
                alt="SVG "
                className="  img-fluid  profile-avatar "
              />
            </div>
            <div className="row ">
              <div className="col-md-4 mb-md-0 mb-2 hero-sec-title">
                <div class="card mb-3  bg-left">
                  <div class="row no-gutters">
                    <div class="col-md-2">
                      <img src={icon1} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-10">
                      <div class="card-body sec4-content-left">
                        <h5 class="card-title title-sec4-left">
                          {t("Sec_4_title1.1")}
                        </h5>
                        <p class="card-text prag-sec4-left">
                          {t("Sec_4_title2.1")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3  bg-left">
                  <div class="row no-gutters">
                    <div class="col-md-2">
                      <img src={icon2} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-10">
                      <div class="card-body sec4-content-left">
                        <h5 class="card-title title-sec4-left">
                          {t("Sec_4_title3.1")}
                        </h5>
                        <p class="card-text prag-sec4-left">
                          {t("Sec_4_title4.1")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div class="card mb-3  bg-left">
                  <div class="row no-gutters">
                    <div class="col-md-2">
                      <img src={icon3} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-10">
                      <div class="card-body sec4-content-left">
                        <h5 class="card-title title-sec4-left">
                          {t("Sec_4_title5.1")}
                        </h5>
                        <p class="card-text prag-sec4-left">
                          {t("Sec_4_title6.1")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-md-0 mb-2 bg-mobile-2 bg-mobile-2-sec4">
                <img
                  src={image2}
                  alt="SVG "
                  className="avatar  img-fluid  profile-avatar "
                />
              </div>
              <div className="col-md-4 mb-md-0 mb-2 hero-sec-title">
                <div class="card mb-3  bg-left">
                  <div class="row no-gutters">
                    <div class="col-md-2">
                      <img src={icon4} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-10">
                      <div class="card-body sec4-content-left">
                        <h5 class="card-title title-sec4-left">
                          {t("Sec_4_title7.1")}
                        </h5>
                        <p class="card-text prag-sec4-left">
                          {t("Sec_4_title8.1")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div class="card mb-3  bg-left">
                  <div class="row no-gutters">
                    <div class="col-md-2">
                      <img src={icon5} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-10">
                      <div class="card-body sec4-content-left">
                        <h5 class="card-title title-sec4-left">
                          {t("Sec_4_title9.1")}
                        </h5>
                        <p class="card-text prag-sec4-left">
                          {t("Sec_4_title10.1")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div class="card mb-3  bg-left">
                  <div class="row no-gutters">
                    <div class="col-md-2">
                      <img src={icon6} class="card-img" alt="..." />
                    </div>
                    <div class="col-md-10">
                      <div class="card-body sec4-content-left">
                        <h5 class="card-title title-sec4-left">
                          {t("Sec_4_title11.1")}
                        </h5>
                        <p class="card-text prag-sec4-left">
                          {t("Sec_4_title12.1")}
                        </p>
                      </div>
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

export default Sec_4;
