import TestStore from './TestStore'
import API from './API'
import AuthStore from './AuthStore'

export default {
  testStore: new TestStore(API.testAPI),
  authStore: new AuthStore(API.authAPI)
}