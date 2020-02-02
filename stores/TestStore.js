import { decorate, observable, runInAction, action } from 'mobx';
import buildActionTypes from "../utils/buildActionType"


export const PING_TEST = buildActionTypes('PING_TEST')

const initial = {
  ping: null,
}

class TestStore {

  state = initial
  data = initial
  error = initial

  constructor(testAPI) {
    this.testAPI = testAPI
  }

  ping = async () => {
    runInAction(PING_TEST.REQUEST, () => { this.state.ping = PING_TEST.REQUEST })
    this.TestAPI.ping()
      .then(response => {
        runInAction(PING_TEST.SUCCESS, () => {
          this.state.ping = PING_TEST.SUCCESS
          this.data.ping = response.data.data
        })
      }).catch(error => {
        runInAction(PING_TEST.FAILURE, () => {
          this.state.ping = PING_TEST.FAILURE
          this.error.ping = error
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
  TestStore,
  {
    state: observable,
    data: observable,
    error: observable,
  }
)
export default TestStore 