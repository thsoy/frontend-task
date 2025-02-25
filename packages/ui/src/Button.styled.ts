import styled from "styled-components";

export const ButtonContainer = styled.button<{
  borderRadius?: string;
  background?: string;
  borderColor?: string;
  color?: string;
  width?: string;
  padding?: string;
}>`
  display: flex;
  width: ${({ width }) => width ?? "100%"};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding ?? "10px"};
  border-radius: ${({ borderRadius }) => borderRadius ?? "0px"};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "0"};
  cursor: pointer;
  background: ${({ background }) => background ?? "#000"};
  font-weight: 700;
  :disabled {
    background: #f4f4f4;
    color: ##c4c4c4;
  }
`;
