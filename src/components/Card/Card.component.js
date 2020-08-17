import React from 'react'
import styled from '@emotion/styled'

import * as border from '../../tokens/border'
import * as space from '../../tokens/space'
import * as typography from '../../tokens/typography'

const StyledCard = styled.div`
  display: block;
  box-sizing: border-box;
  width: 340px;
  padding: ${props => props.theme.space.s4};
  border-width: ${props => props.theme.border.borderWidth};
  border-style: ${props => props.theme.border.borderStyle};
  border-color: ${props => props.theme.color.gray2};
  border-radius: ${props => props.theme.border.borderRadius};
  background-color: ${props => props.theme.color.white};
`

const Card = ({ children }) => (
  <StyledCard {...{ children }} />
)

export default Card
