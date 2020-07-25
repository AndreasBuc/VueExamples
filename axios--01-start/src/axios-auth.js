import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vuejs-http-37f33.firebaseio.com/',

})
instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance
