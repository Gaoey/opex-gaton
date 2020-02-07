import { Formik } from 'formik';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React, { Component, useContext } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import { Button, Input, Loading, WelcomeMessage } from '../../../components';
import { ThemeContext } from '../../../context/ThemeContext';
import { LOGIN } from '../../../stores/AuthStore';

export const INPUT_TYPE = {
  PASSWORD: "PASSWORD",
  TEXT: "TEXT"
}

function SignUpText(props) {
  const { navigation } = props
  const theme = useContext(ThemeContext)
  return (
    <Text style={{ color: theme.grey2 }}> Don't have account?
      <Text
        style={{ color: theme.color }}
        onPress={() => navigation.navigate('SignUp')}>
        Sign up
        </Text>
    </Text>
  )
}

const LoginScheme = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required')
})

class LoginScreen extends Component {
  
  loginForm = () => {
    const { navigation } = this.props
    return (
      <Formik
        initialValues={
          {
            username: "",
            password: ""
          }
        }
        validationSchema={LoginScheme}
        onSubmit={async (values) => {
          console.log({ values })
          navigation.navigate('AuthLoading')
        }}>
        {
          (props) =>
            props.isSubmitting
              ? <Loading />
              : <View style={styles.container}>
                <View style={styles.header}>
                  <WelcomeMessage />
                </View>
                <View style={styles.input}>
                  <Input
                    onChangeText={props.handleChange('username')}
                    placeholder="Username"
                    borderRadius={50}
                    height={50}
                  />
                  <Input
                    onChangeText={props.handleChange('password')}
                    placeholder="Password"
                    type={INPUT_TYPE.PASSWORD}
                    secureTextEntry
                    borderRadius={50}
                    height={50}
                  />
                </View>
                <View style={styles.button}>
                  <Button text="Sign In" onPress={props.handleSubmit} />
                </View>
                <SignUpText navigation={navigation} />
              </View>

        }
      </Formik>
    )
  }

  navigate = () => {
    const { navigation } = this.props
    navigation.navigate('Main')
    return this.loginForm()
  }

  failed = () => {
    return (
      <View>
        {
          Alert.alert(
            'Login Failure!',
            'please insert username and password again',
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
          )
        }
      </View>
    )
  }

  static navigationOptions = {
    header: null
  }

  render() {
    const { authStore } = this.props
    switch (authStore.state) {
      case LOGIN.REQUEST:
        return <Loading />
      case LOGIN.FAILURE:
        Alert.alert(
          'Login Failure!',
          'please insert username and password again',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        )
        return this.loginForm()
      default:
        return this.loginForm()
    }
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  authStore: PropTypes.shape({
    getValues: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string
    }),
    setUsername: PropTypes.func,
    setPassword: PropTypes.func
  }).isRequired
};

SignUpText.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%'
  },
  header: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 80
  },
  button: {
    marginTop: 50,
    marginBottom: 20
  }
});

export default LoginScreen