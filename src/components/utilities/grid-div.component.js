import styled from "styled-components";

const GridContainer = (theme, x, y, gap, rg, cg) => `
  display: grid;
  grid-template-columns: ${y};
  grid-template-rows: ${x};
  gap: ${theme.space[gap]}px;
  row-gap: ${theme.space[rg]}px;
  column-gap: ${theme.space[cg]}px;
`;

export const GridDiv = styled.div`
  ${({ theme, x, y, gap, rg, cg }) => GridContainer(theme, x, y, gap, rg, cg)}
`;

GridDiv.defaultProps = {
  x: "auto",
  y: "auto",
};
