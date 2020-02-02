import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { ThemeContext } from '../../context/ThemeContext';
import { emptyFn } from '../../utils/functions';

function ModalHeader(props) {
  const { clickLeft, clickRight, text, onPressLeft, onPressRight, headerLeft, headerRight } = props
  const theme = useContext(ThemeContext)
  const styles = stylesheet(theme)
  return (
    <View style={styles.container}>
      {
        headerLeft
          ? clickLeft && <Button title="Cancel" onPress={() => onPressLeft()} />
          : <View />
      }
      <Text style={styles.text}>{text}</Text>
      {
        headerRight
          ? clickRight && <Button title="Done" onPress={() => onPressRight()} />
          : <View />
      }
    </View>
  )
}

ModalHeader.propTypes = {
  text: PropTypes.string,
  clickLeft: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.object
  ]),
  clickRight: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.object
  ]),
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  headerLeft: PropTypes.bool,
  headerRight: PropTypes.bool
}

ModalHeader.defaultProps = {
  text: "",
  clickLeft: <View />,
  clickRight: <View />,
  onPressLeft: emptyFn,
  onPressRight: emptyFn,
  headerLeft: true,
  headerRight: true
}

function stylesheet(theme) {
  return StyleSheet.create({
    container: {
      padding: 12,
      width: '100%',
      backgroundColor: theme.grey3,
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    text: {
      fontSize: 12,
      color: theme.grey4
    }
  })
}

export default ModalHeader