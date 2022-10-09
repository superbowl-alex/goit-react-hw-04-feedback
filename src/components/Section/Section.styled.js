import styled from '@emotion/styled';

export const SectionTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: ${p => p.theme.letterSpacings.wide};
  color: ${p => p.theme.colors.deepBlue};
`;

export const WrapSection = styled.section`
  padding: ${p => p.theme.space[4]}px;
`;
