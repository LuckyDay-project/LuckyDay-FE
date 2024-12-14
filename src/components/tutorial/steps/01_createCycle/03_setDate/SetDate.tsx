import {
  SvgFrame,
  TUTORIAL_STEP_ORDER,
  TUTORIAL_STEPS,
  useTutorial,
  useTutorialStep,
} from "components";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./SetDate.styled";
import { ArrowIcon, LongBoxIcon, LUCKYDAY_PERIODS, ShortBoxIcon } from "assets";

export default function SetDate() {
  const { handleSubStepClick, currentStep, subStep, nextStep } = useTutorial();

  const isSecondSubStep =
    TUTORIAL_STEP_ORDER[currentStep] === TUTORIAL_STEPS.CREATE_CYCLE_SET_DATE &&
    subStep === 2;

  const isLastSubStep =
    TUTORIAL_STEP_ORDER[currentStep] === TUTORIAL_STEPS.CREATE_CYCLE_SET_DATE &&
    subStep === 3;

  useTutorialStep(TUTORIAL_STEPS.CREATE_CYCLE_SET_DATE, {
    position: {
      top: "17%",
    },
    textBoxProps: {
      isClickable: subStep === 1,
      showNextIcon: subStep === 1,
      onClick: () => handleSubStepClick(3),
    },
    ...(isSecondSubStep && {
      highlight: {
        selector: ".period",
        component: (
          <S.ActivityButton onClick={() => handleSubStepClick(3)}>
            <SvgFrame icon={<LongBoxIcon css={S.icon} />} />
            <S.ActivityInfo>
              <S.ActivityTitle>{LUCKYDAY_PERIODS[2].label}</S.ActivityTitle>
            </S.ActivityInfo>
          </S.ActivityButton>
        ),
      },
    }),
    ...(isLastSubStep && {
      highlight: {
        selector: ".button",
        component: (
          <S.ButtonWrapper>
            <S.Button onClick={nextStep}>
              <SvgFrame css={S.beigeIcon} icon={<ShortBoxIcon />} />
              <S.ButtonBox>
                next <ArrowIcon css={S.buttonArrowIcon} />
              </S.ButtonBox>
            </S.Button>
          </S.ButtonWrapper>
        ),
      },
    }),
  });

  return (
    <S.Container className={isLastSubStep ? "button" : ""}>
      <CreateLuckyDay isDateLastSubStep={isLastSubStep} nextProgress={1} />
    </S.Container>
  );
}
