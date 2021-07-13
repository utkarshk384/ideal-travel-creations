//<---Global Import--->
import React from "react";
import Link from "next/link";

//<---Local Import--->
import Image from "@/components/ImageWrapper";

//Types
import { imageType } from "@/src/types/helperTypes";

//Styles
import styles from "styles/pages/home.module.scss";

//Graphql
import { HomeTestimonialsQuery as IQuery } from "@/src/types/generated/graphql-frontend";

interface IData {
  _id: string;
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
        <h1>Testimonial</h1>
      </div>
      <div className={styles["tstmials-wrapper"]}>
        {data?.testimonials!.map((card) => (
          <TestimonialsCard data={card as IData} key={card!._id} />
        ))}
      </div>
      <div className={styles["cta"]}>
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
          src={data!.image.url}
          width={data!.image.width}
          height={data!.image.height}
          layout="intrinsic"
        />
      </div>
      <div className={styles["tc-content"]}>
        <div>
          <h2>{data?.guestName}</h2>
        </div>
        <p>{data?.comments}</p>
      </div>
    </div>
  );
};

export default Testimonials;
