import { TUTORIAL_STEPS, useTutorialStep } from "components";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./Confirm.styled";

export default function Confirm() {
  useTutorialStep(TUTORIAL_STEPS.CREATE_CYCLE_CONFIRM, {
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
