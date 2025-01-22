import * as S from "./ArchiveModal.styled";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@emotion/react";
import { useModal, useToast } from "hooks";
import { useVisibility } from "./hooks";
import { useDeleteLuckyBoard } from "services";
import { ResetLuckyBoardModal, SvgButton, SvgFrame } from "components";
import { CircleBoxIcon, ShortBoxIcon } from "assets";
import type { GetLuckyDayCycleDetail } from "types";

interface ArchiveModalProps {
  className?: string;
  moreInfo?: React.ReactElement;
  lastInfo?: GetLuckyDayCycleDetail[];
  isMoreInfoModal?: boolean;
}

export default function ArchiveModal({
  className,
  moreInfo,
  lastInfo,
  isMoreInfoModal = false,
}: ArchiveModalProps) {
  const { isVisible, show, hide } = useVisibility(false);
  const { mutate: deleteLuckyBoardMutate } = useDeleteLuckyBoard();

  const { handleOpenModal, handleModalClose } = useModal();
  const { addToast } = useToast();

  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const closeModal = () => {
    hide();
    handleModalClose();
  };

  const moveToDetail = (dtlNo: number) => () => {
    navigate(`/luckydays/${dtlNo}`);
    closeModal();
  };

  const resetLuckyBoard = () => {
    deleteLuckyBoardMutate(undefined, {
      onSuccess: () => {
        sessionStorage.setItem("hasLuckyday", "0");
        handleModalClose();
        window.location.reload();
      },
      onError: () => {
        addToast({ content: "다시 시도해 주세요." });
      },
    });
  };

  const openResetLuckyBoardrModal = () => {
    handleOpenModal(<ResetLuckyBoardModal onReset={resetLuckyBoard} />);
  };

  useEffect(() => {
    show();
  }, []);

  useEffect(() => {
    if (isVisible) {
      closeModal();
    }
  }, [location]);

  return (
    <S.ArchiveModal
      hasPadding={!!moreInfo}
      className={className}
      isVisible={isVisible}
    >
      {moreInfo && <div>{moreInfo}</div>}
      {lastInfo && (
        <>
          {lastInfo?.length ? (
            <S.LuckyDayButtonWrapper>
              {lastInfo.map((item) => (
                <S.LuckyDayButton key={item.dtlNo}>
                  <SvgButton
                    label={item.date}
                    icon={<CircleBoxIcon />}
                    width="100%"
                    height="100%"
                    textColor={theme.colors.white}
                    fillColor={
                      item.reviewCheck === 1
                        ? theme.colors.lightOrange
                        : theme.colors.purple
                    }
                    onClick={moveToDetail(item.dtlNo)}
                  />
                </S.LuckyDayButton>
              ))}
            </S.LuckyDayButtonWrapper>
          ) : (
            <>
              <span>아직 지난 럭키 데이가 없어요.</span>
              <S.Img src="/images/logo-sad-blue.webp" alt="noLuckyDay" />
            </>
          )}
        </>
      )}

      <S.ButtonWrapper>
        {isMoreInfoModal && (
          <S.BottomButton onClick={openResetLuckyBoardrModal}>
            <SvgFrame css={S.BasicSvgFrame} icon={<ShortBoxIcon />} />
            <span>럭키보드 초기화</span>
          </S.BottomButton>
        )}
        <S.BottomButton onClick={closeModal}>
          <SvgFrame
            css={isMoreInfoModal ? S.PurpleSvgFrame : S.BasicSvgFrame}
            icon={<ShortBoxIcon />}
          />
          <span>닫기</span>
        </S.BottomButton>
      </S.ButtonWrapper>
    </S.ArchiveModal>
  );
}
