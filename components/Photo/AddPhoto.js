import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Constants from 'expo-constants'
import R from 'ramda';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Button from '../Button/Button';

export default class AddPhoto extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    this.getPermissionAsync();
  }

  componentDidUpdate(prevProps, prevState) {
    const { images } = this.state
    const { onAddPhoto } = this.props
    if (prevState.images.length !== images.length) {
      onAddPhoto(images)
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
      this.setState(state => {
        return { images: [ ...state.images, result.uri ] }
      });
    }
  };

  removeImage = (imageUri) => {
    this.setState(state => {
      return { images: state.images.filter(image => image !== imageUri) }
    });
  }

  render() {
    const { images } = this.state;
    const { children } = this.props
    return R.isEmpty(images)
      ? <View style={styles.container}>
        <Button text="Add Photo" onPress={this.pickImage} transparent />
      </View>
      : children(images, this.removeImage, this.pickImage)
  }
}

AddPhoto.propTypes = {
  children: PropTypes.func.isRequired
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
})