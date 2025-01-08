import { Theme, css } from "@emotion/react";
import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const BaseModal2 = styled.dialog`
  ${({ theme }) => css`
    position: fixed;
    display: block;
    width: 288px;
    height: 415px;
    margin: 0 auto;
    border: 0;
    border-radius: 24px;
    background-color: ${theme.colors.lightBeige};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 1001;
  `}
`;

export const BaseModal = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 45px 20px 22px 20px;

    div:not(:first-of-type) {
      ${theme.fonts.body1};
      align-items: center;

      p {
        width: 100%;
      }
      strong {
        color: ${theme.colors.orange};
      }
    }
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.headline1};
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  `}
`;

export const CenterContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 13px;
`;

const svgIcon = css`
  width: 100%;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const largeBoxIcon = (theme: Theme) => css`
  ${svgIcon};
  padding: 0 4px;

  path {
    fill: ${theme.colors.lightPurple};
  }
`;

export const beigeIcon = (theme: Theme) => css`
  ${svgIcon};

  path {
    fill: ${theme.colors.beige};
  }
`;

export const purpleIcon = (theme: Theme) => css`
  ${svgIcon};

  path {
    fill: ${theme.colors.purple};
  }
`;

const button = (theme: Theme) => css`
  position: relative;
  width: 100px;

  & > span {
    ${theme.fonts.headline2};
    position: absolute;
    width: 100%;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CancelButton = styled.button`
  ${({ theme }) => css`
    ${button(theme)};

    & > span {
      color: ${theme.colors.black};
    }
  `}
`;

export const BaseButton = styled.button`
  ${({ theme }) => css`
    ${button(theme)};

    & > span {
      color: ${theme.colors.white};
    }
  `}
`;

export const SubTitle = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body1};
    position: absolute;
    display: flex;
    width: 100%;
    height: 180px;
    padding: 25px 15px;
    text-align: center;
    white-space: break-spaces;
    overflow-y: scroll;
    -ms-overflow-style: none; /*IE, Edge*/
    scrollbar-width: none; /*Firefox*/

    ::-webkit-scrollbar {
      display: none; /*Chrome, Safari, Opera*/
      width: 0px;
    }
  `}
`;

export const Desc = styled.div`
  ${({ theme }) => css`
    ${theme.fonts.body1};
    display: flex;
    justify-content: center;
    text-align: center;
    white-space: break-spaces;
  `}
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: -30px;
  display: flex;
  justify-content: center;
  column-gap: 39px;
  padding: 0 4px;
`;

export const icon = css`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
