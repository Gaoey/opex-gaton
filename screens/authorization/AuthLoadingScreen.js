import React from 'react';
import { AsyncStorage, View } from 'react-native';
import R from 'ramda'
import { Loading } from '../components';

class AuthLoadingScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const { navigation } = this.props
    const userToken = await AsyncStorage.getItem('@token');
    const hasAuthorize = !R.isNil(userToken)
    if (hasAuthorize) {
      navigation.navigate('Main')
    } else {
      navigation.navigate('Auth')
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
        <Loading />
      </View>
    );
  }
}

export default AuthLoadingScreen