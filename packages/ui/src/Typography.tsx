"use client";
import { ITypography, TypographyContainer } from "./Typohgraphy.styled";

export function Typography(props: ITypography & { text: string | number }) {
  const { text, ...rest } = props;
  return <TypographyContainer {...rest}>{text}</TypographyContainer>;
}
