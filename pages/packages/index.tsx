///<----Global Imports--->>
import React from "react";
import { GetServerSideProps } from "next";

///<----Local Imports--->>
import { getallPaths } from "@/graphql/../graphql_helperFunc";

const Random = () => {
  return <div></div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const paths = await getallPaths().catch((err) => {});

  if (!paths) return { notFound: true };

  const randomNumber = Math.ceil(Math.random() * paths.packageTypes.length);

  return {
    redirect: {
      destination: `/packages/${paths.packageTypes[randomNumber]}`,
      permanent: true,
    },
  };
};

export default Random;
