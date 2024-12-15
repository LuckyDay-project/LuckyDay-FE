import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import * as S from "pages/luckyBoard/luckyBoardBefore/LuckyBoardBeforePage.styled";

export const Container = styled(S.Container)``;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: calc(var(--vh, 1vh) * 100 - 80px);
  min-height: calc(100% - 80px);
  padding: 3% 5% 6% 5%;
`;

export const ButtonBox = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.headline2};
    position: absolute;
    top: 8px;
    left: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 6px;
  `}
`;

export const Button = styled.button`
  position: absolute;
  bottom: 6%;
  right: 5%;
  width: 90px;
`;

export const beigeIcon = (theme: Theme) => css`
  path {
    fill: ${theme.colors.beige};
  }
`;

export const buttonArrowIcon = css`
  width: 24px;
  height: 24px;
  rotate: 90deg;
`;

export const SelectDatesWrapper = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 30px;
  width: 100%;
  margin: 0 0 200px;
  //TODO: 간격 맞추기 위해 margin 추가 -> layout 확정 후 수정 예정

  @media (max-width: 380px) {
    margin: 80px 0 110px;
  }
`;

export const SelectDatesBox = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 40px;
    padding-top: 2%;
    border-radius: 20px;
    background-color: ${theme.colors.beige};
  `}
`;

export const SelectDatesButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const svgFrame = (theme: Theme) => css`
  width: 100%;

  svg {
    width: 100%;

    path {
      fill: ${theme.colors.lightOrange};
    }
  }
`;

export const icon = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
`;
