import React from "react";
import { FlexBoxContainer, IFlexBox } from "./FlexBox.styled";

export default function FlexBox(
  props: IFlexBox & { children: React.ReactNode }
) {
  const { children, ...rest } = props;
  return <FlexBoxContainer {...rest}>{children}</FlexBoxContainer>;
}
