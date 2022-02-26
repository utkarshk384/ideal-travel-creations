import React, { CSSProperties } from "react";
import NextLink, { LinkProps } from "next/link";

type Props = LinkProps & {
  className?: string;
  style?: CSSProperties;
};

const Link: React.FC<Props> = (props) => {
  const { className, style, ...rest } = props;

  const href: string = (props.as ? props.as : props.href) as string;

  return (
    <NextLink {...rest} passHref>
      <a className={className} style={style} href={href}>
        {props.children}
      </a>
    </NextLink>
  );
};

export default Link;
