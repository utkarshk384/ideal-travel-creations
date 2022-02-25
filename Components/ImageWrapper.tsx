import React from "react";
import NextImage, { ImageProps } from "next/image";

type IProps<T = {}> = T & ImageProps;

const Image: React.FC<
  IProps<{ overideImage?: boolean; containerClass?: string }>
> = ({ src, containerClass, overideImage, ...rest }) => {
  if (process.env.NODE_ENV === "production" || overideImage)
    return (
      <div className={containerClass}>
        <NextImage src={src} {...rest} />
      </div>
    );

  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  const { height, width, ...others } = { ...rest };

  return (
    <div>
      <NextImage {...others} layout="fill" src="/images/Happiness-Travel.jpg" />
    </div>
  );
};

export default Image;
