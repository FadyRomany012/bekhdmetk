import React from "react";
import "./Header.scss";
import logo from "../assets/logo.svg";
import { Link } from "react-scroll";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import $ from "jquery";
const Header = () => {
  $(function () {
    $("#language-toggle").click(function () {
      $(".text-on").switchClass("text-on", "text-off", 10);
      $(".text-off").switchClass("text-off", "text-on", 10);
    });
  });
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }
  const handlelanguge = (e) => {
    console.log(e.target.value);
    localStorage.setItem("lang", e.target.value);
  };
  return (
    <div>
      <header>
        <div className="nav-wrapper">
          <div className="logo-container">
            <img className="logo" src={logo} alt="Logo"></img>
          </div>
          <nav>
            <input className="hidden" type="checkbox" id="menuToggle" />
            <label className="menu-btn" for="menuToggle">
              <div className="menu"></div>
              <div className="menu"></div>
              <div className="menu"></div>
            </label>
            <div className="nav-container">
              <ul className="nav-tabs">
                <li className="nav-tab">
                  {" "}
                  <Link
                    activeClass="active"
                    to="Navbar"
                    spy={true}
                    smooth={true}
                  >
                    {t("Header.1")}
                  </Link>
                </li>
                <li className="nav-tab">
                  {" "}
                  <Link to="services" spy={true} smooth={true}>
                    {t("Header1.1")}
                  </Link>
                </li>
                <li className="nav-tab">
                  {" "}
                  <Link to="features" spy={true} smooth={true}>
                    {t("Header2.1")}
                  </Link>
                </li>
                <li className="nav-tab">
                  {" "}
                  <Link to="ourpartners" spy={true} smooth={true}>
                    {t("Header3.1")}
                  </Link>
                </li>
                {/* <li className="nav-tab">our customers</li> */}
                <li className="nav-tab">
                  {" "}
                  <Link to="FAQ" spy={true} smooth={true}>
                    {t("Header4.1")}
                  </Link>
                </li>

                <li>
                  <div class="langswitcher">
                    <button
                      onClick={() => handleClick("ar")}
                      class="button fr is-large"
                    >
                      <span class="icon">AR</span>
                    </button>

                    <button
                      onClick={() => handleClick("en")}
                      class="button en is-large has-text-white"
                    >
                      <span class="icon">EN</span>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
