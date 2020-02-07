import axios from 'axios';
import { action, decorate, observable, runInAction } from 'mobx';
import { AsyncStorage } from 'react-native';
import buildActionTypes from '../utils/buildAction';

export const LOGIN = buildActionTypes("LOGIN")
export const SIGN_UP = buildActionTypes("SIGN_UP")

const initial = {
  login: null,
  signup: null
}

class AuthStore {

  state = initial
  data = initial
  error = initial

  constructor(authAPI) {
    this.authAPI = authAPI
  }

  login = async (data) => {
    runInAction(LOGIN.REQUEST, () => { this.state = LOGIN.REQUEST })
    this.authAPI.login(data)
      .then(response => {
        runInAction(LOGIN.SUCCESS, () => { this.state = LOGIN.SUCCESS })
        const token = `Bearer ${response.data.data.token}`
        await AsyncStorage.setItem('@token', token)
        await AsyncStorage.setItem('@appId', "02")
        axios.defaults.headers.common.Authorization = token
        axios.defaults.headers.common.appId = "02"
      }).catch(error => {
        runInAction(LOGIN.FAILURE, () => {
          this.state = LOGIN.FAILURE
          this.error = error
        })
      })
  }


  signup = async (data) => {
    runInAction(SIGN_UP.REQUEST, () => { this.state = SIGN_UP.REQUEST })
    this.authAPI.signup(data)
      .then(response => {
        runInAction(SIGN_UP.SUCCESS, () => {
          this.state = SIGN_UP.SUCCESS
          this.data = response.data.data
        })
      })
      .catch(error => {
        runInAction(SIGN_UP.FAILURE, () => {
          this.state = SIGN_UP.FAILURE
          this.error = error.response.data
        })
      })
  }

  clearState = () => {
    runInAction('clear test state', () => {
      this.state = initial
    })
  }

  clearData = () => {
    runInAction('clear test data', () => {
      this.data = initial
    })
  }
}


decorate(
  AuthStore,
  {
    state: observable,
    data: observable,
    error: observable,
    signup: action,
    processSignUp: action,
    clearState: action
  }
)

export default AuthStore