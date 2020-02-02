import TestStore from './TestStore'
import API from './API'

export default {
  testStore: new TestStore(API.testAPI)
}