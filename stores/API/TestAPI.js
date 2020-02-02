
import axios from 'axios'
import { path, version } from './path'

class TestAPI {
  ping = () => axios({
    method: 'get',
    url: `${path}/${version}/ping`,
  })

}

export default TestAPI