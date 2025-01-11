import React from "react";

import { activities, CheckIcon } from "assets";
import { luckydayActs } from "constants/index";
import { ActivityToggle } from "./container";
import * as S from "./SelectActivity.styled";

interface SelectActivityProps {
  isThirdSubStep?: boolean;
  isFourthSubStep?: boolean;
  isFifthSubStep?: boolean;
  isSixthSubStep?: boolean;
  isSeventhSubStep?: boolean;
  isLastSubStep?: boolean;
}

function SelectActivity({
  isThirdSubStep,
  isFourthSubStep,
  isFifthSubStep,
  isSixthSubStep,
  isSeventhSubStep,
  isLastSubStep,
}: SelectActivityProps) {
  const isAllChecked =
    isFourthSubStep ||
    isFifthSubStep ||
    isSixthSubStep ||
    isSeventhSubStep ||
    isLastSubStep;

  return (
    <>
      <S.HeadLineWrapper>
        <S.HeadLine>
          나에게 랜덤 배정될
          <br />
          럭키 데이 활동을 모두 골라 보세요.
        </S.HeadLine>
        <S.Button isNotChecked={!isAllChecked}>
          <CheckIcon css={S.icon} />
          {!isAllChecked ? <span>모두 선택</span> : <span>전체 해제</span>}
        </S.Button>
      </S.HeadLineWrapper>
      <S.Activities>
        {activities.map((activity, i) => {
          return (
            <ActivityToggle
              key={activity.label}
              activity={activity}
              data={luckydayActs.find(
                (item) => item.category === activity.label
              )}
              checked={
                ((isFourthSubStep && i === 1) ||
                  (isFifthSubStep && i === 1) ||
                  (isSixthSubStep && i === 2) ||
                  (isSixthSubStep && i === 1) ||
                  ((isSeventhSubStep || isLastSubStep) &&
                    (i === 1 || i === 2))) ??
                false
              }
              index={i}
              isFourthSubStep={isFourthSubStep}
              isSixthSubStep={isSixthSubStep}
              isOpen={
                ((isThirdSubStep && i === 1) ||
                  (isFourthSubStep && i === 1) ||
                  ((isFifthSubStep || isSixthSubStep) && i === 2) ||
                  ((isSeventhSubStep || isLastSubStep) && i === 5)) ??
                false
              }
            />
          );
        })}
      </S.Activities>
    </>
  );
}

export default SelectActivity;
