import {
  TUTORIAL_STEP_ORDER,
  TUTORIAL_STEPS,
  useTutorial,
  useTutorialStep,
} from "components";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./SelectActivity.styled";
import { activities, ArrowIcon } from "assets";

export default function SelectActivity() {
  const { handleSubStepClick, currentStep, subStep, nextStep } = useTutorial();

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
        subStep !== 3 &&
        subStep !== 4 &&
        subStep !== 5 &&
        subStep !== 7,
      showNextIcon: subStep === 1 || subStep === 6,
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
                <S.ActivityInfo isOpen={false} isChecked={true}>
                  {activities[2].icon}
                  <S.ActivityTitle>맛있는 음식</S.ActivityTitle>
                  <S.CheckboxWrapper isOpen={false}>
                    <input type="checkbox" id={`checkbox`} />
                    <label htmlFor={`checkbox`} />
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
      highlight: {
        selector: ".tutoral_selectActivity_02",
        component: <div>test</div>,
      },
    }),
    ...(isFourthSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_02",
        component: <div>test</div>,
      },
    }),
    ...(isFifthSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_02",
        component: <div>test</div>,
      },
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
      <CreateLuckyDay />
    </S.Container>
  );
}
