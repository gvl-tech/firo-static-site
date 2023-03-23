import styled from "styled-components";

const SpaceEvenlyContainer = (theme, dir, height, width, bg, padding) => `
  display: flex;
  flex-direction: ${dir};
  justify-content: space-evenly;
  height: ${height}vh;
  width: ${width}%;
  background-color: ${bg};
  padding: ${padding}
`;

export const FlexEvenlyDiv = styled.div`
  ${({ theme, dir, height, width, bg, padding }) =>
    SpaceEvenlyContainer(theme, dir, height, width, bg, padding)}
`;

FlexEvenlyDiv.defaultProps = {
  dir: "column",
  height: null,
  width: null,
  bg: null,
  padding: null,
};
