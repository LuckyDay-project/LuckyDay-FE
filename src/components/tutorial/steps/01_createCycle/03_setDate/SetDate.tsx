import { TUTORIAL_STEPS, useTutorialStep } from "components";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./SetDate.styled";

export default function SetDate() {
  useTutorialStep(TUTORIAL_STEPS.CREATE_CYCLE_SET_DATE, {
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
