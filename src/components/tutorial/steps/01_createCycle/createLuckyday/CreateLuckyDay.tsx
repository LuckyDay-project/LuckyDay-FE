import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  SelectActivity,
  SelectCount,
  SelectPeriod,
  SelectExceptDate,
  ProgressBar,
  ButtonLayout,
  CreateLuckyDayModal,
} from "components";
import { ArrowIcon } from "assets";
import { useModal, useToast } from "hooks";
import type { ActivitiesServerModel, CreateLuckyDayForm } from "types";
import * as S from "./CreateLuckyDay.styled";

interface CreateLuckyDayProps {
  isThirdSubStep?: boolean;
  isFourthSubStep?: boolean;
  isFifthSubStep?: boolean;
  isSixthSubStep?: boolean;
  isSeventhSubStep?: boolean;
  isDateLastSubStep?: boolean;
  isCountFirstSubStep?: boolean;
  isCountLastSubStep?: boolean;
  isDatesFirstSubStep?: boolean;
  isDatesLastSubStep?: boolean;
  nextProgress?: number;
  selectableDate?: number;
  data?: ActivitiesServerModel;
}

function CreateLuckyDay({
  isThirdSubStep,
  isFourthSubStep,
  isFifthSubStep,
  isSixthSubStep,
  isSeventhSubStep,
  isDateLastSubStep,
  isCountFirstSubStep,
  isCountLastSubStep,
  isDatesFirstSubStep,
  isDatesLastSubStep,
  nextProgress,
  selectableDate,
  data,
}: CreateLuckyDayProps) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [, setSelectedItems] = useState<number[]>([]);

  const { setValue, watch, handleSubmit } = useForm<CreateLuckyDayForm>({
    defaultValues: {
      customActList: [],
      period: 0,
      cnt: 1,
      expDTList: [],
      acts: [],
    },
    mode: "onTouched",
  });

  const { handleOpenModal } = useModal();
  const { addToast } = useToast();

  const changeCurrentProgress = (progress: number) => (): void => {
    const changedProgress = currentProgress + progress;

    if (changedProgress < 0) return addToast({ content: "첫 페이지 입니다." });

    if (changedProgress > 3)
      return addToast({ content: "마지막 페이지 입니다." });

    setCurrentProgress(changedProgress);
  };

  const getSelectItems = (value: number[]): void => {
    setSelectedItems(value);
  };

  const changePage = (current: number): React.ReactNode => {
    switch (current) {
      case 0:
        return (
          <SelectActivity
            data={data}
            getSelectItems={getSelectItems}
            setValue={setValue}
            watch={watch}
            isThirdSubStep={isThirdSubStep}
            isFourthSubStep={isFourthSubStep}
            isFifthSubStep={isFifthSubStep}
            isSixthSubStep={isSixthSubStep}
            isSeventhSubStep={isSeventhSubStep}
          />
        );
      case 1:
        return (
          <SelectPeriod
            isLastSubStep={isDateLastSubStep ?? false}
            setValue={setValue}
            watch={watch}
          />
        );
      case 2:
        return (
          <SelectCount
            selectableDate={selectableDate ?? 0}
            isCountFirstSubStep={isCountFirstSubStep}
            isCountLastSubStep={isCountLastSubStep}
            setValue={setValue}
            watch={watch}
          />
        );
      case 3:
        return (
          <SelectExceptDate
            isDatesFirstSubStep={isDatesFirstSubStep}
            isDatesLastSubStep={isDatesLastSubStep}
            setValue={setValue}
            watch={watch}
          />
        );
    }
  };

  const handleClickNextButton = () => {
    const emptyActList = watch("acts")
      .filter(({ actList }) => !!actList)
      .flatMap((item) => item.actList);

    if (
      currentProgress === 0 &&
      !emptyActList?.length &&
      !watch("customActList")?.length
    ) {
      return addToast({ content: "최소 1개의 카테고리를 선택해 주세요." });
    }

    if (currentProgress === 1 && watch("period") === 0) {
      return addToast({ content: "최소 1개의 기간을 선택해 주세요." });
    }

    if (currentProgress !== 3) return changeCurrentProgress(+1)();

    handleOpenModal(
      <CreateLuckyDayModal watch={watch} handleSubmit={handleSubmit} />
    );
  };

  useEffect(() => {
    if (!data) return;

    setValue(
      "acts",
      data.resData
        .map((item) => ({
          category: item.category,
          actList: [],
          checked: false,
        }))
        .filter(({ category }) => category !== "직접 입력")
    );
  }, [data]);

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
