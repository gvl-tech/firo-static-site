import styled from "styled-components";

const SpaceBetweenContainer = (theme, dir, height, width, bg, br, x, y) => `
  display: flex;
  flex-direction: ${dir};
  justify-content: space-between;
  height: ${height}%;
  width: ${width}%;
  background-color: ${bg};
  border-radius: ${theme.borderSizes[br]}px;
  padding: ${theme.space[y]}px ${theme.space[x]}px;
`;

export const FlexSpaceBetweenDiv = styled.div`
  ${({ theme, dir, height, width, bg, br, x, y }) =>
    SpaceBetweenContainer(theme, dir, height, width, bg, br, x, y)}
`;

FlexSpaceBetweenDiv.defaultProps = {
  dir: "row",
};
