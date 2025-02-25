import styled from "styled-components";
export interface ITypography {
  fontSize?: string;
  lineHeight?: string;
  letterSpacing?: string;
  fontWeight?: string;
  color?: string;
}
export const TypographyContainer = styled.div<ITypography>`
  margin: 0px;
  display: flex;
  justify-conent: center;
  align-items: center;
  color: ${({ color }) => color ?? "#000"};
  font-size: ${({ fontSize }) => fontSize ?? "12px"};
  // line-height: ${({ lineHeight }) => lineHeight ?? "18px"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing ?? "0px"};
  font-weight: ${({ fontWeight }) => fontWeight ?? "400"};
`;
