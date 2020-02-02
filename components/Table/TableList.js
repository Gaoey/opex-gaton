import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';


const TableList = (props) => {
  const theme = useContext(ThemeContext)
  const { style, children, isBorder = true, color = theme.white } = props
  const styles = stylesheet(theme, isBorder, color)
  return (
    <View style={[ styles.container, style ]}>
      {children}
    </View>
  )
}

TableList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: ViewPropTypes.style,
  isBorder: PropTypes.bool
}

TableList.defaultProps = {
  style: {},
  isBorder: true
}

function stylesheet(theme, isBorder, color) {
  return StyleSheet.create({
    container: {
      padding: 20,
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: isBorder ? theme.grey : theme.white,
      backgroundColor: color
    },
    text: {
      fontSize: 12,
      color: theme.grey4
    }
  })
}

export default TableList
