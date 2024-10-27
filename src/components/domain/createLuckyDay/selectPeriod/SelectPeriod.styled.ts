import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const HeadLine = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    display: flex;
    flex-direction: column;
    row-gap: 7px;
    margin: 36px 0 29px;
  `}
`;

export const SubHeadLine = styled.span`
  ${({ theme }) => css`
    ${theme.fonts.headline2};
  `}
`;

export const PeriodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
`;

export const ActivityButton = styled.button`
  position: relative;
  width: 315px;
`;

export const icon = (isSelected: boolean) => (theme: Theme) =>
  css`
    width: 100%;

    path {
      fill: ${isSelected ? theme.colors.lightOrange : theme.colors.beige};
    }
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

export const arrowIcon = css`
  width: 40px;
  height: 40px;
  rotate: 180deg;
`;

export const SelectInfo = styled.p`
  ${({ theme }) => css`
    ${theme.fonts.body1}
    margin-top: 50px;
    text-align: center;

    & > strong {
      color: ${theme.colors.orange};
    }
  `}
`;
