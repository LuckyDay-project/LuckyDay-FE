import {
  TUTORIAL_STEP_ORDER,
  TUTORIAL_STEPS,
  useTutorial,
  useTutorialStep,
} from "components";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./SetDate.styled";

export default function SetDate() {
  const { handleSubStepClick, currentStep, subStep, nextStep } = useTutorial();

  const isSecondSubStep =
    TUTORIAL_STEP_ORDER[currentStep] === TUTORIAL_STEPS.CREATE_CYCLE_SET_DATE &&
    subStep === 2;

  const isThirdSubStep =
    TUTORIAL_STEP_ORDER[currentStep] === TUTORIAL_STEPS.CREATE_CYCLE_SET_DATE &&
    subStep === 3;

  useTutorialStep(TUTORIAL_STEPS.CREATE_CYCLE_SET_DATE, {
    textBoxProps: {
      isClickable: true,
    },
  });

  useTutorialStep(TUTORIAL_STEPS.CREATE_CYCLE_SET_DATE, {
    textBoxProps: {
      isClickable: true,
    },
  });

  return (
    <S.Container>
      <CreateLuckyDay nextProgress={1} />
    </S.Container>
  );
}
