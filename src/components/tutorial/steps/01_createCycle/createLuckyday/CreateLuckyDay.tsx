import React, { useState } from "react";

import { ButtonLayout } from "components";
import { ArrowIcon } from "assets";
import { useToast } from "hooks";
import SelectActivity from "./selectActivity/SelectActivity";
import SelectPeriod from "./selectPeriod/SelectPeriod";
import SelectCount from "./selectCount/SelectCount";
import SelectExceptDate from "./selectExceptDate/SelectExceptDate";
import { ProgressBar } from "./container";
import * as S from "./CreateLuckyDay.styled";

interface CreateLuckyDayProps {
  isThirdSubStep?: boolean;
  isFourthSubStep?: boolean;
  isFifthSubStep?: boolean;
  isSixthSubStep?: boolean;
  isSeventhSubStep?: boolean;
  isDateLastSubStep?: boolean;
  isCountFirstSubStep?: boolean;
  isDatesFirstSubStep?: boolean;
  isDatesLastSubStep?: boolean;
  isConfirmLastSubStep?: boolean;
  isActivityLastSubStep?: boolean;
  nextProgress?: number;
  selectableDate?: number;
}

function CreateLuckyDay({
  isThirdSubStep,
  isFourthSubStep,
  isFifthSubStep,
  isSixthSubStep,
  isSeventhSubStep,
  isDateLastSubStep,
  isCountFirstSubStep,
  isDatesFirstSubStep,
  isDatesLastSubStep,
  isConfirmLastSubStep,
  isActivityLastSubStep,
  nextProgress,
}: CreateLuckyDayProps) {
  const [currentProgress, setCurrentProgress] = useState(0);

  const { addToast } = useToast();

  const changeCurrentProgress = (progress: number) => (): void => {
    const changedProgress = currentProgress + progress;

    if (changedProgress < 0) return addToast({ content: "첫 페이지 입니다." });

    if (changedProgress > 3)
      return addToast({ content: "마지막 페이지 입니다." });

    setCurrentProgress(changedProgress);
  };

  const changePage = (current: number): React.ReactNode => {
    switch (current) {
      case 0:
        return (
          <SelectActivity
            isThirdSubStep={isThirdSubStep}
            isFourthSubStep={isFourthSubStep}
            isFifthSubStep={isFifthSubStep}
            isSixthSubStep={isSixthSubStep}
            isSeventhSubStep={isSeventhSubStep}
            isLastSubStep={isActivityLastSubStep}
          />
        );
      case 1:
        return <SelectPeriod isLastSubStep={isDateLastSubStep ?? false} />;
      case 2:
        return <SelectCount isCountFirstSubStep={isCountFirstSubStep} />;
      // case 3:
      //   return (
      //     <SelectExceptDate
      //       isDatesFirstSubStep={isDatesFirstSubStep}
      //       isDatesLastSubStep={isDatesLastSubStep || isConfirmLastSubStep}
      //          />
      //   );
    }
  };

  const handleClickNextButton = () => {};

  return (
    <ButtonLayout
      variant="hasIcon"
      firstLabel="prev"
      secondLabel="next"
      icon={<ArrowIcon />}
      handleClickFirstButton={changeCurrentProgress(-1)}
      handleClickSecondButton={handleClickNextButton}
    >
      <S.CreateLuckyDay>
        <ProgressBar progressState={nextProgress ?? currentProgress} />
        {changePage(nextProgress ?? currentProgress)}
      </S.CreateLuckyDay>
    </ButtonLayout>
  );
}

export default CreateLuckyDay;
