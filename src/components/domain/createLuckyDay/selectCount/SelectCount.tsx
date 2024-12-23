import dayjs from "dayjs";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import { SvgFrame } from "components";
import { useToast } from "hooks";
import { CircleBoxIcon, LUCKYDAY_PERIODS, MinusIcon, PlusIcon } from "assets";
import type { CreateLuckyDayForm } from "types";
import * as S from "./SelectCount.styled";

interface SelectCountProps {
  selectableDate?: number;
  isCountFirstSubStep?: boolean;
  isCountLastSubStep?: boolean;
  watch: UseFormWatch<CreateLuckyDayForm>;
  setValue: UseFormSetValue<CreateLuckyDayForm>;
}

function SelectCount({
  selectableDate = 0,
  isCountFirstSubStep,
  isCountLastSubStep,
  watch,
  setValue,
}: SelectCountProps) {
  const { addToast } = useToast();

  const selectedPeriod = LUCKYDAY_PERIODS.find(
    (item) => item.period === watch("period")
  );

  const handleSelectCounts = (count: number) => (): void => {
    const currentCount = watch("cnt") + count;

    if (currentCount <= 0)
      return addToast({ content: "최소 1개의 럭키 데이를 선택해 주세요." });
    if (currentCount > (selectedPeriod?.cnt ?? 0))
      return addToast({
        content: `최대 ${
          selectedPeriod?.cnt ?? 0
        }개의 럭키 데이를 선택할 수 있어요.`,
      });

    setValue("cnt", watch("cnt") + count);
  };

  return (
    <>
      <S.HeadLine>
        <span>배정을 원하는 럭키 데이 개수를 선택하세요.</span>
        <S.SubHeadLine>
          {dayjs().format("YYYY년 MM월 DD일")} 오늘로부터{" "}
          <strong>{selectableDate ?? selectedPeriod?.period ?? 0}일</strong>
          동안
        </S.SubHeadLine>
      </S.HeadLine>
      <S.SelectDatesWrapper
        className={isCountFirstSubStep ? "selectCount" : ""}
      >
        <S.SelectDatesButton onClick={handleSelectCounts(-1)}>
          <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
          <MinusIcon css={S.icon} />
        </S.SelectDatesButton>
        <S.SelectDatesBox>
          {isCountLastSubStep ? 2 : watch("cnt")}
        </S.SelectDatesBox>
        <S.SelectDatesButton onClick={handleSelectCounts(+1)}>
          <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
          <PlusIcon css={S.icon} />
        </S.SelectDatesButton>
      </S.SelectDatesWrapper>
      {!!selectedPeriod && (
        <S.SelectInfo>
          최대 <strong>{selectedPeriod?.cnt ?? 0}개</strong>의 럭키 데이를
          선택할 수 있어요.
        </S.SelectInfo>
      )}
    </>
  );
}

export default SelectCount;
