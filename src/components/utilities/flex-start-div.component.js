import styled from "styled-components";

const FlexContainer = (theme, dir, height, width, br, bg, padding) => `
  display: flex;
  flex-direction: ${dir};
  height: ${height}vh;
  width: ${width}%;
  border-radius: ${theme.borderSizes[br]}px;
  background-color: ${bg};
  padding: ${padding}px;
`;

export const FlexStartDiv = styled.div`
  ${({ theme, dir, height, width, br, bg, padding }) =>
    FlexContainer(theme, dir, height, width, br, bg, padding)}
`;

FlexStartDiv.defaultProps = {
  dir: "column",
};
