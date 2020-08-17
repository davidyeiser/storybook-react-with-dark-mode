import React from 'react'
import styled from '@emotion/styled'

import * as border from '../../tokens/border'
import * as space from '../../tokens/space'
import * as typography from '../../tokens/typography'

const StyledInput = styled.input`
  box-sizing: border-box;
  display: block;
  width: 290px;
  height: ${props => props.theme.space.s5};
  padding: 0 ${props => props.theme.space.s2};
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSizeText};
  font-style: ${props => props.disabled ? 'italic' : 'normal'};
  line-height: ${props => props.theme.typography.lineHeightInput};
  color: ${props => props.disabled ?
    props.theme.color.gray3 :
    props.theme.color.black
  };
  border-width: ${props => props.disabled ? 0 : props.theme.border.borderWidth};
  border-style: ${props => props.theme.border.borderStyle};
  border-color: ${props => props.theme.color.gray2};
  border-radius: ${props => props.theme.border.borderRadiusSm};
  background-color: ${props =>
    props.disabled ? props.theme.color.gray1 :
    props.theme.color.white
  };
  outline: none;

  &:active, &:focus {
    border-color: ${props =>
      props.disabled ? props.theme.color.gray4 :
      props.theme.color.indigo
    };
    background-color: ${props =>
      props.disabled ? props.theme.color.gray5 :
      props.theme.color.white
    };
  }

  &::placeholder {
    color: ${props => props.theme.color.gray3};
  }
`

const Input = ({ children, disabled, ...rest }) => (
  <StyledInput
    {...{ disabled }}
    {...rest}
  />
)

export default Input
