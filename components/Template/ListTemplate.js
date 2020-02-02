import React, { useContext } from 'react';
import R from 'ramda'
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../context/ThemeContext';

const ListTemplate = ({ title, sort, flatList, height }) => {
  const theme = useContext(ThemeContext)
  const styles = stylesheet(theme, height)
  return (
    <View style={styles.container}>
      {
        !R.isNil(title) &&
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          {sort}
        </View>
      }
      {flatList || <View />}
    </View>
  )
}

ListTemplate.propTypes = {
  title: PropTypes.string,
  sort: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.object
  ]),
  flatList: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.object
  ]),
}

ListTemplate.defaultProps = {
  title: "",
  sort: <View />,
  flatList: <View />
}


const stylesheet = (theme, height) => {
  return StyleSheet.create({
    container: {
      height: height || 300,
      marginBottom: 10
    },
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

export default ListTemplate
