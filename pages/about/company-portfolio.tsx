///<----Global Imports--->
import React from "react";

///<----Local Imports--->
import SEOWrapper, { SEOConfig } from "@/components/SEOWrapper";

import Image from "@/components/ImageWrapper";

import QuickLinks from "@/components/quickLinks";

//Data
import data from "../api/company-portfolio.json";

//Styles
import styles from "styles/pages/company-portfolio.module.scss";

const seoConfig = SEOConfig({
  title: "Company's Profile | Ideal Travel Creations",
  description:
    "Our Office is open from 9 am to 5 pm, Monday through Friday and 9 am to 2 pm on Saturdays.Approval, Certification, Licence and Affiliations",
  canonical: `https://www.idealtravelcreations.bt/about/company-portfolio`,
});

const CompanyPortfolio = () => {
  return (
    <>
      <SEOWrapper config={seoConfig} />
      <div className={styles["cp"]}>
        <div className={styles["cp-container"]}>
          <div className={styles["l-container"]}>
            <div className={styles["l-content"]}>
              <h2>Approval, Certification, Licence and Affiliations</h2>
              <hr />
              <div
                className={`${styles["content-img-container"]} ${styles["left"]}`}
              >
                <Image
                  src="https://res.cloudinary.com/djujm0tsp/image/upload/v1617247534/Happiness_Travel_be433cc261.jpg"
                  layout="fill"
                />
              </div>
              {data.Certifications.map((item, index) => (
                <div
                  key={`company-portfolio-1-${index * 56}`}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}

              <h2>Mission and Objectives</h2>
              <hr />
              <div
                className={`${styles["content-img-container"]} ${styles["right"]}`}
              >
                <Image
                  src="https://res.cloudinary.com/djujm0tsp/image/upload/v1617247534/Happiness_Travel_be433cc261.jpg"
                  layout="fill"
                />
              </div>
              <ol>
                {data.objective.map((item, index) => (
                  <li key={`company-portfolio-2-${index * 6734}`}>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>

              <h2>Working Hours</h2>
              <hr />
              <p>
                Our Office is open from 9 am to 5 pm, Monday through Friday and
                9 am to 2 pm on Saturdays. However we are available 24 x 7 when
                needed. Please contact us at{" "}
                <a href="tel:+97517124946">+975 17124946</a>/{" "}
                <a href="tel:+97517668047">17668047</a>,{" "}
                <a href="tel:+9752324987">+975 2 324987</a>/{" "}
                <a href="tel:+9752341089">341089</a> or{" "}
                <a href="mailto:idealtravelcreations@gmail.com">
                  idealtravelcreations@gmail.com
                </a>
              </p>

              <h2>Our Specialization</h2>
              <hr />

              {data.specialization.map((item, index) => (
                <li key={`company-portfolio-3-${index * 987}`}>
                  <p>{item}</p>
                </li>
              ))}
            </div>
          </div>
          <QuickLinks />
        </div>
      </div>
    </>
  );
};

export default CompanyPortfolio;
