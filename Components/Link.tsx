import React from "react";
import NextLink, { LinkProps } from "next/link";

type Props = LinkProps & {
  className?: string;
};

const Link: React.FC<Props> = (props) => {
  const { className, ...rest } = props;

  const href: string = (props.as ? props.as : props.href) as string;

  return (
    <NextLink {...rest} passHref>
      <a className={className} href={href}>
        {props.children}
      </a>
    </NextLink>
  );
};

export default Link;
