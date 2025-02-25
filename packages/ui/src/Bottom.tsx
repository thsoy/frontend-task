"use client";
import React from "react";
import { BottomContaner, IBottom } from "./Bottom.styled";

const Bottom = ({
  children,
  background,
  padding,
  left = "0px",
  right = "0px",
  bottom = "0px",
  boxShadow,
  maxWidth,
}: IBottom & { children: React.ReactNode }) => {
  return (
    <BottomContaner
      background={background}
      padding={padding}
      left={left}
      right={right}
      bottom={bottom}
      boxShadow={boxShadow}
      maxWidth={maxWidth}
    >
      {children}
    </BottomContaner>
  );
};

export { Bottom };
