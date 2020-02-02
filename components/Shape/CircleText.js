import React from 'react'
import R from 'ramda'
import { View, Text, StyleSheet } from 'react-native'

const CircleText = ({ text, style, width = 50, textStyle, color = "red", renderItem = {} }) => {
  const styles = stylesheet(width, color)
  return (
    <View style={[ styles.circle, style ]}>
      {!R.isNil(text) && <Text style={textStyle}>{text}</Text>}
      {!R.isEmpty(renderItem) && renderItem}
    </View >
  )
}

function stylesheet(width, color) {
  return StyleSheet.create({
    circle: {
      justifyContent: "center",
      alignItems: "center",
      width,
      height: width,
      borderRadius: width / 2,
      backgroundColor: color
    }
  })
}

export default CircleText