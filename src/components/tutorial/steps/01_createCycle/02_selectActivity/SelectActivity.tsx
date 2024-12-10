import { useEffect, useRef, useState } from "react";

import {
  Input,
  TUTORIAL_STEP_ORDER,
  TUTORIAL_STEPS,
  useTutorial,
  useTutorialStep,
} from "components";
import { useToast } from "hooks";
import { activities, ArrowIcon, CheckIcon, CloseIcon } from "assets";
import { useGetLuckyDaysActivities } from "services";
import CreateLuckyDay from "../createLuckyday/CreateLuckyDay";
import * as S from "./SelectActivity.styled";

export default function SelectActivity() {
  const { data } = useGetLuckyDaysActivities();

  const { handleSubStepClick, currentStep, subStep, nextStep } = useTutorial();

  const [selected, setSelected] = useState<string[]>([]);
  const [customed, setCustomed] = useState<string[]>([
    "치즈김치볶음밥 만들어 먹기",
    "그림일기로 하루 되돌아보기",
  ]);
  const [allSelected, setAllSelected] = useState<string[]>([]);
  const [text, setText] = useState("");

  const spanRef = useRef<HTMLSpanElement>(null);
  const activityRef = useRef<HTMLButtonElement>(null);

  const inputWidth = text.length
    ? spanRef.current?.getBoundingClientRect().width
    : 0;
  const { addToast } = useToast();

  const handleCustomItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 14) return;

    setText(e.target.value);
  };

  const handleAddCustomActivity = (e: React.MouseEvent): void => {
    e.stopPropagation();

    const checkSameActivity = customed.includes(text);

    if (checkSameActivity) {
      addToast({ content: "이미 추가된 활동입니다." });
      setText("");

      return;
    }
    setCustomed([...customed, text]);
    setText("");
  };

  const handleEnterCustomItemChange = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      handleAddCustomActivity(e as unknown as React.MouseEvent);
    }
  };

  const DeleteCustomActivity = (selectedActivity: string) => (): void => {
    const filteredActivities = customed?.filter(
      (item) => item !== selectedActivity
    );

    setCustomed(filteredActivities);
  };

  const handleSelected = (item: string) => () => {
    setSelected((prev) => {
      const isSelected = prev.includes(item);
      const updated = isSelected
        ? prev.filter((select) => select !== item)
        : [...prev, item];

      return updated;
    });
  };

  const handleCustomed = (item: string) => () => {
    setCustomed((prev) => {
      const isSelected = prev.includes(item);
      const updated = isSelected
        ? prev.filter((select) => select !== item)
        : [...prev, item];

      return updated;
    });
  };

  const handleAllSelected = (item: string) => () => {
    setAllSelected((prev) => {
      const isSelected = prev.includes(item);
      const updated = isSelected
        ? prev.filter((select) => select !== item)
        : [...prev, item];

      return updated;
    });

    handleSubStepClick(6);
  };

  const handleStopPropagation = (e: React.MouseEvent): void => {
    e.stopPropagation();
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
      top: "17%",
    },
    textBoxProps: {
      isClickable:
        subStep !== 2 && subStep !== 4 && subStep !== 5 && subStep !== 7,
      showNextIcon: subStep === 1 || subStep === 3 || subStep === 6,
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
                  <S.CheckboxWrapper isOpen={false}>
                    <input type="checkbox" id="checkbox" onChange={() => {}} />
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
      onClick: () => handleSubStepClick(4),
      highlight: {
        selector: ".tutoral_selectActivity_02",
        component: (
          <S.ActivityButton isOpen>
            <S.Img src={"images/img_empty_mediumBox.webp"} />
            <S.ActivityBox isOpen>
              <S.ActivityInfo isOpen isChecked>
                {activities[1].icon}
                <S.ActivityTitle>{activities[1].label}</S.ActivityTitle>
                <S.CheckboxWrapper isOpen>
                  <input
                    type="checkbox"
                    checked={false}
                    id="checkbox"
                    onChange={() => {}}
                  />
                  <label htmlFor="checkbox" />
                </S.CheckboxWrapper>
                <ArrowIcon css={S.arrowIcon(true)} />
              </S.ActivityInfo>
              <S.Activities>
                {data?.resData[2].actList?.map((item) => {
                  //NOTE: console은 찍히는데 css 동작을 하지 않음 확인 필요
                  const isSelcted = selected.includes(item.keyword);

                  return (
                    <S.Activity
                      key={item.keyword}
                      isSelected={isSelcted}
                      onClick={handleSelected(item.keyword)}
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
                  <S.CheckboxWrapper isOpen={false}>
                    <input type="checkbox" id="checkbox" onChange={() => {}} />
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
                <S.CheckboxWrapper isOpen>
                  <input
                    type="checkbox"
                    checked={allSelected.includes(activities[2].label)}
                    id="checkbox"
                    onChange={handleAllSelected(activities[2].label)}
                  />
                  <label htmlFor="checkbox" />
                </S.CheckboxWrapper>
                <ArrowIcon css={S.arrowIcon(true)} />
              </S.ActivityInfo>
              <S.Activities>
                {data?.resData[3].actList?.map((item) => {
                  //NOTE: console은 찍히는데 css 동작을 하지 않음 확인 필요
                  const isSelcted = selected.includes(item.keyword);

                  return (
                    <S.Activity
                      key={item.keyword}
                      isSelected={isSelcted}
                      onClick={handleSelected(item.keyword)}
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
    ...(isSixthSubStep && {
      onClick: () => handleSubStepClick(7),
    }),
    ...(isSeventhSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_07",
        component: (
          <S.ActivityButton isOpen>
            <S.Img src={"images/img_empty_mediumBox.webp"} />
            <S.ActivityBox isOpen>
              <S.ActivityInfo isOpen isChecked={false}>
                {activities[5].icon}
                <S.ActivityTitle>{activities[5].label}</S.ActivityTitle>
                <ArrowIcon css={S.arrowIcon(true)} />
              </S.ActivityInfo>
              <S.Activities>
                <S.CustomActivityWrapper>
                  <S.customActiviyItem ref={spanRef}>
                    {text}
                  </S.customActiviyItem>
                  <S.CustomActivity
                    ref={activityRef}
                    key={activities[5].label}
                    onClick={handleStopPropagation}
                  >
                    <Input
                      // value={text}
                      css={S.input(inputWidth)}
                      placeholder=""
                      handleChange={handleCustomItemChange}
                      handleKeyDown={handleEnterCustomItemChange}
                    />
                  </S.CustomActivity>
                  {customed.map((item, i) => {
                    return (
                      <S.CustomActivity
                        key={i}
                        isSelected
                        hasValue
                        onClick={handleStopPropagation}
                      >
                        {item}
                        <CloseIcon onClick={DeleteCustomActivity(item)} />
                      </S.CustomActivity>
                    );
                  })}
                </S.CustomActivityWrapper>
              </S.Activities>
            </S.ActivityBox>
            <S.CustomInfo isCustom>
              <S.ContentLength>{text.length}/14</S.ContentLength>
              <S.AddButton onClick={handleCustomed(text)}>추가</S.AddButton>
            </S.CustomInfo>
          </S.ActivityButton>
        ),
      },
    }),
    ...(isLastSubStep && {
      highlight: {
        selector: ".tutoral_selectActivity_02",
        component: <div>test</div>,
      },
    }),
  });

  return (
    <S.Container>
      <CreateLuckyDay
        isThirdSubStep={isThirdSubStep}
        isFourthSubStep={isFourthSubStep}
        isFifthSubStep={isFifthSubStep}
        isSixthSubStep={isSixthSubStep}
        data={data}
      />
    </S.Container>
  );
}
