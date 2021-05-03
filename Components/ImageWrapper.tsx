import React from "react";
import NextImage, { ImageProps } from "next/image";

type IProps<T = {}> = T & ImageProps;

const Image: React.FC<IProps<{ overideImage?: boolean }>> = ({
  src,
  overideImage,
  ...rest
}) => {
  if (process.env.NODE_ENV === "production")
    return <NextImage src={src} {...rest} />;

  return (
    <NextImage
      src={overideImage ? src : "/images/travel-packages/Happiness-Travel.jpg"}
      {...rest}
    />
  );
};

export default Image;
