///<----Global Imports--->
import React from "react";
import { GetStaticProps } from "next";

///<----Local Imports--->
import Image from "@/components/ImageWrapper";
import SEOWrapper, { SEOConfig } from "@/components/SEOWrapper";

//Types
import type { imageType } from "@/src/types/helperTypes";

//Styles
import styles from "styles/pages/team.module.scss";

//Graphql
import { apolloQuery } from "@/apolloClient";
import EmployeesQuery from "@/graphql/EmployessQuery.graphql";
import * as GQLTypes from "@/src/types/generated/graphql-frontend";

type IQ = GQLTypes.GetEmployeesQuery;
type IV = GQLTypes.GetEmployeesQueryVariables;

interface IData {
  __typename: string;
  employeeName: string;
  employeeDescription: string;
  employeeOccupation: string;
  extraDetails: string;
  employeeImage: imageType;
}

const seoConfig = SEOConfig({
  title: "The Team | Ideal Travel Creations",
  description: "The team of Ideal Travel Creaitons.",
  canonical: `https://www.idealtravelcreations.bt/the-team`,
});

const TeamPage: React.FC<{ data?: IQ }> = ({ data }) => {
  return (
    <>
      <SEOWrapper config={seoConfig} />
      <div className={styles.team}>
        <div className={styles["team-cards"]}>
          {data?.employees?.map((employee, index) => (
            <Card key={`the-team-1-${index * 2348}`} data={employee as IData} />
          ))}
        </div>
      </div>
    </>
  );
};

const Card: React.FC<{ data: IData }> = ({ data }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-img-container"]}>
        <Image src={data.employeeImage?.url} layout="fill" />
      </div>
      <div className={styles["card-content"]}>
        <h2>{data?.employeeName}</h2>
        <span>{`(${data?.employeeOccupation})`}</span>
        <p>{data?.employeeDescription}</p>
        <span className={styles["extra-details"]}>{data?.extraDetails}</span>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data, error: err } = await apolloQuery<IQ, IV>({
    query: EmployeesQuery,
    variables: {},
  });

  if (err) {
    console.error(err);
    return { notFound: true };
  } else if (!data) return { notFound: true };

  if (data.employees && data.employees.length === 0) return { notFound: true };

  return {
    props: { data },
  };
};

export default TeamPage;
