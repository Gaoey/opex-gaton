import React from 'react';
import { View, StyleSheet } from 'react-native';

export const templateMargin = 20

const PageTemplate = ({ children }) => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        {children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  container: {
    marginTop: templateMargin,
    marginRight: templateMargin,
    marginLeft: templateMargin
  }
})

export default PageTemplate
