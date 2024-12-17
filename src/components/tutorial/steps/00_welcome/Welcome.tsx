import { TUTORIAL_STEPS, useTutorialStep, LogoTooltip } from "components";

export default function Welcome() {
  useTutorialStep(TUTORIAL_STEPS.WELCOME, {
    position: {
      top: "50%",
    },
    textBoxProps: {
      isClickable: true,
      showNextIcon: true,
    },
  });

  return <LogoTooltip />;
}
