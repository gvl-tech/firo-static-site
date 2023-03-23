import styled from "styled-components";

const FlexContainer = (theme, dir, height, width, br, bg, x, y) => `
  display: flex;
  flex-direction: ${dir};
  align-items: center;
  height: ${height}vh;
  width: ${width}%;
  border-radius: ${br}px;
  background-color: ${bg};
  padding: ${theme.space[y ? y : 3]}px ${theme.space[x ? x : 3]}px;
`;

export const FlexDiv = styled.div`
  ${({ theme, dir, height, width, br, bg, x, y }) =>
    FlexContainer(theme, dir, height, width, br, bg, x, y)}
`;

FlexDiv.defaultProps = {
  dir: "column",
};
