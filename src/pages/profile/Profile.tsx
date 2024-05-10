import * as S from "./Profile.styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Profile() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/"); // 토큰이 없으면 랜딩페이지로 redirect
      return;
    }

    const getProfile = async () => {
      if (window.Kakao && window.Kakao.API) {
        try {
          const data = await window.Kakao.API.request({
            url: "/v2/user/me",
          });
          setEmail(data.kakao_account.email);
          setNickName(data.properties.nickname);
        } catch (err) {
          console.log(err);
          navigate("/");
        }
      } else {
        console.log("Kakao API is not initialized.");
        navigate("/");
      }
    };

    getProfile();
  }, [navigate]);

  return (
    <S.ContentsBox>
      <S.Logo_Basic />
      <S.Text_h1>enjoy your Lucky Day!</S.Text_h1>
      <S.Text_h2>
        {nickName}님, 반갑습니다. <br />
        📧 {email}
      </S.Text_h2>
      <button onClick={() => navigate("/luckyBoard")}>럭키보드로 가기</button>
    </S.ContentsBox>
  );
}
