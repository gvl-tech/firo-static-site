import styled from "styled-components";

const PaddedContainer = (theme, x, y, bg, br) => `  
  padding: ${theme.space[y ? y : 3]}px ${theme.space[x ? x : 3]}px;
  background-color: ${bg};
  border-radius: ${theme.borderSizes[br]}px;
`;

export const PaddedDiv = styled.div`
  ${({ theme, x, y, bg, br }) => PaddedContainer(theme, x, y, bg, br)}
`;
