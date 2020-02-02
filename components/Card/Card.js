import React, { Component } from 'react';
import PropTypes from 'prop-types'
import R from 'ramda'
import { StyleSheet, View } from 'react-native';

class Card extends Component {
  render() {
    const { leftIcon = {}, description, rightIcon, style } = this.props
    return (
      <View style={{ ...styles.container, ...style }}>
        <View style={styles.card}>
          {leftIcon}
          <View style={styles.description}>
            {description}
          </View>
        </View>
        {rightIcon}
      </View >
    )
  }
}

Card.propTypes = {
  leftIcon: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.object
  ]),
  description: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.object
  ]),
  rightIcon: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.object
  ])
}

Card.defaultProps = {
  leftIcon: <View />,
  description: <View />,
  rightIcon: <View />
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  description: {
    marginLeft: 20,
    maxWidth: 200
  },
  description2: {
    marginLeft: 5,
    marginRight: 5
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  }
})

export default Card