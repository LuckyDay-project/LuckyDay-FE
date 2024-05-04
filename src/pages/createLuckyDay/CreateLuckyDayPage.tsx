import React, { useState } from "react";

import {
  SelectActivity,
  SelectCount,
  SelectPeriod,
  SelectExceptDate,
  ProgressBar,
  ButtonLayout,
} from "components";
import { ArrowIcon } from "assets";
import * as S from "./CreateLuckyDayPage.styled";

function CreateLuckyDayPage() {
  const [currentProgress, setCurrentProgress] = useState(0);

  const changeCurrentProgress = (progress: number) => (): void => {
    const changedProgress = currentProgress + progress;

    if (changedProgress > 3 || changedProgress < 0) return console.log("err");

    setCurrentProgress(changedProgress);
  };

  const changePage = (current: number): React.ReactNode => {
    switch (current) {
      case 0:
        return <SelectActivity />;
      case 1:
        return <SelectPeriod />;
      case 2:
        return <SelectCount />;
      case 3:
        return <SelectExceptDate />;
    }
  };

  return (
    <ButtonLayout
      variant="hasIcon"
      firstLabel="prev"
      secondLabel="next"
      icon={<ArrowIcon />}
      handleClickFirstButton={changeCurrentProgress(-1)}
      handleClickSecondButton={changeCurrentProgress(+1)}
    >
      <S.CreateLuckyDay>
        <ProgressBar progressState={currentProgress} />
        {changePage(currentProgress)}
      </S.CreateLuckyDay>
    </ButtonLayout>
  );
}

export default CreateLuckyDayPage;
