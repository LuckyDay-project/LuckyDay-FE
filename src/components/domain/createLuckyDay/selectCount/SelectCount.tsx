import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

import { useToast } from "hooks";
import { LUCKYDAY_PERIODS, MinusIcon, PlusIcon } from "assets";
import type { CreateLuckyDayForm } from "types";
import { SelectDatesButton } from "./containers";
import * as S from "./SelectCount.styled";

function SelectCount() {
  const { watch, control } = useFormContext<CreateLuckyDayForm>();

  const { addToast } = useToast();

  const selectedPeriod = LUCKYDAY_PERIODS.find(
    (item) => item.period === watch("period")
  );

  return (
    <>
      <S.HeadLine>
        <span>배정을 원하는 럭키 데이 개수를 선택하세요.</span>
        <S.SubHeadLine>
          {dayjs().format("YYYY년 MM월 DD일")} 오늘로부터{" "}
          <strong>{selectedPeriod?.period}일</strong>
          동안
        </S.SubHeadLine>
      </S.HeadLine>
      <S.SelectDatesWrapper>
        <Controller
          control={control}
          name="cnt"
          render={({ field: { onChange, value } }) => {
            const handleChange = (count: number) => (): void => {
              const currentCount = value + count;
              if (currentCount <= 0)
                return addToast({
                  content: "최소 1개의 럭키 데이를 선택해 주세요.",
                });

              onChange(value + count);
            };

            return (
              <SelectDatesButton
                Icon={<MinusIcon css={S.icon} />}
                handleSelectCounts={handleChange(-1)}
              />
            );
          }}
        />
        <S.SelectDatesBox>{watch("cnt")}</S.SelectDatesBox>
        <Controller
          control={control}
          name="cnt"
          render={({ field: { onChange, value } }) => {
            const handleChange = (count: number) => () => {
              const currentCount = value + count;
              const selectedPeriodCounts = selectedPeriod?.cnt || 0;

              if (currentCount > selectedPeriodCounts)
                return addToast({
                  content: `최대 ${selectedPeriodCounts}개의 럭키 데이를 선택할 수 있어요.`,
                });

              onChange(value + count);
            };

            return (
              <SelectDatesButton
                Icon={<PlusIcon css={S.icon} />}
                handleSelectCounts={handleChange(+1)}
              />
            );
          }}
        />
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
