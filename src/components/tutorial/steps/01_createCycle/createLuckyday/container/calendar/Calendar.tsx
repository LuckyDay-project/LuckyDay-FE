import { SvgFrame } from "components";
import { ArrowIcon, CircleBoxIcon, LargeBoxIcon, LongBoxIcon } from "assets";
import useCalendar from "./hooks/useCalendar";
import * as S from "./Calendar.styled";
import dayjs from "dayjs";

interface CalendarProps {
  isThisMonth?: boolean;
  isDatesLastSubStep?: boolean;
  dates: string;
  expDates: string[];
}

const Calendar = ({
  isThisMonth = false,
  isDatesLastSubStep,
  dates,
  expDates,
}: CalendarProps) => {
  const isSelectable12th = dayjs().date() > 12;

  const {
    currentMonth,
    monthsData,
    disabled,
    emptyDates,
    calendarList,
    handleMoveToPrevMonth,
    handleMoveToNextMonth,
    handleDisabledCheck,
  } = useCalendar(isThisMonth, isSelectable12th, dates, expDates);

  const dayWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

  return (
    <S.Calendar>
      <S.DayWeekWrapper>
        <SvgFrame css={S.beigeIcon} icon={<LongBoxIcon />} />
        <S.DayWeekBox>
          <S.PrevArrowButton onClick={handleMoveToPrevMonth}>
            <SvgFrame css={S.lightbeigeIcon} icon={<CircleBoxIcon />} />
            <ArrowIcon />
          </S.PrevArrowButton>
          <S.Month>{currentMonth.format("M")}월</S.Month>
          <S.NextArrowButton onClick={handleMoveToNextMonth}>
            <SvgFrame css={S.lightbeigeIcon} icon={<CircleBoxIcon />} />
            <ArrowIcon />
          </S.NextArrowButton>
        </S.DayWeekBox>
      </S.DayWeekWrapper>
      <S.CalendarBox>
        <SvgFrame css={S.largeBeigeIcon} icon={<LargeBoxIcon />} />
        <S.CalendarHeader>
          {dayWeek.map((dayWeek, index) => (
            <S.DayWeek key={index}>{dayWeek}</S.DayWeek>
          ))}
          {calendarList.map((date, i) => {
            if (date === null) {
              return <div key={i} />;
            } else {
              const formattedDate = date.format("YYYY-MM-DD");
              const isExceptDate = disabled.includes(formattedDate);

              return (
                <S.DayButton
                  className={
                    isThisMonth && i === 12 + emptyDates.length - 1
                      ? "calendar"
                      : ""
                  }
                  key={i}
                  isSelected={monthsData.includes(formattedDate)}
                  isExceptDate={
                    (formattedDate.split("-")[2] === "12" &&
                      isDatesLastSubStep) ||
                    isExceptDate
                  }
                  isChecked={!monthsData.includes(formattedDate)}
                  onClick={handleDisabledCheck(date)}
                >
                  {date.format("DD")}
                </S.DayButton>
              );
            }
          })}
        </S.CalendarHeader>
      </S.CalendarBox>
    </S.Calendar>
  );
};

export default Calendar;
