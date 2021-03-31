///<----Global Imports--->
import React from "react";
import Image from "next/image";
import { GetStaticProps } from "next";

///<----Local Imports--->

//Types
import type { imageType } from "@/src/helperTypes";

//Styles
import styles from "styles/pages/team.module.scss";

//Graphql
import { initializeApollo } from "@/apolloClient";
import EmployeesQuery from "@/graphql/EmployessQuery.graphql";
import {
  GetEmployeesQuery as IQuery,
  GetEmployeesQueryVariables as IVars,
} from "@/graphql/generated/graphql-frontend";

interface IData {
  __typename: string;
  employeeName: string;
  employeeDescription: string;
  employeeOccupation: string;
  extraDetails: string;
  image: imageType;
}

const TeamPage: React.FC<{ data?: IQuery }> = ({ data }) => {
  return (
    <div className={styles.team}>
      <div className={styles["team-cards"]}>
        {data?.employees?.map((employee, index) => (
          <Card key={`the-team-1-${index * 2348}`} data={employee as IData} />
        ))}
      </div>
    </div>
  );
};

const Card: React.FC<{ data?: IData }> = ({ data }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-img-container"]}>
        <Image
          src="/images/travel-packages/Happiness-Travel.jpg"
          layout="fill"
        />
        {/* <Image
          src={data.image.url}
          layout="fill"
        /> */}
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
  const client = initializeApollo();

  const { data } = await client.query<IQuery, IVars>({
    query: EmployeesQuery,
    variables: {},
  });
  return {
    props: { data },
  };
};

export default TeamPage;
