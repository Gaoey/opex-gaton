import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../context/ThemeContext';

const GoBackButton = ({ navigation, pop2top }) => {
  return (
    <TouchableOpacity onPress={() => pop2top ? navigation.popToTop() : navigation.pop()}>
      <Icon name="chevron-left" style={{ color: theme.color, fontSize: 35, paddingLeft: 20 }} />
    </TouchableOpacity>
  )
}

export default GoBackButton
