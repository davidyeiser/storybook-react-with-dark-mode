import React from 'react'
import styled from '@emotion/styled'

import * as border from '../../tokens/border'
import * as space from '../../tokens/space'
import * as typography from '../../tokens/typography'

const StyledLabel = styled.label`
  display: block;
  font-family: ${props => props.theme.typography.fontFamily};
  font-size: ${props => props.theme.typography.fontSizeText};
  font-weight: ${props =>
    props.disabled ? props.theme.typography.fontWeightRegular :
    props.theme.typography.fontWeightBold
  };
  line-height: ${props => props.theme.typography.lineHeightMeta};
  color: ${props =>
    props.disabled ? props.theme.color.gray3 :
    props.theme.color.black
  };
`

const Label = ({ children, disabled, ...rest }) => (
  <StyledLabel
    {...{ children, disabled }}
    {...rest}
  />
)

export default Label
