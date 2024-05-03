import React, { useState } from "react";
import * as S from "./Carousel.styled";

interface CarouselProps {
  images: string[];
  texts: string[];
}

const Carousel = ({ images, texts }: CarouselProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextSlide = (): void => {
    const newIndex = (activeIndex + 1) % images.length;
    setActiveIndex(newIndex);
  };

  const handlePrevSlide = (): void => {
    const newIndex = (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(newIndex);
  };

  const handleDotClick = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <S.CarouselContainer>
      {images.map((image, index) => (
        <S.Slide
          key={index}
          style={{ display: index === activeIndex ? "block" : "none" }}
        >
          <S.TextBox>{texts[index]}</S.TextBox>
          <S.Image src={image} alt={`Slide ${index}`} />
        </S.Slide>
      ))}
      <S.ButtonContainer>
        <S.PrevButton onClick={handlePrevSlide}>
          <S.PrevArrowIcon />
        </S.PrevButton>
        <S.DotContainer>
          {images.map((_, index) => (
            <S.Dot
              key={index}
              active={index === activeIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </S.DotContainer>
        <S.NextButton onClick={handleNextSlide}>
          <S.NextArrowIcon />
        </S.NextButton>
      </S.ButtonContainer>
    </S.CarouselContainer>
  );
};

export default Carousel;
