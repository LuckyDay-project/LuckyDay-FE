import * as S from "./ViewLuckyDayPage.styled";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "hooks";
import { useGetLuckyDayReview } from "services";
import { GetLuckyDayDetail } from "types";
import {
  SvgFrame,
  PageSpinner,
  ComponentSpinner,
  SingleButtonLayout,
} from "components";
import { formatDate } from "utils";
import { ShortBoxIcon, EditIcon, TrashIcon } from "assets";

export default function ViewLuckyDayPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addToast } = useToast();
  const { data, isLoading, error } = useGetLuckyDayReview(id || "");
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  useEffect(() => {
    if (data && data.resData && data.resData.review === null) {
      navigate(`/luckydays/create/${id}`);
    }
  }, [data, id, navigate]);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  if (isLoading) {
    return <PageSpinner />;
  }

  if (error || !data) {
    addToast({ content: "오류가 발생했습니다." });
    return <ComponentSpinner />;
  }

  const { dday, actNm, review, imageUrl } = data.resData as GetLuckyDayDetail;

  const ImageUrl = imageUrl
    ? `${import.meta.env.VITE_BASE_URL}${imageUrl}`
    : "";

  const isDefaultImage = imageUrl?.includes("/images/review/default");

  return (
    <SingleButtonLayout>
      <S.Container>
        <S.TextBox>{formatDate(dday, "YYYY-MM-DD")}</S.TextBox>
        <S.ReviewBox>
          <S.ImageBox>
            <S.TextBox>{actNm}</S.TextBox>
            {imageLoading && (
              <S.SpinnerBox>
                <ComponentSpinner />
              </S.SpinnerBox>
            )}
            {imageUrl &&
              (isDefaultImage ? (
                <S.DefaultImage>
                  <img src={ImageUrl} alt="Default" onLoad={handleImageLoad} />
                </S.DefaultImage>
              ) : (
                <S.Image>
                  <img src={ImageUrl} alt="Uploaded" onLoad={handleImageLoad} />
                </S.Image>
              ))}
          </S.ImageBox>
          <S.ReviewTextBox>{review}</S.ReviewTextBox>
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
      </S.Container>
    </SingleButtonLayout>
  );
}
