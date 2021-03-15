import React from "react";
import Image from "next/image";
import _ from "lodash";

//Data
import introData from "../api/introData.json";

import styles from "styles/pages/bhutan.module.scss";

interface IintroData {
  key: string;
  val: string;
}

const BhutanPage = () => {
  return (
    <>
      <div className={styles.bht}>
        <div className={styles.intro}>
          <div className={`${styles["l-intro"]} ${styles["intro-item"]}`}>
            <div className={styles["l-img-container"]}>
              <div className={styles["img-heading"]}>
                <h1>About Bhutan</h1>
              </div>
              <Image
                src="/images/travel-packages/Happiness-Travel.jpg"
                layout="fill"
              />
            </div>
            <div className={styles["l-container"]}>
              {introData.leftData.map((item, index) => (
                <p key={`intro-left-data${index}`}>{item}</p>
              ))}
            </div>
          </div>
          <div className={`${styles["r-intro"]} ${styles["intro-item"]}`}>
            <h2>Country Facts</h2>
            {introData.rightData.map((item, index) => {
              return <IntroRight key={`btn-intro${index}`} data={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const IntroRight: React.FC<{ data?: IintroData }> = ({ data }) => {
  return (
    <div className={styles["r-item"]}>
      <div className={styles["r-content"]}>
        <p>{`${data?.key}:`}</p>
        <span>{data?.val}</span>
      </div>
      <hr />
    </div>
  );
};
export default BhutanPage;
