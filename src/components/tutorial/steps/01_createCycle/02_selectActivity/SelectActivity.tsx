import { useState } from "react";

import {
  TUTORIAL_STEP_ORDER,
  TUTORIAL_STEPS,
  useTutorial,
  useTutorialStep,
} from "components";
import { activities, ArrowIcon, CheckIcon } from "assets";
import { useGetLuckyDaysActivities } from "services";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./SelectActivity.styled";

export default function SelectActivity() {
  const { data } = useGetLuckyDaysActivities();

  const { handleSubStepClick, currentStep, subStep, nextStep } = useTutorial();

  const [selected, setSelected] = useState<string[]>([]);
  const [allSelected, setAllSelected] = useState<string[]>([]);

  const handleSelected = (item: string) => () => {
    setSelected((prev) => {
      const isSelected = prev.includes(item);
      const updated = isSelected
        ? prev.filter((select) => select !== item)
        : [...prev, item];

      return updated;
    });
  };

  const handleAllSelected = (item: string) => () => {
    setAllSelected((prev) => {
      const isSelected = prev.includes(item);
      const updated = isSelected
        ? prev.filter((select) => select !== item)
        : [...prev, item];

      return updated;
    });

    handleSubStepClick(6);
  };
  console.log(selected, "allSelected");

  const isSecondSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 2;

  const isThirdSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 3;

  const isFourthSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 4;

  const isFifthSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 5;

  const isSixthSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 6;

  const isSeventhSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 7;

  const isLastSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 8;

  useTutorialStep(TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY, {
    position: {
      top: "17%",
    },
    textBoxProps: {
      isClickable:
        subStep !== 2 &&
        // subStep !== 3 &&
        subStep !== 4 &&
        subStep !== 5 &&
        subStep !== 7,
      showNextIcon: subStep === 1 || subStep === 3 || subStep === 6,
      onClick: () => handleSubStepClick(8),
    },
    ...(isSecondSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_02",
        component: (
          <S.ActivitiesRow onClick={() => handleSubStepClick(3)}>
            <S.ActivityButton isOpen={false}>
              <S.Img src={"images/img_empty_longBox.webp"} />
              <S.ActivityBox isOpen={false}>
                <S.ActivityInfo isOpen={false} isChecked>
                  {activities[1].icon}
                  <S.ActivityTitle>{activities[1].label}</S.ActivityTitle>
                  <S.CheckboxWrapper isOpen={false}>
                    <input type="checkbox" id="checkbox" onChange={() => {}} />
                    <label htmlFor="checkbox" />
                  </S.CheckboxWrapper>
                  <ArrowIcon css={S.arrowIcon(false)} />
                </S.ActivityInfo>
              </S.ActivityBox>
            </S.ActivityButton>
          </S.ActivitiesRow>
        ),
      },
    }),
    ...(isThirdSubStep && {
      onClick: () => handleSubStepClick(4),
      highlight: {
        selector: ".tutoral_selectActivity_02",
        component: (
          <S.ActivityButton isOpen>
            <S.Img src={"images/img_empty_mediumBox.webp"} />
            <S.ActivityBox isOpen>
              <S.ActivityInfo isOpen isChecked>
                {activities[1].icon}
                <S.ActivityTitle>{activities[1].label}</S.ActivityTitle>
                <S.CheckboxWrapper isOpen>
                  <input
                    type="checkbox"
                    checked={false}
                    id="checkbox"
                    onChange={() => {}}
                  />
                  <label htmlFor="checkbox" />
                </S.CheckboxWrapper>
                <ArrowIcon css={S.arrowIcon(true)} />
              </S.ActivityInfo>
              <S.Activities>
                {data?.resData[2].actList?.map((item) => {
                  //NOTE: console은 찍히는데 css 동작을 하지 않음 확인 필요
                  const isSelcted = selected.includes(item.keyword);

                  return (
                    <S.Activity
                      key={item.keyword}
                      isSelected={isSelcted}
                      onClick={handleSelected(item.keyword)}
                    >
                      <CheckIcon css={S.icon} />
                      {item.keyword}
                    </S.Activity>
                  );
                })}
              </S.Activities>
            </S.ActivityBox>
          </S.ActivityButton>
        ),
      },
    }),
    ...(isFourthSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_05",
        component: (
          <S.ActivitiesRow onClick={() => handleSubStepClick(5)}>
            <S.ActivityButton isOpen={false}>
              <S.Img src={"images/img_empty_longBox.webp"} />
              <S.ActivityBox isOpen={false}>
                <S.ActivityInfo isOpen={false} isChecked={!!selected.length}>
                  {activities[2].icon}
                  <S.ActivityTitle>{activities[2].label}</S.ActivityTitle>
                  <S.CheckboxWrapper isOpen={false}>
                    <input type="checkbox" id="checkbox" onChange={() => {}} />
                    <label htmlFor="checkbox" />
                  </S.CheckboxWrapper>
                  <ArrowIcon css={S.arrowIcon(false)} />
                </S.ActivityInfo>
              </S.ActivityBox>
            </S.ActivityButton>
          </S.ActivitiesRow>
        ),
      },
    }),
    ...(isFifthSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_05",
        component: (
          <S.ActivityButton isOpen>
            <S.Img src={"images/img_empty_mediumBox.webp"} />
            <S.ActivityBox isOpen>
              <S.ActivityInfo isOpen isChecked>
                {activities[2].icon}
                <S.ActivityTitle>{activities[2].label}</S.ActivityTitle>
                <S.CheckboxWrapper isOpen>
                  <input
                    type="checkbox"
                    checked={allSelected.includes(activities[2].label)}
                    id="checkbox"
                    onChange={handleAllSelected(activities[2].label)}
                  />
                  <label htmlFor="checkbox" />
                </S.CheckboxWrapper>
                <ArrowIcon css={S.arrowIcon(true)} />
              </S.ActivityInfo>
              <S.Activities>
                {data?.resData[3].actList?.map((item) => {
                  //NOTE: console은 찍히는데 css 동작을 하지 않음 확인 필요
                  const isSelcted = selected.includes(item.keyword);

                  return (
                    <S.Activity
                      key={item.keyword}
                      isSelected={isSelcted}
                      onClick={handleSelected(item.keyword)}
                    >
                      <CheckIcon css={S.icon} />
                      {item.keyword}
                    </S.Activity>
                  );
                })}
              </S.Activities>
            </S.ActivityBox>
          </S.ActivityButton>
        ),
      },
    }),
    ...(isSixthSubStep && {
      onClick: () => handleSubStepClick(7),
    }),
    ...(isSeventhSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_02",
        component: <div>test</div>,
      },
    }),
    ...(isLastSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_02",
        component: <div>test</div>,
      },
    }),
  });

  return (
    <S.Container>
      <CreateLuckyDay
        isThirdSubStep={isThirdSubStep}
        isFourthSubStep={isFourthSubStep}
        isFifthSubStep={isFifthSubStep}
        isSixthSubStep={isSixthSubStep}
        data={data}
      />
    </S.Container>
  );
}
