import React, { useState } from "react";
import dayjs from "dayjs";

import * as S from "./SelectExceptDate.styled";
import { Calendar } from "../container";

interface SelectExceptDateProps {
  isDatesFirstSubStep?: boolean;
  isDatesLastSubStep?: boolean;
}

function SelectExceptDate({
  isDatesFirstSubStep,
  isDatesLastSubStep,
}: SelectExceptDateProps) {
  const [expDates] = useState<string[]>([]);

  //tutorial 용 변수
  const isThisMonth = isDatesFirstSubStep || isDatesLastSubStep;

  const EndOfDate = dayjs(dayjs())
    .add(30)
    .subtract(+1, "day")
    .format("YYYY년 MM월 DD일");

  return (
    <>
      <S.HeadLine>럭키 데이 배정을 원하지 않는 날짜를 선택하세요.</S.HeadLine>
      <S.SubHeadLine>
        {dayjs().format("YYYY년 MM월 DD일")} ~ {EndOfDate}
      </S.SubHeadLine>
      <Calendar
        isThisMonth={isThisMonth}
        isDatesLastSubStep={isDatesLastSubStep}
        dates="30"
        expDates={expDates}
      />
      <S.SelectInfo>
        최대 <strong> 4개</strong>의 날짜를 제외할 수 있어요.
      </S.SelectInfo>
    </>
  );
}

export default SelectExceptDate;
