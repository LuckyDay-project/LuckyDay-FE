import * as S from "./ViewActivity.styled";
import {
  TUTORIAL_STEPS,
  useTutorial,
  useTutorialStep,
  BackButton,
} from "components";
import { SvgFrame } from "components";
import { ShortBoxIcon, BookIcon } from "assets";
import dayjs from "dayjs";

export default function ViewActivity() {
  const { nextStep } = useTutorial();

  useTutorialStep(TUTORIAL_STEPS.CHECK_VIEW_ACTIVITY, {
    position: {
      top: "18%",
    },
    textBoxProps: {
      isClickable: false,
    },
    highlight: {
      selector: ".record-button",
      component: (
        <S.ButtonContainer>
          <S.Button onClick={nextStep}>
            <SvgFrame css={S.svgFrame} icon={<ShortBoxIcon />} />
            <span>기록하기</span>
          </S.Button>
        </S.ButtonContainer>
      ),
    },
  });

  return (
    <S.Container>
      <S.LuckydayInfo>
        <span>{dayjs().format("YYYY-MM-DD")}</span>
        <span>오늘의 럭키 데이 활동은...</span>
      </S.LuckydayInfo>
      <S.LuckydayDetailInfo isLongText={false}>
        <S.Img src="/images/img_luckydayBg.webp" alt="luckydayActivity" />
        <BookIcon />
        <p>혼자 영화관 가기</p>
        <p>
          보고 싶었던 영화를 보러 혼자 영화관에 가 보세요. <br />
          푹신한 의자에 몸을 기대고, <br />
          화면에 펼쳐지는 이야기에 푹 빠져 보세요. <br />
          마음껏 울고 웃으면서, <br />
          영화에 온전히 집중해봐요!
        </p>
      </S.LuckydayDetailInfo>
      <div className="record-button" />
      <BackButton />
    </S.Container>
  );
}
