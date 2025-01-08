import {
  Input,
  SvgFrame,
  TUTORIAL_STEP_ORDER,
  TUTORIAL_STEPS,
  useTutorial,
  useTutorialStep,
} from "components";
import {
  activities,
  ArrowIcon,
  CheckIcon,
  CloseIcon,
  luckydayActs,
  ShortBoxIcon,
} from "assets";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./SelectActivity.styled";

export default function SelectActivity() {
  const { handleSubStepClick, currentStep, subStep, nextStep } = useTutorial();

  const customed = ["치즈김치볶음밥 만들어 먹기", "그림일기로 하루 되돌아보기"];

  const handleSelected = () => {
    handleSubStepClick(4);
  };

  const handleAllSelected = () => {
    handleSubStepClick(6);
  };

  const isSecondSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 2;

  const isThirdSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 3;

  const isFourthSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 4;

  const isFifthSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 5;

  const isSixthSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 6;

  const isSeventhSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 7;

  const isLastSubStep =
    TUTORIAL_STEP_ORDER[currentStep] ===
      TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY && subStep === 8;

  useTutorialStep(TUTORIAL_STEPS.CREATE_CYCLE_SELECT_ACTIVITY, {
    position: {
      top: subStep === 8 ? "80%" : "17%",
    },
    textBoxProps: {
      isClickable:
        subStep !== 2 && subStep !== 4 && subStep !== 5 && subStep !== 8,
      showNextIcon: subStep === 1 || subStep === 6 || subStep === 7,
      onClick: () => handleSubStepClick(8),
    },
    ...(isSecondSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_02",
        component: (
          <S.ActivitiesRow onClick={() => handleSubStepClick(3)}>
            <S.ActivityButton isOpen={false}>
              <S.Img src={"images/img_empty_longBox.webp"} />
              <S.ActivityBox isOpen={false}>
                <S.ActivityInfo isOpen={false} isChecked>
                  {activities[1].icon}
                  <S.ActivityTitle>{activities[1].label}</S.ActivityTitle>
                  <S.CheckboxWrapper isOpen={false} isDisabled>
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={false}
                      onChange={() => {}}
                      disabled
                    />
                    <label htmlFor="checkbox" />
                  </S.CheckboxWrapper>
                  <ArrowIcon css={S.arrowIcon(false)} />
                </S.ActivityInfo>
              </S.ActivityBox>
            </S.ActivityButton>
          </S.ActivitiesRow>
        ),
      },
    }),
    ...(isThirdSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_02",
        component: (
          <S.ActivityButton isOpen>
            <S.Img src={"images/img_empty_mediumBox.webp"} />
            <S.ActivityBox isOpen>
              <S.ActivityInfo isOpen isChecked>
                {activities[1].icon}
                <S.ActivityTitle>{activities[1].label}</S.ActivityTitle>
                <S.CheckboxWrapper isOpen isDisabled>
                  <input
                    type="checkbox"
                    checked={false}
                    disabled
                    id="checkbox"
                    onChange={() => {}}
                  />
                  <label htmlFor="checkbox" />
                </S.CheckboxWrapper>
                <ArrowIcon css={S.arrowIcon(true)} />
              </S.ActivityInfo>
              <S.Activities>
                {luckydayActs[1].actList?.map((item) => {
                  return (
                    <S.Activity
                      key={item.keyword}
                      isSelected={false}
                      isClickable={item.keyword === "치킨"}
                      disabled={item.keyword !== "치킨"}
                      onClick={handleSelected}
                    >
                      <CheckIcon css={S.icon} />
                      {item.keyword}
                    </S.Activity>
                  );
                })}
              </S.Activities>
            </S.ActivityBox>
          </S.ActivityButton>
        ),
      },
    }),
    ...(isFourthSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_05",
        component: (
          <S.ActivitiesRow onClick={() => handleSubStepClick(5)}>
            <S.ActivityButton isOpen={false}>
              <S.Img src={"images/img_empty_longBox.webp"} />
              <S.ActivityBox isOpen={false}>
                <S.ActivityInfo isOpen={false} isChecked>
                  {activities[2].icon}
                  <S.ActivityTitle>{activities[2].label}</S.ActivityTitle>
                  <S.CheckboxWrapper isOpen={false} isDisabled>
                    <input
                      type="checkbox"
                      id="checkbox"
                      checked={false}
                      onChange={() => {}}
                    />
                    <label htmlFor="checkbox" />
                  </S.CheckboxWrapper>
                  <ArrowIcon css={S.arrowIcon(false)} />
                </S.ActivityInfo>
              </S.ActivityBox>
            </S.ActivityButton>
          </S.ActivitiesRow>
        ),
      },
    }),
    ...(isFifthSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_05",
        component: (
          <S.ActivityButton isOpen>
            <S.Img src={"images/img_empty_mediumBox.webp"} />
            <S.ActivityBox isOpen>
              <S.ActivityInfo isOpen isChecked>
                {activities[2].icon}
                <S.ActivityTitle>{activities[2].label}</S.ActivityTitle>
                <S.CheckboxWrapper isOpen isDisabled={false}>
                  <input
                    type="checkbox"
                    checked={false}
                    id="checkbox"
                    onChange={handleAllSelected}
                  />
                  <label htmlFor="checkbox" />
                </S.CheckboxWrapper>
                <ArrowIcon css={S.arrowIcon(true)} />
              </S.ActivityInfo>
              <S.Activities>
                {luckydayActs[2].actList?.map((item) => {
                  return (
                    <S.Activity key={item.keyword} isSelected={false} disabled>
                      <CheckIcon css={S.icon} />
                      {item.keyword}
                    </S.Activity>
                  );
                })}
              </S.Activities>
            </S.ActivityBox>
          </S.ActivityButton>
        ),
      },
    }),
    ...(isSixthSubStep && {
      onClick: () => handleSubStepClick(7),
    }),
    ...(isSeventhSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_07",
        component: (
          <S.ActivityButton isOpen isDisabled>
            <S.Img src="images/img_empty_mediumBox.webp" />
            <S.ActivityBox isOpen>
              <S.ActivityInfo isOpen isChecked={false}>
                {activities[5].icon}
                <S.ActivityTitle>{activities[5].label}</S.ActivityTitle>
                <ArrowIcon css={S.arrowIcon(true)} />
              </S.ActivityInfo>
              <S.Activities>
                <S.CustomActivityWrapper>
                  <S.customActiviyItem />
                  <S.CustomActivity key={activities[5].label}>
                    <Input css={S.input} placeholder="" />
                  </S.CustomActivity>
                  {customed.map((item, i) => {
                    return (
                      <S.CustomActivity key={i} isSelected hasValue>
                        {item}
                        <CloseIcon />
                      </S.CustomActivity>
                    );
                  })}
                </S.CustomActivityWrapper>
              </S.Activities>
            </S.ActivityBox>
            <S.CustomInfo isCustom>
              <S.ContentLength>0/14</S.ContentLength>
              <S.AddButton>추가</S.AddButton>
            </S.CustomInfo>
          </S.ActivityButton>
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
        isThirdSubStep={isThirdSubStep}
        isFourthSubStep={isFourthSubStep}
        isFifthSubStep={isFifthSubStep}
        isSixthSubStep={isSixthSubStep}
        isSeventhSubStep={isSeventhSubStep}
        isActivityLastSubStep={isLastSubStep}
        nextProgress={0}
      />
    </S.Container>
  );
}
