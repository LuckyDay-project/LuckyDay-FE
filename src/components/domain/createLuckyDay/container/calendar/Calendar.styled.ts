import styled from "@emotion/styled";
import { Theme, css } from "@emotion/react";

export const Calendar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const DayWeekWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 295px;
  z-index: 2;
`;

export const DayWeekBox = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    position: absolute;
    top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `}
`;

export const button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 0;
  border-radius: 50%; //TODO: icon으로 변경 예정 -> 임의로 설정
  background-color: #fff;

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

export const PrevArrowButton = styled.button`
  ${button};
  left: -30px;
  rotate: 270deg;
`;

export const NextArrowButton = styled.button`
  ${button};
  right: -30px;
  rotate: 90deg;
`;

export const Month = styled.h3`
  text-align: center;
`;

export const CalendarBox = styled.div`
  position: relative;
  width: 390px;
  bottom: 40px;
  left: 0;
`;

export const CalendarHeader = styled.div`
  position: absolute;
  top: 40px;
  left: 32px;
  display: grid;
  grid-template-columns: repeat(7, 35px);
  gap: 7px 13px;
  z-index: 1;
`;

export const DayWeek = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body1};
  `}
`;

export const DayButton = styled.button<{
  isSelected: boolean;
  isExceptDate: boolean;
  isChecked: boolean;
}>`
  ${({ isSelected, isExceptDate, isChecked, theme }) => css`
    height: 35px;
    border-radius: 50%;
    border: 0;
    background-color: ${isChecked
      ? "transparent"
      : isExceptDate
      ? theme.colors.lightBeige
      : isSelected && theme.colors.lightOrange};
  `}
`;

export const svgFrame = (theme: Theme) => css`
  width: 100%;
  svg {
    width: 100%;
    height: fit-content;

    path {
      fill: ${theme.colors.beige};
    }
  }
`;

export const largeIcon = (theme: Theme) => css`
  ${svgFrame(theme)}
`;
