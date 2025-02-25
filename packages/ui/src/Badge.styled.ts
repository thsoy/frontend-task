import styled, { css } from "styled-components";
import { IBadge } from "./Badge";
export const BadgeContainer = styled.div<IBadge>`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
  padding: ${({ padding }) => padding ?? 0};
  background: ${({ background }) => background ?? "#000"};
  border-radius: ${({ borderRadius }) => borderRadius ?? "0px"};
`;
