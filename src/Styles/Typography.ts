import { css } from "styled-components"

const commonStyles = css`
  color: #333;
  line-height: 150%;
  font-style: normal;
`

const HeadingM = css`
  ${commonStyles}
  font-size: 32px;
  font-weight: 700;
`

const HeadingS = css`
  ${commonStyles}
  font-size: 16px;
  font-weight: 600;
`

const BodyM = css`
  ${commonStyles}
  font-size: 16px;
  font-weight: 400;
`

const BodyS = css`
  ${commonStyles}
  font-size: 12px;
  font-weight: 400;
`

export { HeadingM, HeadingS, BodyM, BodyS }
