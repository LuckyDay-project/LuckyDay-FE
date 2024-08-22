import * as S from "./Tooltip.styled";
import { useState } from "react";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  flow: "up" | "down" | "left" | "right";
}

export default function Tooltip({ content, flow, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickTooltip = () => {
    setIsVisible(!isVisible);
  };

  return (
    <S.TooltipWrapper
      onClick={handleClickTooltip}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <S.TooltipBox flow={flow} isVisible={isVisible}>
        <S.TooltipArrow flow={flow} />
        <S.TooltipContent>{content}</S.TooltipContent>
      </S.TooltipBox>
    </S.TooltipWrapper>
  );
}
