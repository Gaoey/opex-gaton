import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../context/ThemeContext';

// <RadioButton data={data} renderItem={} keyExtractor={} />
class RadioButton extends Component {

  constructor(props) {
    super(props)
    this.state = {
      select: 0,
      data: {}
    }
  }

  select = (item, index) => {
    const { callback } = this.props
    this.setState((prevState) => {
      if (prevState.select !== index) {
        callback(item)
        return { 
          select: index,
          data: item
        }
      }
      return prevState
    })
  }

  render() {
    const { data, renderItem, keyExtractor, style } = this.props
    return (
      <View style={{ ...styles.container, ...style }}>
        {
          data.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => this.select(item, index)} key={keyExtractor(item)} >
                <View style={styles.radioButton}>
                  <View style={styles.dot}>
                    {
                      index === this.state.select
                        ? <Icon name="circle-slice-8" style={{ fontSize: 15, paddingRight: 20 }} />
                        : <Icon name="circle-outline" style={{ fontSize: 15, paddingRight: 20 }} />
                    }
                  </View>
                  {renderItem(item)}
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View >
    )
  }
}

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    padding: 20,
    width: '100%',
    borderBottomColor: theme.grey,
    borderBottomWidth: 1,
    backgroundColor: theme.white
  },
  description: {
    marginLeft: 20
  },
  container: {
    justifyContent: 'space-between',
    alignContent: 'flex-start'
  },
  dot: {
    alignSelf: 'center'
  }
})

export default RadioButton