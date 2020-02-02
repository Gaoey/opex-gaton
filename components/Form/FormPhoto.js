import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import R from 'ramda'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import AddPhoto from "../Photo/AddPhoto";
import Form from './Form';
import { theme } from '../../context/ThemeContext';

function ShowImage({ image, removeImage }) {
  return (
    <View style={{ marginRight: 10 }}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <TouchableOpacity onPress={() => removeImage(image)} style={{ width: 30 }}>
          <Icon name="close-circle" style={styles.closeIcon} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

function FooterComponent({ pickImage }) {
  return (
    <View style={styles.addMoreImageBlock}>
      <TouchableOpacity onPress={() => pickImage()}>
        <Icon name="plus-circle" style={styles.addMoreImage} />
      </TouchableOpacity>
    </View>
  )
}

function FormInput(props) {
  const { onAddPhoto } = props
  return (
    <View style={{ marginTop: 10 }}>
      <AddPhoto onAddPhoto={onAddPhoto}>
        {
          (images, removeImage, pickImage) =>
            !R.isNil(images) &&
            <Form {...props}>
              {
                newProps =>
                  <FlatList
                    data={images}
                    keyExtractor={(image) => image}
                    renderItem={({ item }) => <ShowImage image={item} removeImage={removeImage} />}
                    ListFooterComponent={() => <FooterComponent pickImage={pickImage} />}
                    horizontal
                  />
              }
            </Form>
        }
      </AddPhoto>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5
  },
  image: {
    width: 100,
    height: 100
  },
  closeIcon: {
    borderRadius: 30 / 2,
    fontSize: 30,
    color: 'red',
    left: 70,
    right: 0,
    top: 0,
    bottom: 5
  },
  addMoreImageBlock: {
    borderWidth: 1,
    borderColor: theme.grey,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addMoreImage: {
    fontSize: 40,
    color: theme.color
  }
})

export default FormInput