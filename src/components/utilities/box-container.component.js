import styled from "styled-components";

const BoxContainer = (theme, y, x, bg) => `
  display: flex;
  flex-direction: column;
  padding: ${theme.space[y ? y : 5]}px ${theme.space[x ? x : 2]}px;
  border-radius: ${theme.borderSizes[2]}px;
  box-shadow: 0px 0px 50px 0px rgba(189,189,189,0.7);
  background-color: ${bg};
`;

export const BoxDiv = styled.div`
  ${({ theme, y, x, bg }) => BoxContainer(theme, y, x, bg)}
`;
