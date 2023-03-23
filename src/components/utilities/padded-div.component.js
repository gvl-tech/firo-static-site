import styled from "styled-components"

const PaddedContainer = (x, y, bg, br) => `  
  padding: ${y}px ${x}px;
  background-color: ${bg};
  border-radius: ${br}px;
`

export const PaddedDiv = styled.div`
  ${({ x, y, bg, br }) => PaddedContainer(x, y, bg, br)}
`
