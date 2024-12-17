import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import * as S from "pages/luckyBoard/luckyBoardBefore/LuckyBoardBeforePage.styled";

export const Container = styled(S.Container)``;

const button = (theme: Theme) => css`
  position: relative;
  width: 100px;

  & > span {
    ${theme.fonts.headline2};
    position: absolute;
    width: 100%;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const BaseButton = styled.button`
  ${({ theme }) => css`
    ${button(theme)};

    & > span {
      color: ${theme.colors.white};
    }
  `}
`;

export const purpleIcon = (theme: Theme) => css`
  width: 100%;

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: ${theme.colors.purple};
    }
  }
`;

export const modal = (theme: Theme) =>
  css`
    div:not(:first-of-type) {
      ${theme.fonts.body1};
      align-items: center;

      p {
        width: 100%;
      }
      strong {
        color: ${theme.colors.orange};
      }
    }

    & > svg {
      cursor: disabled;
    }
  `;
