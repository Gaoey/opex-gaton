import { Dimensions, Platform } from 'react-native'
import R from 'ramda'
import { templateMargin } from '../components/Template/PageTemplate'

export const emptyFn = () => { }

export const calculateWidth = (width = 0, pageMargin = templateMargin) => {
  if (typeof width === 'string') {
    const screenWidth = Dimensions.get('window').width
    const ratio = parseFloat(width) / 100.0;
    const result = ((screenWidth - (pageMargin * 2)) * ratio)
    return result
  }
  return width
}

export const reduceText = (text, amount = 10) => {
  if (!R.isNil(text) && text.length >= amount) {
    const remain = text.slice(0, amount)
    return `${remain}...`
  }
  return text
}

export const buttonHeight = (margin = 0) => {
  const { height } = Dimensions.get('window')
  const fixedHeight = Platform.OS === 'ios' ? height - 360 : height - 310
  return fixedHeight - margin
}