import styled from "styled-components";

export const IconContainer = styled.div<{
  width?: number;
  height?: number;
  color?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: transparent;
  ${({ width }) => width && `width: ${width}px;`}
  ${({ height }) => height && `height: ${height}px;`}

	& > img {
    vertical-align: top;
    ${({ width }) => width && `width: ${width}px;`}
    ${({ height }) => height && `height: ${height}px;`}
		${({ color }) => color && `fill: ${color};`}
  }
`;
