import PropTypes from 'prop-types';
import R from 'ramda';
import React, { useContext } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DefaultUser from '../../assets/default-user.jpg';
import { ThemeContext } from '../../context/ThemeContext';
import { emptyFn } from '../../utils/functions';

function MainHeader(props) {
  const { text, profileNavigate, withProfile, withSearch } = props
  const theme = useContext(ThemeContext)
  const styles = stylesheet(theme)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> {text} </Text>
      <View style={styles.right}>
        {withSearch && <Search />}
        {withProfile && <Profile {...props} navigate={profileNavigate} />}
      </View>
    </SafeAreaView>
  )
}

function Profile(props) {
  const { imageName, navigate } = props
  const theme = useContext(ThemeContext)
  const styles = stylesheet(theme)
  // @TODO IMAGE
  // const URI = R.isEmpty(imageName) ? DefaultUser : { uri: imageName }
  return (
    <TouchableOpacity onPress={() => navigate()}>
      <Image source={DefaultUser} style={styles.image} />
    </TouchableOpacity>
  )
}

function Search(props) {
  const theme = useContext(ThemeContext)
  const styles = stylesheet(theme)
  return (
    <Icon name="magnify" style={styles.search} />
  )
}

MainHeader.propTypes = {
  text: PropTypes.string.isRequired,
  profileNavigate: PropTypes.func,
  withProfile: PropTypes.bool,
  withSearch: PropTypes.bool
}

MainHeader.defaultProps = {
  profileNavigate: emptyFn,
  withProfile: false,
  withSearch: false
}

Profile.propTypes = {
  imageName: PropTypes.array,
  navigate: PropTypes.func
}

Profile.defaultProps = {
  imageName: null,
  navigate: emptyFn
}

function stylesheet(theme) {
  return StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderColor: theme.white,
      backgroundColor: theme.white,
      height: 100
    },
    text: {
      fontSize: 31,
      fontWeight: 'bold',
      paddingLeft: 20
    },
    image: {
      borderRadius: 36 / 2,
      width: 36,
      height: 36
    },
    right: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 20
    },
    search: {
      fontSize: 24,
      marginRight: 15,
      marginTop: 5,
      color: theme.color
    }
  })
}

export default MainHeader