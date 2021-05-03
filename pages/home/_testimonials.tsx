//<---Global Import--->
import React from "react";
import Link from "next/link";

//<---Local Import--->
import Image from "@/components/ImageWrapper";

//Types
import { imageType } from "@/src/helperTypes";

//Styles
import styles from "styles/pages/home.module.scss";

//Graphql
import { HomeTestimonialsQuery as IQuery } from "@/graphql/generated/graphql-frontend";

interface IData {
  __typename: string;
  guestName: string;
  comments: string;
  image: imageType;
}

const Testimonials: React.FC<{ data: IQuery }> = ({ data }) => {
  //<---Custom Hooks--->

  return (
    <div className={`${styles["home-container"]}`}>
      <div className={styles["tstmials-heading"]}>
        <h1>Testimonials</h1>
      </div>
      <div className={styles["tstmials-wrapper"]}>
        {/* {data?.testimonials!.map((card, index) => (
          <TestimonialsCard
            data={card as IData}
            key={`testimonials-map-1-${index}`}
          />
        ))} */}
        <TestimonialsCard />
      </div>
      <div className={`${styles["slider-cta"]} ${styles["tstmials-cta"]}`}>
        <Link href="/testimonials">
          <a href="/testimonials" className={styles["cta-btn"]}>
            See More
          </a>
        </Link>
      </div>
    </div>
  );
};

const TestimonialsCard: React.FC<{ data?: IData }> = ({ data }) => {
  return (
    <div className={styles["tstmials-card"]}>
      <div className={styles["tc-img-container"]}>
        <Image
          src="https://res.cloudinary.com/djujm0tsp/image/upload/v1617247534/Happiness_Travel_be433cc261.jpg"
          width={1920}
          height={1080}
          layout="responsive"
          objectFit="contain"
        />
        {/* <Image
          src={data!.image.url}
          layout="fill"
        /> */}
      </div>
      <div className={styles["tc-content"]}>
        <div>
          <h2>{data?.guestName || "Title"}</h2>
        </div>
        <p>
          {data?.comments ||
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptasmagnam impedit nam ratione eius itaque et nihil deserunt blanditiisomnis, repudiandae molestiae laboriosam. Quas porro pariatur fugamolestias sapiente qui."}
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
