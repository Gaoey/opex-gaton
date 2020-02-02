import React, { useContext } from 'react'
import R from 'ramda'
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../context/ThemeContext';

function Tab(props) {
  const { text, style, renderItem, color } = props
  const theme = useContext(ThemeContext)
  const styles = stylesheet(theme, color)
  return (
    <View style={[ styles.container, style ]}>
      {!R.isNil(text) && <Text style={styles.text}> {text} </Text>}
      {!R.isNil(renderItem) && renderItem}
    </View>
  )
}

Tab.propTypes = {
  style: ViewPropTypes.style
}

Tab.defaultProps = {
  style: {}
}

function stylesheet(theme, color) {
  return StyleSheet.create({
    container: {
      padding: 20,
      width: '100%',
      backgroundColor: color || theme.grey3
    },
    text: {
      fontSize: 12,
      color: theme.white,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }
  })
}


export default Tab
