import styled from "styled-components";

const CTAButton = (theme, inverse, x, y) => `
  background-color: ${
    inverse ? theme.colors.brand.primary : theme.colors.bg.white
  };
  color: ${inverse ? theme.colors.bg.white : theme.colors.brand.primary};
  border: none;
  border-radius: ${theme.borderSizes[2]}px;
  padding: ${theme.space[y ? y : 3]}px ${theme.space[x ? x : 3]}px;
  font-family: ${theme.fontFamily.s};
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.body}px;
  cursor: pointer;
`;

export const Button = styled.button`
  ${({ theme, inverse, x, y }) => CTAButton(theme, inverse, x, y)}
`;

Button.defaultProps = {
  inverse: false,
};
