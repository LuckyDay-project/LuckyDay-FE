import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const LayoutContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100svh;
    background-color: ${theme.colors.background};

    @media (min-width: 768px) {
      height: 100vh;
    }
  `}
`;

export const Layout = styled.div`
  max-width: 430px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // FIX : 생성 모달 이슈로 인한 재수정
  background-size: cover;
  background-position: center;
  background-image: url("/images/background.webp");
`;
