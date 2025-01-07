import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import { Calendar } from "components";
import { LUCKYDAY_PERIODS } from "assets";
import type { CreateLuckyDayForm } from "types";
import * as S from "./SelectExceptDate.styled";

interface SelectExceptDateProps {
  isDatesFirstSubStep?: boolean;
  isDatesLastSubStep?: boolean;
  watch: UseFormWatch<CreateLuckyDayForm>;
  setValue: UseFormSetValue<CreateLuckyDayForm>;
}

function SelectExceptDate({
  isDatesFirstSubStep,
  isDatesLastSubStep,
  watch,
  setValue,
}: SelectExceptDateProps) {
  const [expDates, setExpDates] = useState<string[]>([]);

  //tutorial 용 변수
  const isThisMonth = isDatesFirstSubStep || isDatesLastSubStep;

  const selectedPeriod = `${watch("period") || "0"}`;
  const availableExpDates = LUCKYDAY_PERIODS.find(
    (item) => item.period === +selectedPeriod
  )?.expDate;

  const EndOfDate = dayjs(dayjs())
    .add(isThisMonth ? 30 : +selectedPeriod, "day")
    .subtract(+1, "day")
    .format("YYYY년 MM월 DD일");

  const sortDates = expDates.sort((a, b) => {
    const dateA = dayjs(a.replace(/년 |월 /g, "-").replace(/일/, ""));
    const dateB = dayjs(b.replace(/년 |월 /g, "-").replace(/일/, ""));

    return dateA.isBefore(dateB) ? -1 : dateA.isAfter(dateB) ? 1 : 0;
  });

  const makeExpDates = (dates: string) => {
    if (expDates.includes(dates)) {
      setExpDates((prevExpDates) =>
        prevExpDates.filter((date) => date !== dates)
      );
    } else {
      setExpDates([...expDates, dates]);
    }
  };

  useEffect(() => {
    setValue("expDTList", sortDates);
  }, [expDates]);

  return (
    <>
      <S.HeadLine>럭키 데이 배정을 원하지 않는 날짜를 선택하세요.</S.HeadLine>
      <S.SubHeadLine>
        {dayjs().format("YYYY년 MM월 DD일")} ~ {EndOfDate}
      </S.SubHeadLine>
      <Calendar
        isThisMonth={isThisMonth}
        isDatesLastSubStep={isDatesLastSubStep}
        dates={isThisMonth ? "30" : selectedPeriod}
        expDates={expDates}
        makeExpDates={makeExpDates}
      />
      <S.SelectInfo>
        최대 <strong>{isThisMonth ? 4 : availableExpDates}개</strong>의 날짜를
        제외할 수 있어요.
      </S.SelectInfo>
    </>
  );
}

export default SelectExceptDate;
