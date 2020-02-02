import React, { useContext } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { ThemeContext } from '../../context/ThemeContext'

const Loading = () => {
  const theme = useContext(ThemeContext)
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.color} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center'
  }
});

export default Loading
