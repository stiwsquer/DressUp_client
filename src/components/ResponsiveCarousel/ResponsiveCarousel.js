import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { StyledCarousel } from './ResponsiveCarousel.style';

export default function ResponsiveCarousel({ children }) {
  console.log(children);
  return <StyledCarousel showStatus={false}>{children}</StyledCarousel>;
}
