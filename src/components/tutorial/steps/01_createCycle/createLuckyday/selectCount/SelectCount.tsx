import dayjs from "dayjs";

import { SvgFrame } from "components";
import { CircleBoxIcon, MinusIcon, PlusIcon } from "assets";
import * as S from "./SelectCount.styled";

interface SelectCountProps {
  isCountFirstSubStep?: boolean;
}

function SelectCount({ isCountFirstSubStep }: SelectCountProps) {
  return (
    <>
      <S.HeadLine>
        <span>배정을 원하는 럭키 데이 개수를 선택하세요.</span>
        <S.SubHeadLine>
          {dayjs().format("YYYY년 MM월 DD일")} 오늘로부터 <strong>30일</strong>
          동안
        </S.SubHeadLine>
      </S.HeadLine>
      <S.SelectDatesWrapper
        className={isCountFirstSubStep ? "selectCount" : ""}
      >
        <S.SelectDatesButton>
          <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
          <MinusIcon css={S.icon} />
        </S.SelectDatesButton>
        <S.SelectDatesBox>2</S.SelectDatesBox>
        <S.SelectDatesButton>
          <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
          <PlusIcon css={S.icon} />
        </S.SelectDatesButton>
      </S.SelectDatesWrapper>

      <S.SelectInfo>
        최대 <strong>4개</strong>의 럭키 데이를 선택할 수 있어요.
      </S.SelectInfo>
    </>
  );
}

export default SelectCount;
