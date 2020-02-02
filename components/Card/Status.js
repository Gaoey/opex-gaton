import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import { theme } from '../../context/ThemeContext'

export default class Status extends Component {

  selectColor = (status) => {
    switch (status) {
      case "confirm": return theme.color
      case "putaway": return theme.color
      case "pickup": return "#FA5C17"
      case "shipping": return "#FA5C17"
      default: return theme.color
    }
  }

  render() {
    const { status, style } = this.props
    const backgroundColor = this.selectColor(status)
    return (
      <View style={[ styles.container, { backgroundColor }, style ]}>
        <Text style={styles.text}> {status} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 50,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 70
  },
  text: {
    color: "#fff",
    fontSize: Platform.OS === 'ios' ? 12 : 9
  }
})