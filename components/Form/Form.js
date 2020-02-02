import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { calculateWidth } from '../../utils/functions';

function Form(props) {
  const { width, marginLeft, marginRight, children, labelName, isRequired } = props
  const newProps = {
    ...props,
    width: calculateWidth(width) - marginLeft - marginRight
  }
  const styles = stylesheet(marginLeft, marginRight)
  return (
    <View style={styles.container}>
      <Text>{labelName}{isRequired && '*'}</Text>
      {children(newProps)}
    </View>
  )
}

Form.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  labelName: PropTypes.string,
  isRequired: PropTypes.bool
}

Form.defaultProps = {
  width: '100%',
  marginLeft: 0,
  marginRight: 0,
  labelName: null,
  isRequired: false,
}

const stylesheet = (marginLeft, marginRight) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginLeft,
      marginRight,
      marginTop: 10
    }
  })
}

export default Form