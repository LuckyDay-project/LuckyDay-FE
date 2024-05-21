import * as S from "./LuckyDayCycleListPage.styled";
import { useNavigate } from "react-router-dom";
import { useGetLuckyDayCycleList } from "services";
import { GetLuckyDayCycleList } from "types";

export default function LuckyDayCycleListPage() {
  const { data: cycles, error, isLoading } = useGetLuckyDayCycleList();
  const navigate = useNavigate();

  console.log("Cycles:", cycles);

  if (isLoading) {
    return <S.ErrorBox>로딩 중...</S.ErrorBox>; // NOTE: spinner 추가 예정입니다.
  }

  if (error || !cycles || cycles.length === 0) {
    return (
      <S.ErrorBox>
        <p>아직 보관함이 비어 있어요.</p>
        <S.Logo_Sad />
      </S.ErrorBox>
    );
  }

  return (
    <>
      <S.TitleBox>럭키 데이 보관함</S.TitleBox>
      <S.ContentsBox>
        {cycles.map((cycle: GetLuckyDayCycleList) => (
          <S.MenuBox
            key={cycle.cyclNo}
            onClick={() => navigate(`/luckyDays/list/${cycle.cyclNo}`)}
          >
            {`${cycle.startDt} ~ ${cycle.endDt}`}
          </S.MenuBox>
        ))}
      </S.ContentsBox>
    </>
  );
}
