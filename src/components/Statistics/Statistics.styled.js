import styled from '@emotion/styled';

export const StatList = styled.ul`
  width: 400px;
  padding: ${p => p.theme.space[4]}px;
  border: none;
  border-radius: ${p => p.theme.radii.large};
  box-shadow: ${p => p.theme.shadows.standart};
`;

export const StatItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
