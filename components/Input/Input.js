/* eslint-disable react/no-unused-prop-types */
import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StyleSheet, TextInput, View, Text } from 'react-native'
import { ThemeContext } from '../../context/ThemeContext'
import { emptyFn } from '../../utils/functions'
import { INPUT_TYPE } from '../../utils/global'

const Input = (props) => {
  const { textRightWidth, textRightBGColor, textRight, value, onChangeText, placeholder, width, height, secureTextEntry, type, borderRadius, style, inputRight, editable = true } = props
  const theme = useContext(ThemeContext);
  const [ borderColor, setBorderColor ] = useState(theme.grey)
  const [ secureTextEntryState, setSecureTextEntryState ] = useState(secureTextEntry)
  const styles = stylesheet(theme, borderColor, width, height, borderRadius, editable)

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[ styles.input, style ]}
          onBlur={() => setBorderColor(theme.grey)}
          onFocus={() => setBorderColor(theme.color)}
          secureTextEntry={secureTextEntryState}
          editable={editable}
          value={value}
        />
        {
          !R.isNil(textRight) &&
          <View style={[ {
            backgroundColor: textRightBGColor || theme.grey,
            width: textRightWidth || width / 4,
            position: 'absolute',
            height,
            right: 0,
            top: 10,
            justifyContent: 'center',
            alignContent: 'center',
          } ]}>
            <Text style={{ textAlign: 'center' }}>
              {textRight}
            </Text>
          </View>
        }
      </View>
      {
        type === INPUT_TYPE.PASSWORD &&
        <Icon style={styles.icon}
          name={secureTextEntryState ? 'eye-off-outline' : 'eye-outline'}
          size={25}
          color={theme.grey2}
          onPress={() => setSecureTextEntryState(!secureTextEntryState)}
        />
      }
      <View style={styles.icon}>
        {inputRight}
      </View>
    </View>
  );
}

Input.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  secureTextEntry: PropTypes.bool,
  type: PropTypes.string,
  borderRadius: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  inputRight: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.object
  ]),
  editable: PropTypes.bool
}

Input.defaultProps = {
  placeholder: "",
  onChangeText: emptyFn,
  width: '100%',
  height: 40,
  secureTextEntry: false,
  type: INPUT_TYPE.TEXT,
  borderRadius: 0,
  style: {},
  inputRight: <View />,
  editable: true
}

function stylesheet(theme, borderColor, width, height, borderRadius, editable) {
  return StyleSheet.create({
    input: {
      justifyContent: 'center',
      alignItems: 'center',
      width,
      height,
      marginTop: 10,
      paddingLeft: 10,
      paddingBottom: 10,
      paddingTop: 10,
      borderColor: editable ? borderColor : theme.grey,
      borderRadius,
      borderWidth: 1,
      backgroundColor: editable ? theme.white : theme.grey
    },
    text: {
      color: theme.color,
      textAlign: 'center',
      fontSize: 15
    },
    icon: {
      position: 'absolute',
      top: 22,
      right: 15
    }
  })
}

export default Input