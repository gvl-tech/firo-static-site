import styled from "styled-components"

const FlexContainer = (dir, height, width, br, bg, x, y) => `
  display: flex;
  flex-direction: ${dir};
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${height}vh;
  width: ${width}%;
  border-radius: ${br}px;
  background-color: ${bg};
  padding: ${y}px ${x}px;
`

export const FlexCenterDiv = styled.div`
  ${({ dir, height, width, bg, br, x, y }) =>
    FlexContainer(dir, height, width, br, bg, x, y)}
`

FlexCenterDiv.defaultProps = {
  dir: "column",
  height: undefined,
  width: undefined,
  bg: undefined,
  br: undefined,
}
