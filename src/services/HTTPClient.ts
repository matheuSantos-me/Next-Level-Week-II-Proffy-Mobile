import Axios from 'axios'

const HTTPClient = Axios.create({
  baseURL: 'http://10.0.0.105:3333'
})

export default HTTPClient