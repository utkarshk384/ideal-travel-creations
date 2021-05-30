import React from "react";
import NextImage, { ImageProps } from "next/image";

type IProps<T = {}> = T & ImageProps;

const Image: React.FC<IProps<{ overideImage?: boolean }>> = ({
  src,
  overideImage,
  ...rest
}) => {
  const { height, width, layout, ...others } = { ...rest };

  if (process.env.NODE_ENV === "production" || overideImage)
    <NextImage src={src} {...rest} />;

  return (
    <NextImage layout="fill" {...others} src={"/images/Happiness-Travel.jpg"} />
  );
};

export default Image;
