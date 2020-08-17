import React from 'react'
import styled from '@emotion/styled'

import * as border from '../../tokens/border'
import * as space from '../../tokens/space'
import * as typography from '../../tokens/typography'

const StyledButton = styled.button`
  box-sizing: border-box;
  display: block;
  height: ${props => props.theme.space.s5};
  padding: 0 ${props => props.theme.space.s4};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSizeText};
  font-weight: ${props => props.theme.typography.fontWeightBold};
  line-height: ${props => props.theme.typography.lineHeightInput};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  color: ${props => props.theme.color.trueWhite};
  border: 0;
  border-radius: ${props => props.theme.border.borderRadius};
  background-color: ${props =>
    props.disabled ? props.theme.color.gray3 :
    props.theme.color.indigo
  };
  outline: none;
  -webkit-appearance: none;

  &:active, &:focus, &:hover {
    background-color: ${props =>
      props.disabled ? props.theme.color.gray3 :
      props.theme.color.magenta
    };
  }
`

const Button = ({ children, disabled, ...rest }) => (
  <StyledButton
    {...{ children, disabled }}
    {...rest}
  />
)

export default Button
