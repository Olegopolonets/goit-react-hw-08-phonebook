import React from 'react';
import { SectionWrapper, TitleSection } from './StyledSection';

export const Section = ({ title, children }) => {
  return (
    <>
      <SectionWrapper>
        <TitleSection>{title}</TitleSection>
        {children}
      </SectionWrapper>
    </>
  );
};
