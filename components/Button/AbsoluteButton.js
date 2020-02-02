import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';

const AbsoluteButton = ({ onPress, text }) => {
  return (
    <View style={styles.addInventoryButton}>
      <Button text={text} onPress={() => onPress()} />
    </View>
  )
}

const styles = StyleSheet.create({
  addInventoryButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AbsoluteButton