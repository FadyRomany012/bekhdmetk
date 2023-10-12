import "./Sec_1.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import image1 from "../assets/PhoneComp-02Comp.svg";
import apple_icon from "../assets/appleicon.svg";
import google_icon from "../assets/logos_google-play-icon.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Sec_1 = () => {
  const en = localStorage.getItem("lang");
  const transition = { duration: 2, type: "spring" };
  const { t, i18n } = useTranslation();
  return (
    <section className="header" id="header">
      <div className="intro-cards">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-md-0 mb-2 hero-sec-title">
              <div className="card-body">
                <i className="ri-bar-chart-grouped-line ri-3x mb-5"></i>
                <h3 className="yone-title">
                  <span className="yone-bg">{t("Sec_1_title0.1")}</span>{" "}
                  {t("Sec_1_title.1")}
                </h3>
                <div className="divider-shape"></div>
                <p className="card-text">{t("Sec_1_title2.1")}</p>
                <div className="row">
                  <p className="Avaliable-title">{t("Sec_1_title3.1")} </p>
                  <div className="col-md-4 mb-md-0 mb-2 hero-sec-title">
                    <button
                      type="button"
                      className="btn btn-primary w-100 apple-button"
                    >
                      <i className="ri-bar-chart-grouped-line ri-3x mb-5">
                        <img
                          src={apple_icon}
                          alt="SVG "
                          className=" logo image img-fluid  icon-size"
                        />
                      </i>
                      App store
                    </button>
                  </div>
                  <div className="col-md-4 mb-md-0 mb-2 hero-sec-title">
                    <button
                      type="button"
                      className="btn btn-outline-primary w-100"
                    >
                      <i className="ri-bar-chart-grouped-line ri-3x mb-5">
                        <img
                          src={google_icon}
                          alt="SVG "
                          className=" logo image img-fluid icon-size "
                        />
                      </i>
                      google play
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-md-0 mb-2 bg-mobile">
              <motion.img
                initial={{ left: "-36%" }}
                whileInView={{ left: "-24%" }}
                transition={transition}
                src={image1}
                className="avatar logo image img-fluid  profile-avatar w-100"
                alt=""
              />{" "}
              <motion.div
                initial={{ top: "-4%", left: "74%" }}
                whileInView={{ left: "68%" }}
                transition={transition}
                className="floating-div"
              >
                {/* <img src={image1} alt="SVG "                  className="avatar logo image img-fluid  profile-avatar w-100"
/>{" "} */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec_1;
