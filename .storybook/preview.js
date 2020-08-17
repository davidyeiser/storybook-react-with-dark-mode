import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { themes } from '@storybook/theming'
import { useDarkMode } from 'storybook-dark-mode'
import theme from '../src/styles/theme'

export const parameters = {
  darkMode: {
    dark: {
      ...themes.dark,          // copy existing values
      appContentBg: '#202020', // main story view frame
      barBg: '#202020'         // top toolbar
    }
  }
}

export const decorators = [
  (Story) => {
    const mode = useDarkMode() ? 'dark' : 'light'
    const thisTheme = theme(mode)

    return (
      <ThemeProvider theme={thisTheme}>
        <Story />
      </ThemeProvider>
    )
  }
]
