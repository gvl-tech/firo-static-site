import styled from "styled-components";

const BubbleContainer = (theme, color, padding, bg, br) => `
  display: flex;
  text-align: center;
  color: ${color};
  background-color: ${bg};
  padding: ${padding};
  border-radius: ${theme.borderSizes[br ? br : 3]}px;
  font-size: ${theme.fontSizes.body}px;
  font-family: ${theme.fontFamily.ssc};
  white-space: nowrap;
`;

export const BubbleDiv = styled.div`
  ${({ theme, color, padding, bg, br }) =>
    BubbleContainer(theme, color, padding, bg, br)}
`;

BubbleDiv.defaultProps = (theme) => ({
  color: `${theme.colors.brand.primary}`,
  bg: null,
  padding: null,
});
