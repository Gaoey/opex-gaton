import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants'
import R from 'ramda'
import React, { Component } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import DefaultUser from '../../assets/default-user.jpg';

export default class ProfilePhoto extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image: props.image || "",
    };
  }

  componentDidMount() {
    const { onAddPhoto } = this.props
    const { image } = this.state
    this.getPermissionAsync();
    onAddPhoto(image)
  }

  componentDidUpdate(prevProps, prevState) {
    const { onAddPhoto } = this.props
    const { image } = this.state
    if (prevState.image !== image) {
      onAddPhoto(image)
    }
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        console.warn("Not Grant Access")
      }
    }
  }

  pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [ 4, 3 ],
    });
    if (!result.cancelled) {
      this.setState((state) => {
        return { image: result }
      });
    }
  };

  render() {
    const { image } = this.state;
    const URI = R.isEmpty(image) ? DefaultUser : { uri: image.uri }
    return (
      <View style={styles.container}>
        <ImageBackground source={URI} style={styles.image}>
          <TouchableOpacity onPress={this.pickImage}>
            <Icon name="plus-circle" style={styles.addPhoto} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    )
  }
}

ProfilePhoto.propTypes = {
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

ProfilePhoto.defaultProps = {
  image: ""
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    margin: 20
  },
  addPhoto: {
    fontSize: 40
  }
})