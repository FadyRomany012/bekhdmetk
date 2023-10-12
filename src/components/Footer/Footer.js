import React from "react";
import apple_icon from "../assets/appleicon.svg";
import google_icon from "../assets/logos_google-play-icon.svg";
import logo from "../assets/logofooter.svg";
import face from "../assets/Face.svg";
import insta from "../assets/insta.svg";
import linked from "../assets/linked.svg";
import twiter from "../assets/twiter.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-column">
              {" "}
              <div className="logo-container ">
                <img className="logo" src={logo} alt="Logo"></img>
              </div>
            </div>
            <div className="col-md-4 footer-column">
              <ul className="list-inline footer-social">
                <li className="list-inline-item">
                  <a href="#">
                    <img className="logo" src={face} alt="Logo"></img>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <img className="logo" src={insta} alt="Logo"></img>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <img className="logo" src={linked} alt="Logo"></img>
                  </a>
                </li>{" "}
                <li className="list-inline-item">
                  <a href="#">
                    <img className="logo" src={twiter} alt="Logo"></img>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 footer-column">
              <div className="row">
                <p className="Avaliable-title">Avaliable now on </p>
                <div className="col-md-6 mb-md-0 mb-2 hero-sec-title">
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
                <div className="col-md-6 mb-md-0 mb-2 hero-sec-title">
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

          <div className="text-center">
            <i className="fas fa-ellipsis-h"></i>
          </div>

          <div className="row text-center">
            <div className="col-md-4 box">
              <span className="copyright quick-links">
                Copyright &copy; Your Website{" "}
                <script>document.write(new Date().getFullYear())</script>
              </span>
            </div>
            <div className="col-md-4 box"></div>
            <div className="col-md-4 box">
              <ul className="list-inline quick-links">
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
