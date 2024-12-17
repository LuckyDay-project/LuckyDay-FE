import * as S from "./NoticeListPage.styled";
import { SingleButtonLayout } from "components";
import { useNavigate } from "react-router-dom";

export default function NoticeListPage() {
  const navigate = useNavigate();

  const handleMoveToNoticeDetail = (id: string) => {
    navigate(`/notice/${id}`);
  };

  return (
    <SingleButtonLayout>
      <S.TitleBox>공지사항</S.TitleBox>
      <S.ContentsBox>
        {/* NOTE: 튜토리얼 기능 추가 후 주석 해제 */}

        {/* <S.MenuBox onClick={() => handleMoveToNoticeDetail("3")}>
          튜토리얼 기능이 추가되었어요.
          <S.DateBox>2024년 11월 12일</S.DateBox>
        </S.MenuBox> */}
        <S.MenuBox onClick={() => handleMoveToNoticeDetail("2")}>
          럭키데이 서비스의 만족도를 평가해 주세요.
          <S.DateBox>2024년 07월 01일</S.DateBox>
        </S.MenuBox>
        <S.MenuBox onClick={() => handleMoveToNoticeDetail("1")}>
          일상에 특별함을 더해줄 럭키데이를 소개합니다.
          <S.DateBox>2024년 06월 01일</S.DateBox>
        </S.MenuBox>
      </S.ContentsBox>
    </SingleButtonLayout>
  );
}
