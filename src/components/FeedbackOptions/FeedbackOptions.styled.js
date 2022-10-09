import styled from '@emotion/styled';
export const Button = styled.button`
  display: inline-block;
  width: 100px;
  padding: ${p => p.theme.space[2]}px;
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.darkBlue};
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  color: inherit;
  text-transform: capitalize;
  cursor: pointer;
  transition: transform 250ms linear;

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: ${p => p.theme.shadows.deep};
  }
`;
