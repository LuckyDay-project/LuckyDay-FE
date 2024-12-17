import {
  SvgFrame,
  TUTORIAL_STEP_ORDER,
  TUTORIAL_STEPS,
  useTutorial,
  useTutorialStep,
} from "components";
import { ArrowIcon, ShortBoxIcon } from "assets";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./ExceptDate.styled";

export default function ExceptDate() {
  const { handleSubStepClick, currentStep, subStep, nextStep } = useTutorial();

  const isFirstSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_EXCEPT_DATE && subStep === 1;

  const isLastSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_EXCEPT_DATE && subStep === 2;

  useTutorialStep(TUTORIAL_STEPS.CREATE_CYCLE_EXCEPT_DATE, {
    position: {
      top: "17%",
    },
    textBoxProps: {
      isClickable: false,
      showNextIcon: false,
      onClick: () => handleSubStepClick(2),
    },
    ...(isFirstSubStep && {
      highlight: {
        selector: ".calendar",
        component: (
          <S.DayButton
            isSelected={true}
            isExceptDate={false}
            isChecked={false}
            onClick={() => handleSubStepClick(2)}
          >
            12
          </S.DayButton>
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
        isDatesFirstSubStep={isFirstSubStep}
        isDatesLastSubStep={isLastSubStep}
        selectableDate={30}
        nextProgress={3}
      />
    </S.Container>
  );
}
