import dayjs from "dayjs";

import { SvgFrame } from "components";
import { LUCKYDAY_PERIODS, LongBoxIcon } from "assets";
import * as S from "./SelectPeriod.styled";

interface SelectPeriodProps {
  isLastSubStep?: boolean;
}

function SelectPeriod({ isLastSubStep = false }: SelectPeriodProps) {
  return (
    <>
      <S.HeadLine>
        <span>럭키 데이가 배정될 기간을 선택하세요.</span>
        <S.SubHeadLine>
          {dayjs().format("YYYY년 MM월 DD일")} 오늘로부터...
        </S.SubHeadLine>
      </S.HeadLine>
      <S.PeriodWrapper>
        {LUCKYDAY_PERIODS.map((period) => (
          <S.ActivityButton
            className={period.period === 30 ? "period" : ""}
            key={period.label}
          >
            <SvgFrame
              css={S.icon(isLastSubStep && period.period === 30)}
              icon={<LongBoxIcon />}
            />
            <S.ActivityInfo>
              <S.ActivityTitle>{period.label}</S.ActivityTitle>
            </S.ActivityInfo>
          </S.ActivityButton>
        ))}
      </S.PeriodWrapper>
      {
        <S.SelectInfo>
          최대 <strong>4개</strong>의 럭키 데이를 선택할 수 있어요.
        </S.SelectInfo>
      }
    </>
  );
}

export default SelectPeriod;
