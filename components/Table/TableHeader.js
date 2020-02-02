import R from 'ramda';
import React, { useContext } from 'react';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

function TableHeader(props) {
  const { text, style, renderItem } = props
  const theme = useContext(ThemeContext)
  const styles = stylesheet(theme)
  return (
    <View style={[ styles.container, style ]}>
      {!R.isNil(text) && <Text style={styles.text}> {text} </Text>}
      {!R.isNil(renderItem) && renderItem}
    </View>
  )
}

TableHeader.propTypes = {
  style: ViewPropTypes.style
}

TableHeader.defaultProps = {
  style: {}
}

function stylesheet(theme) {
  return StyleSheet.create({
    container: {
      padding: 20,
      width: '100%',
      backgroundColor: theme.grey3
    },
    text: {
      fontSize: 14,
      color: theme.black,
      fontWeight: "bold"
    }
  })
}


export default TableHeader
