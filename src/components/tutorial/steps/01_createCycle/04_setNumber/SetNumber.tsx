import { TUTORIAL_STEPS, useTutorialStep } from "components";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./SetNumber.styled";

export default function SetNumber() {
  useTutorialStep(TUTORIAL_STEPS.CREATE_CYCLE_SET_NUMBER, {
    textBoxProps: {
      isClickable: true,
    },
  });

  return (
    <S.Container>
      <CreateLuckyDay />
    </S.Container>
  );
}
