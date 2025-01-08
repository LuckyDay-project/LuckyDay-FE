import dayjs from "dayjs";

import { SvgFrame } from "components";
import * as S from "./CreateLuckyDayModal.styled";
import { CloseIcon, LargeBoxIcon, ShortBoxIcon } from "assets";

interface CreateLuckyDayModalProps {
  isConfirmLastSubStep?: boolean;
}

function CreateLuckyDayModal({
  isConfirmLastSubStep,
}: CreateLuckyDayModalProps) {
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
  return (
    <S.ModalOverlay>
      <S.BaseModal2>
        <S.BaseModal>
          <CloseIcon css={S.icon} />
          <div>
            <S.Title>럭키 데이를 생성하시겠어요?</S.Title>
            <S.CenterContent>
              <SvgFrame css={S.largeBoxIcon} icon={<LargeBoxIcon />} />
              <S.SubTitle>{subTitle}</S.SubTitle>
            </S.CenterContent>
            <S.Desc>{`한 번 제출한 럭키 데이 옵션은 수정할 수 없으며,\n활동과 날짜는 랜덤 배정됩니다.`}</S.Desc>
          </div>
          <S.ButtonWrapper>
            <S.BaseButton className={isConfirmLastSubStep ? "confirm" : ""}>
              <SvgFrame css={S.purpleIcon} icon={<ShortBoxIcon />} />
              <span>생성하기</span>
            </S.BaseButton>
          </S.ButtonWrapper>
        </S.BaseModal>
      </S.BaseModal2>
    </S.ModalOverlay>
  );
}

export default CreateLuckyDayModal;
