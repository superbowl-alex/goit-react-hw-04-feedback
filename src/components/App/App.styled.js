import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  padding: ${p => p.theme.space[5]}px;
  box-shadow: ${p => p.theme.shadows.standart};
  border-radius: ${p => p.theme.radii.large};
  font-size: ${p => p.theme.fontSizes.l};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.blue};
  background-color: ${p => p.theme.colors.lightBlue};
`;
