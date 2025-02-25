import styled from "styled-components";

export const InnerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 8px;
  box-sizing: border-box;
  background-color: inherit;
  z-index: 300;
  transition: all 0.3s ease;
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${InnerHeader} {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
  }
`;

export const HeaderTitleContainer = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 136%;
`;

export const HeaderLeftContainer = styled.div`
  position: absolute;
  left: 8px;
  top: 8px;
  bottom: 8px;
  z-index: 20;
  > button {
    vertical-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 44px;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
`;
