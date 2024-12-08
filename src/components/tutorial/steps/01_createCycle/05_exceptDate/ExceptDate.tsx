import { TUTORIAL_STEPS, useTutorialStep } from "components";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./ExceptDate.styled";

export default function ExceptDate() {
  useTutorialStep(TUTORIAL_STEPS.CREATE_CYCLE_EXCEPT_DATE, {
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
