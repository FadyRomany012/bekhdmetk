import React from "react";
import "./Sec_6.scss";
import idea from "../assets/idea.svg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Sec_6 = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="container" id="FAQ">
        <div className="row">
          <div className="col-md-6 mb-md-0 mb-2">
            <div class="card-wrapper  | content-cc">
              <div class="faq-card">
                <main class="faq-content">
                  <h1>{t("Sec_6_title.1")}</h1>

                  <div class="faq-articles">
                    <article class="faq-accordion">
                      <input
                        type="checkbox"
                        class="tgg-title"
                        id="tgg-title-1"
                      />

                      <div class="faq-accordion-title">
                        <label for="tgg-title-1">
                          <h2>{t("Sec_6_title1.1")}</h2>
                          <span class="arrow-icon">
                            <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" />
                          </span>
                        </label>
                      </div>

                      <div class="faq-accordion-content">
                        <p>{t("Sec_6_title2.1")}</p>
                      </div>
                    </article>

                    <article class="faq-accordion">
                      <input
                        type="checkbox"
                        class="tgg-title"
                        id="tgg-title-2"
                      />

                      <div class="faq-accordion-title">
                        <label for="tgg-title-2">
                          <h2>{t("Sec_6_title3.1")}</h2>
                          <span class="arrow-icon">
                            <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" />
                          </span>
                        </label>
                      </div>

                      <div class="faq-accordion-content">
                        <p>{t("Sec_6_title4.1")}</p>
                      </div>
                    </article>

                    <article class="faq-accordion">
                      <input
                        class="tgg-title"
                        type="checkbox"
                        id="tgg-title-3"
                      />

                      <div class="faq-accordion-title">
                        <label for="tgg-title-3">
                          <h2>{t("Sec_6_title5.1")}</h2>
                          <span class="arrow-icon">
                            <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" />
                          </span>
                        </label>
                      </div>

                      <div class="faq-accordion-content">
                        <p>{t("Sec_6_title6.1")}</p>
                      </div>
                    </article>

                    <article class="faq-accordion">
                      <input
                        class="tgg-title"
                        type="checkbox"
                        id="tgg-title-4"
                      />

                      <div class="faq-accordion-title">
                        <label for="tgg-title-4">
                          <h2>{t("Sec_6_title7.1")} </h2>
                          <span class="arrow-icon">
                            <img src="https://raw.githubusercontent.com/Romerof/FAQ-accordion-card/main/images/icon-arrow-down.svg" />
                          </span>
                        </label>
                      </div>

                      <div class="faq-accordion-content">
                        <p>{t("Sec_6_title8.1")}</p>
                      </div>
                    </article>
                  </div>
                </main>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-md-0 mb-2">
            {" "}
            <img src={idea} className="avatar  img-fluid  profile-avatar " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec_6;
