import {
  ConfirmModal,
  TUTORIAL_STEP_ORDER,
  TUTORIAL_STEPS,
  useTutorial,
  useTutorialStep,
} from "components";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./Confirm.styled";
import dayjs from "dayjs";

export default function Confirm() {
  const { handleSubStepClick, currentStep, subStep, nextStep } = useTutorial();

  const isLastSubStep =
    TUTORIAL_STEP_ORDER[currentStep] === TUTORIAL_STEPS.CREATE_CYCLE_CONFIRM &&
    subStep === 1;

  const isSelectable12th = dayjs().date() > 12;

  const EndOfDate = dayjs(dayjs())
    .add(30, "day")
    .subtract(1, "day")
    .format("YYYY년 MM월 DD일");

  const subTitle = (
    <p>
      생성 옵션:
      <br />
      {dayjs().format("YYYY년 MM월 DD일")}
      <br />~ {EndOfDate}
      <br />
      {<strong>30</strong>}일 동안 <strong>2</strong>개의 럭키 데이
      <br />
      {`\n제외 날짜:\n${dayjs()
        .add(isSelectable12th ? 1 : 0, "month")
        .date(12)
        .format("YYYY년 MM월 DD일")}`}
    </p>
  );

  useTutorialStep(TUTORIAL_STEPS.CREATE_CYCLE_CONFIRM, {
    textBoxProps: {
      isClickable: true,
      onClick: () => handleSubStepClick(2),
    },
    ...(isLastSubStep && {
      highlight: {
        selector: ".confirm",
        component: (
          <ConfirmModal
            css={S.modal}
            title="럭키 데이를 생성하시겠어요?"
            subTitle={subTitle}
            desc={`한 번 제출한 럭키 데이 옵션은 수정할 수 없으며,\n활동과 날짜는 랜덤 배정됩니다.`}
            baseLabel="생성하기"
            handleBaseClick={nextStep}
          />
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
