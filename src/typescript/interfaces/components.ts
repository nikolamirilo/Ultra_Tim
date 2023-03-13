import React from "react";
import type { StaticImageData } from "next/image";

export interface CardProps {
  title: string;
  subtitle: string;
}
export interface CarouselProps {
  slides: StaticImageData[];
  index: number;
  handlePreviousSlide: React.MouseEventHandler<HTMLButtonElement>;
  handleNextSlide: React.MouseEventHandler<HTMLButtonElement>;
}
