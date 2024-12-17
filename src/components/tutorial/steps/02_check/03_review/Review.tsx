import * as S from "./Review.styled";
import {
  TUTORIAL_STEPS,
  useTutorialStep,
  SvgFrame,
  BackButton,
} from "components";
import { ShortBoxIcon, EditIcon, TrashIcon } from "assets";
import dayjs from "dayjs";

export default function Review() {
  useTutorialStep(TUTORIAL_STEPS.CHECK_REVIEW, {
    position: {
      top: "17%",
    },
    textBoxProps: {
      isClickable: true,
      showNextIcon: true,
    },
  });

  return (
    <S.Container>
      <S.TextBox>{dayjs().format("YYYY-MM-DD")}</S.TextBox>
      <S.ReviewBox>
        <S.ImageBox>
          <S.TextBox>혼자 영화관 가기</S.TextBox>
          <S.Image>
            <img
              src="/images/tutorial_review.webp"
              alt="Tutorial Review Image"
            />
          </S.Image>
        </S.ImageBox>
        <S.ReviewTextBox>
          영화 "유브 갓 메일" 재개봉을 맞아 <br />
          혼자 CGV에서 보고 왔다. <br />
          역시 로맨틱 코미디의 클래식! ❤️
        </S.ReviewTextBox>
      </S.ReviewBox>
      <S.ButtonWrapper>
        <S.Button>
          <SvgFrame css={S.svgFrame} icon={<ShortBoxIcon />} />
          <span>
            삭제하기 <TrashIcon />
          </span>
        </S.Button>
        <S.Button>
          <SvgFrame css={S.svgFrame} icon={<ShortBoxIcon />} />
          <span>
            수정하기 <EditIcon />
          </span>
        </S.Button>
      </S.ButtonWrapper>
      <BackButton />
    </S.Container>
  );
}
