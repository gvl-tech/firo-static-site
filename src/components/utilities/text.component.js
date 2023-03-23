import styled from "styled-components";

const hint = (theme, color, bold, fontFamily) => `
  font-size: ${theme.fontSizes.hint}px;
  color: ${color ? color : theme.colors.text.primary};
  font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.regular};
  font-family: ${fontFamily ? fontFamily : theme.fontFamily.ssc};
`;

const tab = (theme, color, bold, fontFamily) => `
  font-size: ${theme.fontSizes.tab}px;
  color: ${color ? color : theme.colors.text.primary};
  font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.regular};
  font-family: ${fontFamily ? fontFamily : theme.fontFamily.ssc};
`;

const caption = (theme, color, bold, fontFamily) => `
  font-size: ${theme.fontSizes.caption}px;
  color: ${color ? color : theme.colors.text.primary};
  font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.regular};
  font-family: ${fontFamily ? fontFamily : theme.fontFamily.ssp};
`;

const body = (theme, color, bold, fontFamily) => `
  font-size: ${theme.fontSizes.body}px;
  color: ${color ? color : theme.colors.text.primary};
  font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.regular};
  font-family: ${fontFamily ? fontFamily : theme.fontFamily.ssc};
`;

const button = (theme, color, bold, fontFamily) => `
  font-size: ${theme.fontSizes.button}px;
  color: ${color ? color : theme.colors.text.primary};
  font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.regular};
  font-family: ${fontFamily ? fontFamily : theme.fontFamily.ssc};
`;

const label = (theme, color, bold, fontFamily) => `
  font-size: ${theme.fontSizes.label}px;
  color: ${color ? color : theme.colors.text.primary};
  font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.regular};
  font-family: ${fontFamily ? fontFamily : theme.fontFamily.ssc};
`;

const h5 = (theme, color, bold, fontFamily) => `
  font-size: ${theme.fontSizes.h5}px;
  color: ${color ? color : theme.colors.text.primary};
  font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.regular};
  font-family: ${fontFamily ? fontFamily : theme.fontFamily.ssc};
`;
const h4 = (theme, color, bold, fontFamily) => `
  font-size: ${theme.fontSizes.h4}px;
  color: ${color ? color : theme.colors.text.primary};
  font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.regular};
  font-family: ${fontFamily ? fontFamily : theme.fontFamily.ssc};
`;
const h3 = (theme, color, bold, fontFamily) => `
  font-size: ${theme.fontSizes.h3}px;
  color: ${color ? color : theme.colors.text.primary};
  font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.regular};
  font-family: ${fontFamily ? fontFamily : theme.fontFamily.ssc};
`;
const h2 = (theme, color, bold, fontFamily) => `
  font-size: ${theme.fontSizes.h2}px;
  color: ${color ? color : theme.colors.text.primary};
  font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.regular};
  font-family: ${fontFamily ? fontFamily : theme.fontFamily.ssc};
`;

const h1 = (theme, color, bold, fontFamily) => `
  font-size: ${theme.fontSizes.h1}px;
  color: ${color ? color : theme.colors.text.primary};
  font-weight: ${bold ? theme.fontWeights.bold : theme.fontWeights.regular};
  font-family: ${fontFamily ? fontFamily : theme.fontFamily.ssc};
`;

const link = (theme) => `
  color: ${theme.colors.text.white};
`;

const variants = {
  hint,
  tab,
  body,
  caption,
  button,
  label,
  h5,
  h4,
  h3,
  h2,
  h1,
  link,
};

export const Text = styled.span`
  ${({ variant, theme, color, bold, fontFamily }) =>
    variants[variant](theme, color, bold, fontFamily)}
`;

Text.defaultProps = {
  variant: "body",
  color: null,
  bold: false,
};
