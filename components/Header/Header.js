import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../context/ThemeContext';

function HeaderTitle(props) {
  const { text } = props
  const theme = useContext(ThemeContext)
  const styles = stylesheet(theme)
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {text} </Text>
    </View>
  )
}

function HeaderRight(props) {
  return (
    <Icon name="chevron-right" />
  )
}

HeaderTitle.propTypes = {
  text: PropTypes.string.isRequired
}


function stylesheet(theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    text: {
      fontSize: 17,
      fontWeight: 'bold'
    }
  })
}

export {
  HeaderTitle,
  HeaderRight
} 