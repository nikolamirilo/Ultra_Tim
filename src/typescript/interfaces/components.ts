import type { StaticImageData } from "next/image";
import React from "react";

export interface CardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}
export interface CarouselProps {
  slides: StaticImageData[];
  index: number;
  handlePreviousSlide: React.MouseEventHandler<HTMLButtonElement>;
  handleNextSlide: React.MouseEventHandler<HTMLButtonElement>;
}
export interface FormProps {}
