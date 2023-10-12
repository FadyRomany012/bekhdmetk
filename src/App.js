import "./App.css";

import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Sec_1 from "./components/Sec_1/Sec_1";
import Sec_2 from "./components/Sec_2/Sec_2";
import Sec_3 from "./components/Sec_3/Sec_3";
import Sec_4 from "./components/Sec_4/Sec_4";
import Sec_5 from "./components/Sec_5/Sec_5";
import Sec_6 from "./components/Sec_6/Sec_6";
import Footer from "./components/Footer/Footer";
import Loading from "./components/loading/loading";
import { FaAngleUp } from "react-icons/fa";
import * as Scroll from "react-scroll";
import ScrollToTop from "./components/scrolltop/ScrollToTop ";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const [Dir, setDir] = useState("ltr");
  const [language, setLang] = useState("en");
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2800);
  }, []);
  return (
    <div
      dir={i18n.language == "en" ? Dir : "rtl"}
      lang={i18n.language == "en" ? "en" : "ar"}
      className={i18n.language == "en" ? "body en" : "body ar"}
    >
      {loading && <Loading />}

      <div className="bg-hero">
        <ScrollToTop></ScrollToTop>
        <Header></Header>
        <Sec_1></Sec_1>
        <Sec_2></Sec_2>
        <Sec_3></Sec_3>
        <Sec_4></Sec_4>
        <Sec_5></Sec_5>
        <Sec_6></Sec_6>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
