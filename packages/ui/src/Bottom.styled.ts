import styled from "styled-components";
export interface IBottom {
  background?: string;
  left?: string;
  right?: string;
  bottom?: string;
  boxShadow?: string;
  padding?: string;
  maxWidth?: string;
}

export const BottomContaner = styled.div<IBottom>`
  position: fixed;
  width: 100%;
  background: ${(props) => props.background && props.background};
  bottom: ${(props) => props.bottom && props.bottom};
  left: ${(props) => props.left && props.left};
  right: ${(props) => props.right && props.right};
  padding: ${(props) => props.padding ?? "16px 20px"};
  ${(props) => props.boxShadow && `box-shadow: ${props.boxShadow}`};
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth}; margin: auto`};
`;
