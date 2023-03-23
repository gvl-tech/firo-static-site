import styled from "styled-components"

const PaddedContainer = (theme, x, y, bg, br) => `  
  padding: ${theme.space[y]}px ${theme.space[x]}px;
  background-color: ${bg};
  border-radius: ${theme.borderSizes[br]}px;
`

export const PaddedDiv = styled.div`
  ${({ theme, x, y, bg, br }) => PaddedContainer(theme, x, y, bg, br)}
`
