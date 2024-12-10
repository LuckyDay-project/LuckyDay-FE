import React, { useState } from "react";
import type { UseFormSetValue, UseFormWatch } from "react-hook-form";

import { activities, CheckIcon } from "assets";
import type {
  Activities,
  ActivitiesServerModel,
  CreateLuckyDayForm,
} from "types";
import { ActivityToggle } from "./container";
import * as S from "./SelectActivity.styled";

interface SelectActivityProps {
  isThirdSubStep?: boolean;
  isFourthSubStep?: boolean;
  isFifthSubStep?: boolean;
  isSixthSubStep?: boolean;
  data?: ActivitiesServerModel;
  setValue: UseFormSetValue<CreateLuckyDayForm>;
  watch: UseFormWatch<CreateLuckyDayForm>;
  getSelectItems: (value: number[]) => void;
}

function SelectActivity({
  isThirdSubStep,
  isFourthSubStep,
  isFifthSubStep,
  isSixthSubStep,
  data,
  getSelectItems,
  watch,
  setValue,
}: SelectActivityProps) {
  const [toggle, setToggle] = useState<string | null>(null);

  const actNos = data?.resData.flatMap((activity) =>
    activity.actList.map((item) => item.actNo)
  );

  const currentActsUnChecked = watch("acts")?.filter(({ checked }) => !checked);

  const handleToggle = (toggleLabel: string | null): void =>
    setToggle(toggleLabel);

  const changeIndex = (
    arr: Activities[] | undefined,
    idx1: number,
    idx2: number
  ) => {
    if (!arr) return [];

    const newArr = [...arr];
    [newArr[idx1], newArr[idx2]] = [newArr[idx2], newArr[idx1]];

    return newArr;
  };

  const arr = changeIndex(data?.resData, 2, 3);

  const handleCheckAllBoxes = () => {
    const acts = arr
      .map((activity) => {
        return {
          category: activity.category ?? "",
          actList:
            activity.actList.length > 0 &&
            watch("acts").flatMap((item) => item.actList).length === 0
              ? activity.actList.map((act) => act.actNo)
              : [],
          checked: currentActsUnChecked?.length === 5 ? true : false,
        };
      })
      .filter(({ category }) => category !== "직접 입력");

    if (!acts) return;

    setValue("acts", acts.reverse());
  };

  return (
    <>
      <S.HeadLineWrapper>
        <S.HeadLine>
          나에게 랜덤 배정될
          <br />
          럭키 데이 활동을 모두 골라 보세요.
        </S.HeadLine>
        <S.Button
          isNotChecked={currentActsUnChecked?.length === 5}
          onClick={handleCheckAllBoxes}
        >
          <CheckIcon css={S.icon} />
          {currentActsUnChecked?.length === 5 ? (
            <span>모두 선택</span>
          ) : (
            <span>전체 해제</span>
          )}
        </S.Button>
      </S.HeadLineWrapper>
      <S.Activities>
        {activities.map((activity, i) => {
          if (!actNos) return null;

          return (
            <ActivityToggle
              key={activity.label}
              activity={activity}
              getSelectItems={getSelectItems}
              setValue={setValue}
              watch={watch}
              data={data?.resData?.find(
                (item) => item.category === activity.label
              )}
              checked={
                (watch(`acts.${i}.checked`) ||
                  (isFourthSubStep && i === 1) ||
                  (isFifthSubStep && i === 1) ||
                  (isSixthSubStep && i === 2) ||
                  (isSixthSubStep && i === 1)) ??
                false
              }
              index={i}
              toggle={toggle}
              isSixthSubStep={isSixthSubStep}
              isOpen={
                toggle === activity.label ||
                (activity.label === toggle && toggle === "+) 직접 입력") ||
                (((isThirdSubStep && i === 1) ||
                  ((isFifthSubStep || isSixthSubStep) && i === 2)) ??
                  false)
              }
              handleToggle={handleToggle}
            />
          );
        })}
      </S.Activities>
    </>
  );
}

export default SelectActivity;
