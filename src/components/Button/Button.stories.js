import React from 'react'
import { useTheme } from 'emotion-theming'

import Button from './'

export default {
  title: 'Button'
}

export const Basic = () => {
  const theme = useTheme()

  console.log('theme values in story:')
  console.log(theme)

  return (
    <Button>Submit</Button>
  )
}

export const Disabled = () => (
  <Button disabled>Submit</Button>
)
