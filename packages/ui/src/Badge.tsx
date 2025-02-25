import React from "react";
import { BadgeContainer } from "./Badge.styled";

export interface IBadge {
  padding?: string;
  background?: string;
  borderRadius?: string;
  height?: string;
}
export function Badge(props: IBadge & { text: React.ReactNode }) {
  const { text, ...rest } = props;
  return <BadgeContainer {...rest}>{text}</BadgeContainer>;
}
