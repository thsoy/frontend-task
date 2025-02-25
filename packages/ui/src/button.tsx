"use client";
import { ComponentPropsWithoutRef } from "react";
import { ButtonContainer } from "./Button.styled";
import { Typography } from "./Typography";

export interface IButton {
  buttonText: string;
  disabled?: boolean;
  onClick?: () => void;
  borderRadius?: string;
  background?: string;
  borderColor?: string;
  color?: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
}
export function Button({
  buttonText,
  disabled,
  onClick,
  borderRadius,
  background = "#000",
  borderColor,
  color = "#fff",
  width,
  fontSize,
  fontWeight,
  padding,
}: IButton & ComponentPropsWithoutRef<"button">) {
  return (
    <ButtonContainer
      onClick={onClick}
      disabled={disabled}
      borderRadius={borderRadius}
      background={background}
      borderColor={borderColor}
      color={color}
      width={width}
      padding={padding}
    >
      <Typography
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={color}
        text={buttonText}
      />
    </ButtonContainer>
  );
}
