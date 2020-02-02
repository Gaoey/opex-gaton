import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ThemeContext } from '../../context/ThemeContext'

const TextArea = (props) => {
  const { width, height, onChangeText, value, numberOfLines = 4, style, editable = true } = props
  const theme = useContext(ThemeContext);
  const [ borderColor, setBorderColor ] = useState(theme.grey)
  const styles = stylesheet(theme, borderColor, width, height, editable)
  return (
    <View>
      <TextInput
        multiline
        numberOfLines={numberOfLines}
        style={[ styles.input, style ]}
        onBlur={() => setBorderColor(theme.grey)}
        onFocus={() => setBorderColor(theme.color)}
        onChangeText={onChangeText}
        value={value}
        editable={editable}
      />
    </View>
  )
}

function stylesheet(theme, borderColor, width, height, editable) {
  return StyleSheet.create({
    input: {
      justifyContent: 'center',
      alignItems: 'center',
      width,
      height: 100,
      marginTop: 10,
      paddingLeft: 10,
      paddingBottom: 10,
      paddingTop: 10,
      borderColor: editable ? borderColor : theme.grey,
      borderWidth: 1,
      backgroundColor: editable ? theme.white : theme.grey
    },
    text: {
      color: theme.color,
      textAlign: 'center',
      fontSize: 15
    },
    icon: {
      position: 'absolute',
      top: 22,
      right: 15
    }
  })
}

export default TextArea
