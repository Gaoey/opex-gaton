import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableHighlight, ViewPropTypes } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';
import { emptyFn } from '../../utils/functions'

function Button(props) {
  const { text, transparent, onPress, width, height, textStyle = {}, style, normal } = props
  const theme = useContext(ThemeContext);
  const styles = stylesheet(theme, transparent, width, height, normal)
  const buttonStyle = normal ? styles.default : styles.button
  return (
    <TouchableHighlight
      style={{ ...buttonStyle, ...style }}
      onPress={onPress}
      underlayColor={normal ? theme.white : "#a5a0a0"}>
      <Text style={[ styles.text, textStyle ]} >
        {text}
      </Text>
    </TouchableHighlight>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  transparent: PropTypes.bool,
  onPress: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  style: ViewPropTypes.style,
  normal: PropTypes.bool
}

Button.defaultProps = {
  transparent: false,
  onPress: emptyFn,
  width: 250,
  height: 60,
  textStyle: {},
  style: {},
  normal: false
}

function stylesheet(theme, transparent, width, height, normal) {
  return StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      width,
      height,
      marginRight: 40,
      marginLeft: 40,
      marginTop: 10,
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: transparent ? theme.white : theme.color,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: transparent ? theme.color : theme.white,
    },
    default: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    text: {
      color: normal || transparent ? theme.color : theme.white,
      textAlign: 'center',
      fontSize: 17
    }
  })
}

export default Button