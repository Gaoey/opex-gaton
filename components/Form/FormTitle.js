import React, { useContext } from 'react';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../context/ThemeContext';

function FormTitle(props) {
  const { text, style } = props
  const theme = useContext(ThemeContext)
  const styles = stylesheet(theme)
  return (
    <View style={[ styles.container, style ]}>
      <Text style={styles.text}> {text} </Text>
    </View>
  )
}

FormTitle.propTypes = {
  text: PropTypes.string.isRequired,
  style: ViewPropTypes.style
}

FormTitle.defaultProps = {
  style: {}
}

function stylesheet(theme) {
  return StyleSheet.create({
    container: {
      padding: 12,
      width: '100%',
      backgroundColor: theme.grey3
    },
    text: {
      fontSize: 15,
      color: "#000",
      fontWeight: 'bold'
    }
  })
}

export default FormTitle