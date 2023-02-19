import React from "react";
import { Link as ReactouRouterLink } from "react-router-dom";

export type LinkProps = {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Link({ href, children }: LinkProps) {
  return <ReactouRouterLink to={href}>{children}</ReactouRouterLink>;
}
