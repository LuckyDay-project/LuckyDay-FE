import {
  SvgFrame,
  TUTORIAL_STEP_ORDER,
  TUTORIAL_STEPS,
  useTutorial,
  useTutorialStep,
} from "components";
import { ArrowIcon, CircleBoxIcon, PlusIcon, ShortBoxIcon } from "assets";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./SetNumber.styled";

export default function SetNumber() {
  const { handleSubStepClick, currentStep, subStep, nextStep } = useTutorial();

  const isFirstSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SET_NUMBER && subStep === 1;

  const isLastSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SET_NUMBER && subStep === 2;

  useTutorialStep(TUTORIAL_STEPS.CREATE_CYCLE_SET_NUMBER, {
    position: {
      top: "17%",
    },
    textBoxProps: {
      isClickable: false,
      showNextIcon: false,
      onClick: () => handleSubStepClick(3),
    },
    ...(isFirstSubStep && {
      highlight: {
        selector: ".selectCount",
        component: (
          <S.SelectDatesWrapper>
            <S.SelectDatesButton />
            <S.SelectDatesBox>1</S.SelectDatesBox>
            <S.SelectDatesButton onClick={() => handleSubStepClick(2)}>
              <SvgFrame css={S.svgFrame} icon={<CircleBoxIcon />} />
              <PlusIcon css={S.icon} />
            </S.SelectDatesButton>
          </S.SelectDatesWrapper>
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
      <CreateLuckyDay
        isCountFirstSubStep={isFirstSubStep}
        isCountLastSubStep={isLastSubStep}
        selectableDate={30}
        nextProgress={2}
      />
    </S.Container>
  );
}
