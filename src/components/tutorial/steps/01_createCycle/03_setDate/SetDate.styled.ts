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

export const ActivityButton = styled.button`
  position: relative;
  width: 315px;
`;

export const ActivityInfo = styled.div`
  position: absolute;
  top: -5px; //NOTE: 피그마 디자인과 상이하게 나옴 확인 필요
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 2%;
`;

export const ActivityTitle = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
  `}
`;
export const icon = (theme: Theme) =>
  css`
    width: 100%;

    path {
      fill: ${theme.colors.beige};
    }
  `;
