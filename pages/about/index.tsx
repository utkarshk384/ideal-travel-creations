///<----Global Imports--->
import React from "react";
import Image from "next/image";
import Link from "next/link";

///<----Global Imports--->

import QuickLinks from "@/components/quickLinks";

//Styles
import styles from "styles/pages/about.module.scss";

const AboutPage: React.FC = () => {
  return (
    <div className={styles["about"]}>
      <div className={`${styles["l-container"]} ${styles["about-item"]}`}>
        <div className={styles["l-img-container"]}>
          <div className={styles["l-heading"]}>
            <h1>About Us</h1>
          </div>
          <Image
            src="/images/travel-packages/Happiness-Travel.jpg"
            layout="fill"
          />
        </div>
        <div className={styles["l-content"]}>
          <h2>Our Team</h2>
          <p>
            Ideal Travel Creations is a family business managed and owned by
            Husband and wife, Bikee and Trishna.
          </p>
          <p>
            Mr. Bikee has been in the Bhutan Tourism industry since the year
            2006. After his studies, he started his career in the Bhutan Tourism
            industry and has worked with many Travel Companies in Bhutan. He has
            traveled extensively in Bhutan and knows each and every corner of
            Bhutan. He can plan holidays with perfection. His work has impressed
            many travelers and agents abroad. Question him and he has an answer;
            ask him and it is arranged. Besides management and finaance, he
            specializes in organizing and creating creative and unique tours,
            treks, and holidays in Bhutan and is the key person behind Ideal
            Travel creations. He is known for his creativity and is also
            passionate about different kinds of music.
          </p>
          <p>
            Ms. Trishna Rasaily comes from Educational Background. She worked in
            various schools in Bhutan and India before the establishment of
            Ideal travel Creations. Working in different places has given her a
            good knowledge of the places and also got ample opportunity to
            travel around these two countries. She was the head of department
            when is school and is a very good administrator and has very good
            Public relations.
          </p>

          <p>
            Apart from managing the day to day activities of the organization
            she specializes in the following:
          </p>

          <p>
            <b>Student Educational Tour:</b> Being in schools for a period of
            around 9 years, she understands the need of the students of the 21st
            Century and a perfect Student Educational Tour in Bhutan. She also
            has good rapport with the schools and educational organization in
            Bhutan and has herself led many student tours around Bhutan.
          </p>
          <p>
            <b>Women Travel:</b> Ms. Trishna Rasaily is a sister, a wife, a
            teacher, a manager, a mother, a daughter and many more. She has
            played most of the roles of a woman in Bhutan. Being a woman
            herself, she knows the inclusions in a women travel and creates such
            tours that would come in line with the requirements of a woman. Ms.
            Trishna Rasaily accompanies some of the Women Tours organized by
            Ideal Travel Creations.
          </p>

          <div className={styles.cta}>
            <Link href="/about/the-team">
              <button>Team Members</button>
            </Link>
          </div>
          <h2>The Company</h2>
          <p>
            Ideal Travel Creations has been in the Bhutan travel industry since
            2012. It was established with a broader objective to provide
            travelers around the world with the most ideal holidays in Bhutan.
            Since its establishment in the year 2012, Ideal Travel Creations is
            a small but one of the fastest growing tour operators in Bhutan. We
            are growing fast because we create unique tours and every tour is
            crafted as per the personal interests or requirements of the
            traveler and we execute every tours exceptionally with personalized
            attention. We make travel to Bhutan easy for every different
            individual.
          </p>
        </div>
      </div>
      <QuickLinks />
    </div>
  );
};

export default AboutPage;
