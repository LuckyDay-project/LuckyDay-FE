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
  bottom: 7%;
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

export const DayButton = styled.button<{
  isSelected: boolean;
  isExceptDate: boolean;
  isChecked: boolean;
}>`
  ${({ isSelected, isExceptDate, isChecked, theme }) => css`
    ${theme.fonts.body1};
    height: 35px;
    border-radius: 50%;
    border: 0;
    background-color: ${isChecked
      ? "transparent"
      : isExceptDate
      ? theme.colors.lightBeige
      : isSelected && theme.colors.lightOrange};

    @media (max-width: 405px) {
      height: 27px;
    }
  `}
`;
