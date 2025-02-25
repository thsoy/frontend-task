import styled, { css } from "styled-components";

export const ContentAccordion = styled.div<{
  initIsExpanded: boolean;
  height: string;
}>`
  background: #fff;

  position: absolute;
  width: 100%;
  z-index: 1;
  border-radius: 4px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.25);
  &[aria-expanded="true"] {
    height: ${({ height }) => height};
  }
  ${({ initIsExpanded }) =>
    !initIsExpanded &&
    css`
      &[aria-expanded="true"] {
        transition: height 400ms cubic-bezier(0, 0.5, 0.15, 1);
      }
      &[aria-expanded="false"] {
        transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
      }
    `}
`;

export const ArrowIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
  width: inherit;
`;

export const ButtonAccordion = styled.button`
  position: relative;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  background: #ffffff;
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;

  &[aria-expanded="true"] {
    ${ArrowIcon} {
      transform: rotate(180deg);
      transition: transform 300ms cubic-bezier(0, 0.9, 0, 1);
    }
    ${TitleWrap} p {
      font-weight: 700;
    }
  }
  &[aria-expanded="false"] {
    ${ArrowIcon} {
      transform: rotate(0deg);
      transition: transform 300ms cubic-bezier(0, 0.9, 0, 1);
    }
  }
`;

export const AccordionContainer = styled.section`
  background-color: #fff;
  margin: 0;
  padding: 0;
  width: inherit;
`;

export const ContentsContainer = styled.div`
  padding: 10px 0 0 10px;
`;
