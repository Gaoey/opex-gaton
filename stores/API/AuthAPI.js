
import axios from 'axios'
import { path, version } from './path'

class AuthAPI {

  signup = (data) => axios({
    method: 'post',
    url: `${path}/${version}/signup`,
  })

  login = (data) => axios({
    method: 'post',
    url: `${path}/${version}/login`,
  })

}

export default AuthAPI