import { Input } from "components";
import { ArrowIcon, CheckIcon, CloseIcon, activities } from "assets";
import type { Activities } from "types";
import * as S from "./ActivityToggle.styled";

interface ActivityToggleProps {
  activity: {
    icon: React.ReactNode;
    label: (typeof activities)[number]["label"];
  };
  data?: Activities;
  index: number;
  isFourthSubStep?: boolean;
  isSixthSubStep?: boolean;
  isOpen: boolean;
  checked: boolean;
}

function ActivityToggle({
  activity,
  data,
  index,
  checked,
  isFourthSubStep,
  isSixthSubStep,
  isOpen,
}: ActivityToggleProps) {
  return (
    <>
      <S.ActivityButton
        className={
          activity.label === "맛있는 음식"
            ? "tutoral_selectActivity_02"
            : activity.label === "배움과 문화"
            ? "tutoral_selectActivity_05"
            : activity.label === "+) 직접 입력"
            ? "tutoral_selectActivity_07"
            : ""
        }
        key={index}
        isOpen={isOpen}
      >
        <S.Img
          // TODO:innerShadow값이 있어 이미지로 따로 설정해줌
          src={
            isOpen
              ? "images/img_empty_mediumBox.webp"
              : "images/img_empty_longBox.webp"
          }
        />
        <S.ActivityBox isOpen={isOpen}>
          <S.ActivityInfo
            isOpen={isOpen}
            isChecked={activity.label !== "+) 직접 입력"}
          >
            {activity.icon}
            <S.ActivityTitle>{activity.label}</S.ActivityTitle>
            {activity.label !== "+) 직접 입력" && (
              <S.CheckboxWrapper isOpen={isOpen}>
                <input type="checkbox" checked={checked} id={`check${index}`} />
                <label htmlFor={`check${index}`} />
              </S.CheckboxWrapper>
            )}
            <ArrowIcon css={S.arrowIcon(isOpen)} />
          </S.ActivityInfo>
          <S.Activities>
            {isOpen &&
              (data ? (
                data?.actList.map((item) => {
                  return (
                    <S.Activity
                      isSelected={
                        (isFourthSubStep && item.keyword === "치킨") ||
                        isSixthSubStep
                      }
                      key={item.actNo}
                    >
                      <CheckIcon css={S.icon} />
                      {item.keyword}
                    </S.Activity>
                  );
                })
              ) : (
                <S.CustomActivityWrapper>
                  <S.customActiviyItem></S.customActiviyItem>
                  <S.CustomActivity key={activities[5].label}>
                    <Input css={S.input} placeholder="" />
                  </S.CustomActivity>
                  {[
                    "치즈김치볶음밥 만들어먹기",
                    "그림일기로 하루 되돌아보기",
                  ]?.map((item, i) => {
                    return (
                      <S.CustomActivity key={item + i} isSelected hasValue>
                        {item}
                        <CloseIcon />
                      </S.CustomActivity>
                    );
                  })}
                </S.CustomActivityWrapper>
              ))}
          </S.Activities>
        </S.ActivityBox>
        {isOpen && (
          <S.CustomInfo isCustom={activity.label === activities[5].label}>
            <S.ContentLength>0/14</S.ContentLength>
            <S.AddButton>추가</S.AddButton>
          </S.CustomInfo>
        )}
      </S.ActivityButton>
    </>
  );
}

export default ActivityToggle;
