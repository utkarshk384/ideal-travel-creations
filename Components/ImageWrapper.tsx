import React from "react";
import NextImage, { ImageProps } from "next/image";

type IProps<T = {}> = T & ImageProps;

const Image: React.FC<IProps<{ overideImage?: boolean }>> = ({
  src,
  overideImage,
  ...rest
}) => {
  if (process.env.NODE_ENV === "production" || overideImage)
    return <NextImage src={src} {...rest} />;

  const { height, width, layout, ...others } = { ...rest };

  return (
    <NextImage layout="fill" {...others} src="/images/Happiness-Travel.jpg" />
  );
};

export default Image;
