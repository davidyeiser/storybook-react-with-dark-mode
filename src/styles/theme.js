import * as color from '../tokens/color'
import * as border from '../tokens/border'
import * as space from '../tokens/space'
import * as typography from '../tokens/typography'

const themeDarkColor = {
  white: color.darkWhite,
  gray1: color.darkGray1,
  gray2: color.darkGray2,
  gray3: color.darkGray3,
  gray4: color.darkGray4,
  gray5: color.darkGray5,
  black: color.darkBlack,
  indigo: color.darkIndigo,
  magenta: color.darkMagenta,
  trueWhite: color.trueWhite
}

const themeLightColor = {
  white: color.lightWhite,
  gray1: color.lightGray1,
  gray2: color.lightGray2,
  gray3: color.lightGray3,
  gray4: color.lightGray4,
  gray5: color.lightGray5,
  black: color.lightBlack,
  indigo: color.lightIndigo,
  magenta: color.lightMagenta,
  trueWhite: color.trueWhite
}

const theme = (mode) => ({
  color: (mode === 'dark') ? themeDarkColor : themeLightColor,
  border: {...border},
  mode: mode,
  space: {...space},
  typography: {...typography}
})

export default theme
