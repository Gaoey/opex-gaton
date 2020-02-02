import React, { useContext } from 'react';
import R from 'ramda'
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../context/ThemeContext';

const ListHeaderTemplate = ({ title, sort, renderItem, height }) => {
  const theme = useContext(ThemeContext)
  const styles = stylesheet(theme, height)
  return (
    <View style={styles.container}>
      {renderItem}
      {
        !R.isNil(title) &&
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          {sort}
        </View>
      }
    </View>
  )
}

ListHeaderTemplate.propTypes = {
  title: PropTypes.string,
  sort: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.object
  ]),
  renderItem: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.object
  ]),
}

ListHeaderTemplate.defaultProps = {
  title: "",
  sort: <View />,
  renderItem: <View />
}


const stylesheet = (theme, height) => {
  return StyleSheet.create({
    container: {},
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 10
    },
    title: {
      color: theme.grey2,
      fontSize: 15
    }
  })
}

export default ListHeaderTemplate
