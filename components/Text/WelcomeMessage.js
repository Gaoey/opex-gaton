import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

function WelcomeMessage() {
  const theme = useContext(ThemeContext);
  const style = stylesheet(theme)
  return (
    <View style={style.container}>
      <Text style={style.text}>Welcome !</Text>
      <Text style={style.text}>Sign up
        <Text style={style.text2}> to Join App</Text>
      </Text>
    </View>
  );
}

function stylesheet(theme) {
  return StyleSheet.create({
    container: {
      textAlign: 'left'
    },
    text: {
      color: theme.black,
      fontSize: 31
    },
    text2: {
      color: theme.grey2,
    }
  })
}

export default WelcomeMessage