import axios from 'axios'
import {baseUrl} from 'Utilities/ApiUrls';

axios.defaults.baseURL = baseUrl;

const requestHandler = (request) => {
  // use the section to add request heders like access tokens etc..
  return request
}

const successHandler = (response) => {
  if (response.status === 200) {
    return {...response.data};
  }
}

const errorHandler = (responseData) => {
  let {response} = responseData
  return Promise.reject({...response});
}

axios.interceptors.request.use(
    request => requestHandler(request)
)

axios.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
)

const Api = {
  all: axios.all,

  get (id, config) {
    return axios.get(id, config);
  },
  post (id, data, config) {
    return axios.post(id, data, config)
  }
}

export default Api;
