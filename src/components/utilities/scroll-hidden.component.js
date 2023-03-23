import styled from "styled-components";

const ScrollContainer = (theme, dir, gap) => `
    display: flex;
    flex-direction: ${dir};
    align-items: center;
    gap: ${theme.space[gap ? gap : 3]}px;
    overflow: auto;
    msOverflowStyle: none;
    scrollbarWidth: none;
    whiteSpace: nowrap;
  &::-webkit-scrollbar {
    display: none
  }
`;

export const ScrollDiv = styled.div`
  ${({ theme, dir, gap }) => ScrollContainer(theme, dir, gap)}
`;

ScrollDiv.defaultProps = {
  dir: "row",
};
