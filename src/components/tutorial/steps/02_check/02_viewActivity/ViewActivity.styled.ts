import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import * as S from "pages/viewLuckyActivity/ViewLuckyActivityPage.styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 83vh;
  width: 100%;

  @media (min-height: 945px) {
    min-height: 90vh;
  }
`;

export const LuckydayDetailInfo = styled(S.LuckydayDetailInfo)`
  height: auto;
  min-height: 350px;

  p:last-of-type {
    white-space: pre-line;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  width: 100%;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    width: 100px;
    height: 42px;

    & > span {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      ${theme.fonts.headline2};
    }

    svg {
      width: 100px;
      height: auto;
    }
  `}
`;

export const BackButton = styled.button`
  position: absolute;
  bottom: 5%;
  left: 8%;
`;

export const svgFrameBack = (theme: Theme) => css`
  width: 40px;
  height: 40px;

  path {
    fill: ${theme.colors.beige};
  }
`;

export const arrowIcon = css`
  position: absolute;
  top: 8px;
  left: 8px;
  rotate: 270deg;
  width: 24px;
  height: 24px;
`;

export const Img = styled(S.Img)``;
export const LuckydayInfo = styled(S.LuckydayInfo)``;
export const svgFrame = S.svgFrame;
export const HighlightButtonWrapper = styled(ButtonContainer)``;
