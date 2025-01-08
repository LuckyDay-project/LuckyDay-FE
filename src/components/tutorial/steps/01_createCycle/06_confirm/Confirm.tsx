import {
  SvgFrame,
  TUTORIAL_STEP_ORDER,
  TUTORIAL_STEPS,
  useTutorial,
  useTutorialStep,
} from "components";
import { ShortBoxIcon } from "assets";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./Confirm.styled";

export default function Confirm() {
  const { handleSubStepClick, currentStep, subStep, nextStep } = useTutorial();

  const isLastSubStep =
    TUTORIAL_STEP_ORDER[currentStep] === TUTORIAL_STEPS.CREATE_CYCLE_CONFIRM &&
    subStep === 1;

  useTutorialStep(TUTORIAL_STEPS.CREATE_CYCLE_CONFIRM, {
    textBoxProps: {
      isClickable: true,
      onClick: () => handleSubStepClick(2),
    },
    ...(isLastSubStep && {
      highlight: {
        selector: ".confirm",
        component: (
          <S.BaseButton onClick={nextStep}>
            <SvgFrame css={S.purpleIcon} icon={<ShortBoxIcon />} />
            <span>생성하기</span>
          </S.BaseButton>
        ),
      },
    }),
  });

  return (
    <S.Container>
      <CreateLuckyDay
        isConfirmLastSubStep={isLastSubStep}
        selectableDate={30}
        nextProgress={3}
      />
    </S.Container>
  );
}
