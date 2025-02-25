import styled, { css } from "styled-components";

export const CheckIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.div``;
export const CheckboxContainer = styled.div<{
  checked: boolean;
  disabled?: boolean;
  disableTextActive?: boolean;
}>`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;

  ${CheckIcon} {
    width: 16px;
    height: 16px;
    ${({ disabled }) =>
      disabled &&
      css`
        opacity: 0.3;
      `};
  }

  ${Label} {
    ${({ disabled, disableTextActive }) =>
      disabled &&
      !disableTextActive &&
      css`
        opacity: 0.3;
      `};
  }
`;

export const CheckboxInput = styled.input`
  position: absolute;
  overflow: hidden;
  clip: rect(0px, 0px, 0px, 0px);
  width: 1px;
  height: 1px;
  margin: -1px;
  left: 0px;
  top: 0px;
`;
